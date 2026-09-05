document.addEventListener('DOMContentLoaded', async () => {
  if (!requireAuth()) return;

  updateNavbar();

  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
  const profileAvatar = document.getElementById('profileAvatar');

  try {
    const data = await ProfileService.get();
    const { user, stats, recentSubmissions, topicStats, dailyActivity, solvedProblems } = data;

    // Basic info
    profileName.textContent = user.username;
    profileEmail.textContent = user.email;
    profileAvatar.innerHTML = `<span>${user.username[0].toUpperCase()}</span>`;

    // Stats
    document.getElementById('solvedCount').textContent = stats.solvedTotal;
    document.getElementById('submissionsCount').textContent = stats.totalSubmissions;
    document.getElementById('streakCount').textContent = stats.streak;
    document.getElementById('ranking').textContent = `#${stats.ranking}`;

    // Progress bars
    const easyPct = stats.easyTotal > 0 ? (stats.solvedEasy / stats.easyTotal * 100) : 0;
    const medPct = stats.mediumTotal > 0 ? (stats.solvedMedium / stats.mediumTotal * 100) : 0;
    const hardPct = stats.hardTotal > 0 ? (stats.solvedHard / stats.hardTotal * 100) : 0;

    document.getElementById('easyProgress').textContent = `${stats.solvedEasy}/${stats.easyTotal}`;
    document.getElementById('easyBar').style.width = `${easyPct}%`;
    document.getElementById('mediumProgress').textContent = `${stats.solvedMedium}/${stats.mediumTotal}`;
    document.getElementById('mediumBar').style.width = `${medPct}%`;
    document.getElementById('hardProgress').textContent = `${stats.solvedHard}/${stats.hardTotal}`;
    document.getElementById('hardBar').style.width = `${hardPct}%`;

    // Acceptance rate
    const acceptanceEl = document.getElementById('acceptanceRate');
    if (acceptanceEl) acceptanceEl.textContent = `${stats.acceptanceRate}%`;

    // Recent activity
    const activityList = document.getElementById('activityList');
    if (recentSubmissions.length > 0) {
      activityList.innerHTML = recentSubmissions.map(s => `
        <div class="activity-item">
          <div class="activity-icon ${s.status === 'Accepted' ? 'solved' : 'attempted'}">
            <i class="fas ${s.status === 'Accepted' ? 'fa-check' : 'fa-code'}"></i>
          </div>
          <div class="activity-content">
            <p><a href="problem.html?id=${s.problem_id}">${s.problem_title}</a> - ${s.status}</p>
            <span class="time">${s.language} | ${s.runtime_ms}ms | ${timeAgo(s.created_at)}</span>
          </div>
        </div>`).join('');
    } else {
      activityList.innerHTML = '<p class="empty-state">No activity yet. Start solving problems!</p>';
    }

    // Topic progress
    const topicList = document.getElementById('topicProgress');
    if (topicList && Object.keys(topicStats).length > 0) {
      const sorted = Object.entries(topicStats).sort((a, b) => b[1].solved - a[1].solved);
      topicList.innerHTML = sorted.slice(0, 10).map(([topic, data]) => `
        <div class="topic-progress-item">
          <span>${topic}</span>
          <div class="topic-bar">
            <div class="topic-bar-fill" style="width: ${data.total > 0 ? (data.solved / data.total * 100) : 0}%"></div>
          </div>
          <span>${data.solved}/${data.total}</span>
        </div>`).join('');
    }

    // Solved problems
    const solvedList = document.getElementById('solvedProblems');
    if (solvedList && solvedProblems.length > 0) {
      solvedList.innerHTML = solvedProblems.map(p => `
        <a href="problem.html?id=${p.id}" class="solved-item">
          <span class="difficulty-badge ${p.difficulty.toLowerCase()}">${p.difficulty[0]}</span>
          <span>${p.title}</span>
        </a>`).join('');
    }
  } catch (err) {
    console.error('Failed to load profile:', err);
    toast.error('Failed to load profile');
  }

  // Edit profile
  document.getElementById('editProfileBtn')?.addEventListener('click', async () => {
    const newName = prompt('Enter new username:');
    if (newName && newName.trim()) {
      try {
        await ProfileService.updateUsername(newName.trim());
        toast.success('Username updated');
        const user = AuthService.getCurrentUser();
        if (user) {
          user.username = newName.trim();
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        document.getElementById('profileName').textContent = newName.trim();
      } catch (err) {
        toast.error(err.message || 'Failed to update username');
      }
    }
  });
});
