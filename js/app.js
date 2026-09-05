document.addEventListener('DOMContentLoaded', async () => {
  const problemsList = document.getElementById('problemsList');
  const searchInput = document.getElementById('searchInput');
  const difficultyFilter = document.getElementById('difficultyFilter');
  const topicFilter = document.getElementById('topicFilter');
  const sortSelect = document.getElementById('sortSelect');
  const loadingState = document.getElementById('loadingState');
  const emptyState = document.getElementById('emptyState');
  const easyCount = document.getElementById('easyCount');
  const mediumCount = document.getElementById('mediumCount');
  const hardCount = document.getElementById('hardCount');
  const easySolved = document.getElementById('easySolved');
  const mediumSolved = document.getElementById('mediumSolved');
  const hardSolved = document.getElementById('hardSolved');
  const themeToggle = document.getElementById('themeToggle');
  const dailyChallenge = document.getElementById('dailyChallenge');

  let currentPage = 1;
  const perPage = 50;

  updateNavbar();
  loadTheme();

  // Load topics for filter
  try {
    const { topics } = await ProblemsService.getTopics();
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      topicFilter.appendChild(opt);
    });
  } catch (err) {
    console.error('Failed to load topics:', err);
  }

  // Load daily challenge
  try {
    const daily = await ProblemsService.getDaily();
    if (daily && daily.problem) {
      dailyChallenge.style.display = 'flex';
      document.getElementById('dailyChallengeLink').textContent = `${daily.problem.id}. ${daily.problem.title}`;
      document.getElementById('dailyChallengeLink').href = `problem.html?id=${daily.problem.id}`;
    }
  } catch (err) {
    console.error('Failed to load daily challenge:', err);
  }

  // Load stats
  async function loadStats() {
    try {
      const stats = await ProblemsService.getStats();
      easyCount.textContent = stats.easy;
      mediumCount.textContent = stats.medium;
      hardCount.textContent = stats.hard;

      if (AuthService.isLoggedIn()) {
        try {
          const profile = await ProfileService.get();
          easySolved.textContent = `${profile.stats.solvedEasy} Solved`;
          mediumSolved.textContent = `${profile.stats.solvedMedium} Solved`;
          hardSolved.textContent = `${profile.stats.solvedHard} Solved`;
        } catch {}
      }
    } catch (err) {
      console.error('Failed to load stats:', err);
    }
  }

  // Load problems
  async function loadProblems() {
    loadingState.style.display = 'block';
    emptyState.style.display = 'none';
    problemsList.innerHTML = '';

    try {
      const params = {
        page: currentPage,
        limit: perPage
      };

      const search = searchInput.value.trim();
      if (search) params.search = search;

      const difficulty = difficultyFilter.value;
      if (difficulty !== 'all') params.difficulty = difficulty;

      const topic = topicFilter.value;
      if (topic !== 'all') params.topic = topic;

      const sort = sortSelect.value;
      if (sort) params.sort = sort;

      const data = await ProblemsService.getAll(params);
      loadingState.style.display = 'none';

      if (data.problems.length === 0) {
        emptyState.style.display = 'block';
        return;
      }

      data.problems.forEach(p => {
        const topics = typeof p.topics === 'string' ? JSON.parse(p.topics) : (p.topics || []);
        const statusIcon = getStatusIcon(p.userStatus || 'todo');

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${statusIcon}</td>
          <td class="problem-id">${p.id}</td>
          <td>
            <a href="problem.html?id=${p.id}" class="problem-title">${p.title}</a>
          </td>
          <td class="problem-topics">
            ${topics.slice(0, 3).map(t => `<span class="topic-tag">${t}</span>`).join('')}
            ${topics.length > 3 ? `<span class="topic-tag more">+${topics.length - 3}</span>` : ''}
          </td>
          <td>${p.acceptance}%</td>
          <td><span class="difficulty-badge ${p.difficulty.toLowerCase()}">${p.difficulty}</span></td>
        `;
        problemsList.appendChild(row);
      });

      renderPagination(data.totalPages, data.page);
    } catch (err) {
      loadingState.style.display = 'none';
      emptyState.style.display = 'block';
      console.error('Failed to load problems:', err);
    }
  }

  function getStatusIcon(status) {
    if (status === 'solved') return '<div class="status-icon solved"><i class="fas fa-check"></i></div>';
    if (status === 'attempted') return '<div class="status-icon attempted"><i class="fas fa-minus"></i></div>';
    return '<div class="status-icon todo"></div>';
  }

  function renderPagination(totalPages, current) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    if (current > 1) {
      const prev = document.createElement('button');
      prev.className = 'page-btn';
      prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prev.onclick = () => { currentPage--; loadProblems(); };
      pagination.appendChild(prev);
    }

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = `page-btn ${i === current ? 'active' : ''}`;
      btn.textContent = i;
      btn.onclick = () => { currentPage = i; loadProblems(); };
      pagination.appendChild(btn);
    }

    if (current < totalPages) {
      const next = document.createElement('button');
      next.className = 'page-btn';
      next.innerHTML = '<i class="fas fa-chevron-right"></i>';
      next.onclick = () => { currentPage++; loadProblems(); };
      pagination.appendChild(next);
    }
  }

  // Event listeners
  const debouncedSearch = debounce(() => { currentPage = 1; loadProblems(); }, 300);
  searchInput.addEventListener('input', debouncedSearch);
  difficultyFilter.addEventListener('change', () => { currentPage = 1; loadProblems(); });
  topicFilter.addEventListener('change', () => { currentPage = 1; loadProblems(); });
  sortSelect.addEventListener('change', () => { currentPage = 1; loadProblems(); });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  });

  function loadTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      document.body.classList.add('light-theme');
      const icon = themeToggle.querySelector('i');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }

  loadStats();
  loadProblems();
});
