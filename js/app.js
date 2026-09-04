document.addEventListener('DOMContentLoaded', () => {
    const problemsList = document.getElementById('problemsList');
    const searchInput = document.getElementById('searchInput');
    const difficultyFilter = document.getElementById('difficultyFilter');
    const statusFilter = document.getElementById('statusFilter');
    const easyCount = document.getElementById('easyCount');
    const mediumCount = document.getElementById('mediumCount');
    const hardCount = document.getElementById('hardCount');
    const themeToggle = document.getElementById('themeToggle');
    const userAvatar = document.getElementById('userAvatar');
    const userDropdown = document.getElementById('userDropdown');
    const logoutBtn = document.getElementById('logoutBtn');

    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Update user avatar
    if (currentUser && userAvatar) {
        userAvatar.innerHTML = `<span>${currentUser.name.charAt(0).toUpperCase()}</span>`;
    }

    // User dropdown toggle
    if (userAvatar && userDropdown) {
        userAvatar.addEventListener('click', () => {
            userDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!userAvatar.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('active');
            }
        });
    }

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }

    // Load saved progress from localStorage
    let userProgress = JSON.parse(localStorage.getItem('leetcodeProgress')) || {};

    // Update stats
    function updateStats() {
        const easy = problems.filter(p => p.difficulty === 'Easy').length;
        const medium = problems.filter(p => p.difficulty === 'Medium').length;
        const hard = problems.filter(p => p.difficulty === 'Hard').length;
        
        easyCount.textContent = easy;
        mediumCount.textContent = medium;
        hardCount.textContent = hard;
    }

    // Get status icon HTML
    function getStatusIcon(problemId) {
        const status = userProgress[problemId];
        if (status === 'solved') {
            return '<div class="status-icon solved"><i class="fas fa-check"></i></div>';
        } else if (status === 'attempted') {
            return '<div class="status-icon attempted"><i class="fas fa-minus"></i></div>';
        }
        return '<div class="status-icon todo"></div>';
    }

    // Render problems list
    function renderProblems(filteredProblems) {
        problemsList.innerHTML = '';
        
        filteredProblems.forEach(problem => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${getStatusIcon(problem.id)}</td>
                <td>
                    <a href="problem.html?id=${problem.id}" class="problem-title">
                        <span class="problem-number">${problem.id}.</span>
                        ${problem.title}
                    </a>
                </td>
                <td>${problem.acceptance}</td>
                <td><span class="difficulty-badge ${problem.difficulty.toLowerCase()}">${problem.difficulty}</span></td>
            `;
            problemsList.appendChild(row);
        });
    }

    // Filter problems
    function filterProblems() {
        const searchTerm = searchInput.value.toLowerCase();
        const difficulty = difficultyFilter.value;
        const status = statusFilter.value;

        let filtered = problems.filter(problem => {
            const matchesSearch = problem.title.toLowerCase().includes(searchTerm);
            const matchesDifficulty = difficulty === 'all' || problem.difficulty === difficulty;
            
            let matchesStatus = true;
            if (status !== 'all') {
                const problemStatus = userProgress[problem.id] || 'todo';
                matchesStatus = problemStatus === status;
            }

            return matchesSearch && matchesDifficulty && matchesStatus;
        });

        renderProblems(filtered);
    }

    // Event listeners
    searchInput.addEventListener('input', filterProblems);
    difficultyFilter.addEventListener('change', filterProblems);
    statusFilter.addEventListener('change', filterProblems);

    // Theme toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });

    // Initialize
    updateStats();
    renderProblems(problems);
});
