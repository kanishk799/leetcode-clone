document.addEventListener('DOMContentLoaded', async () => {
  updateNavbar();

  const contestList = document.getElementById('contestList');
  const upcomingList = document.getElementById('upcomingList');
  const ongoingList = document.getElementById('ongoingList');
  const endedList = document.getElementById('endedList');

  try {
    const data = await ContestsService.getAll();
    const contests = data.contests;

    if (contests.length === 0) {
      contestList.innerHTML = '<div class="empty-state"><i class="fas fa-trophy"></i><h3>No contests yet</h3><p>Check back soon!</p></div>';
      return;
    }

    const upcoming = contests.filter(c => c.status === 'upcoming');
    const ongoing = contests.filter(c => c.status === 'ongoing');
    const ended = contests.filter(c => c.status === 'ended');

    renderSection(upcomingList, upcoming, 'upcoming');
    renderSection(ongoingList, ongoing, 'ongoing');
    renderSection(endedList, ended, 'ended');
  } catch (err) {
    console.error('Failed to load contests:', err);
    contestList.innerHTML = '<div class="empty-state"><p>Failed to load contests</p></div>';
  }

  function renderSection(container, contests, status) {
    if (!container) return;
    if (contests.length === 0) {
      container.innerHTML = '<p class="empty">No contests in this category</p>';
      return;
    }

    container.innerHTML = contests.map(c => `
      <div class="contest-card ${status}">
        <div class="contest-header">
          <h3>${escapeHtml(c.title)}</h3>
          <span class="contest-status ${status}">${c.starts_at ? formatDate(c.starts_at) : status}</span>
        </div>
        <p>${escapeHtml(c.description?.substring(0, 150) || '')}</p>
        <div class="contest-footer">
          <span><i class="fas fa-users"></i> ${c.participants} joined</span>
          <span><i class="fas fa-clock"></i> ${c.duration} minutes</span>
          <div class="contest-actions">
            ${status === 'upcoming' ? `<button class="btn btn-primary btn-sm" onclick="joinContest(${c.id})">Register</button>` : ''}
            ${status === 'ongoing' ? `<button class="btn btn-success btn-sm" onclick="enterContest(${c.id})">Enter</button>` : ''}
            ${status === 'ended' ? `<a href="contest.html?id=${c.id}" class="btn btn-secondary btn-sm">Results</a>` : ''}
          </div>
        </div>
      </div>`).join('');
  }

  window.joinContest = async function(id) {
    if (!AuthService.isLoggedIn()) { toast.warning('Please login to register'); return; }
    try {
      await ContestsService.register(id);
      toast.success('Registered successfully!');
      location.reload();
    } catch (err) {
      toast.error(err.message || 'Failed to register');
    }
  };

  window.enterContest = async function(id) {
    window.location.href = `contest.html?id=${id}`;
  };
});

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
