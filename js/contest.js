document.addEventListener('DOMContentLoaded', () => {
    const contestTabs = document.querySelectorAll('.contest-tab');
    const contestContent = document.getElementById('contestContent');

    // Tab switching
    contestTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            contestTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const tabType = tab.dataset.tab;
            loadContests(tabType);
        });
    });

    // Load contests based on tab
    function loadContests(type) {
        const contests = {
            upcoming: `
                <div class="contest-card">
                    <div class="contest-status live">
                        <i class="fas fa-circle"></i> LIVE NOW
                    </div>
                    <h3>Weekly Contest 350</h3>
                    <div class="contest-info">
                        <span><i class="fas fa-clock"></i> 1:30:00</span>
                        <span><i class="fas fa-users"></i> 12,456 participants</span>
                    </div>
                    <button class="btn btn-danger" onclick="joinContest(350)">
                        <i class="fas fa-play"></i> Join Now
                    </button>
                </div>
                <div class="contest-card">
                    <div class="contest-status upcoming">
                        <i class="fas fa-calendar"></i> UPCOMING
                    </div>
                    <h3>Biweekly Contest 120</h3>
                    <div class="contest-info">
                        <span><i class="fas fa-clock"></i> Starts in 2 days</span>
                    </div>
                    <button class="btn btn-secondary" onclick="setReminder(120)">
                        <i class="fas fa-bell"></i> Remind Me
                    </button>
                </div>
            `,
            past: `
                <div class="contest-card completed">
                    <div class="contest-status completed">
                        <i class="fas fa-check"></i> COMPLETED
                    </div>
                    <h3>Weekly Contest 349</h3>
                    <div class="contest-info">
                        <span><i class="fas fa-users"></i> 15,234 participants</span>
                        <span><i class="fas fa-trophy"></i> Your rank: 1,245</span>
                    </div>
                    <button class="btn btn-secondary" onclick="viewContest(349)">
                        <i class="fas fa-eye"></i> View Results
                    </button>
                </div>
                <div class="contest-card completed">
                    <div class="contest-status completed">
                        <i class="fas fa-check"></i> COMPLETED
                    </div>
                    <h3>Biweekly Contest 119</h3>
                    <div class="contest-info">
                        <span><i class="fas fa-users"></i> 18,567 participants</span>
                        <span><i class="fas fa-trophy"></i> Your rank: 2,345</span>
                    </div>
                    <button class="btn btn-secondary" onclick="viewContest(119)">
                        <i class="fas fa-eye"></i> View Results
                    </button>
                </div>
            `,
            'my-contests': `
                <div class="empty-state">
                    <i class="fas fa-trophy"></i>
                    <h3>No contests yet</h3>
                    <p>Join a contest to see your history here</p>
                    <button class="btn btn-primary" onclick="loadContests('upcoming')">
                        Browse Contests
                    </button>
                </div>
            `
        };

        contestContent.innerHTML = `<div class="contest-list">${contests[type]}</div>`;
    }

    // Join contest
    window.joinContest = function(contestId) {
        const user = localStorage.getItem('currentUser');
        if (!user) {
            alert('Please login to join contests');
            window.location.href = 'login.html';
            return;
        }
        alert(`Joining Contest ${contestId}... This is a demo!`);
    };

    // Set reminder
    window.setReminder = function(contestId) {
        alert(`Reminder set for Contest ${contestId}!`);
    };

    // View contest results
    window.viewContest = function(contestId) {
        alert(`Viewing results for Contest ${contestId}... This is a demo!`);
    };
});
