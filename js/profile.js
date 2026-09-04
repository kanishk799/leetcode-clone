document.addEventListener('DOMContentLoaded', () => {
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileAvatar = document.getElementById('profileAvatar');
    const solvedCount = document.getElementById('solvedCount');
    const submissionsCount = document.getElementById('submissionsCount');
    const streakCount = document.getElementById('streakCount');
    const ranking = document.getElementById('ranking');
    const editProfileBtn = document.getElementById('editProfileBtn');

    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    // Load user profile
    function loadProfile() {
        profileName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
        profileAvatar.innerHTML = `<span>${currentUser.name.charAt(0).toUpperCase()}</span>`;
        
        // Load stats from localStorage
        const progress = JSON.parse(localStorage.getItem('leetcodeProgress')) || {};
        const solved = Object.values(progress).filter(v => v === 'solved').length;
        const attempted = Object.values(progress).filter(v => v === 'attempted').length;
        
        solvedCount.textContent = solved;
        submissionsCount.textContent = solved + attempted;
        streakCount.textContent = Math.floor(Math.random() * 30) + 1;
        ranking.textContent = `#${Math.floor(Math.random() * 50000) + 1000}`;
        
        // Update progress bars
        updateProgressBars(solved);
    }

    function updateProgressBars(solved) {
        const easy = Math.min(Math.floor(solved * 0.4), 50);
        const medium = Math.min(Math.floor(solved * 0.4), 100);
        const hard = Math.min(Math.floor(solved * 0.2), 50);
        
        document.getElementById('easyProgress').textContent = `${easy}/50`;
        document.getElementById('mediumProgress').textContent = `${medium}/100`;
        document.getElementById('hardProgress').textContent = `${hard}/50`;
        
        document.getElementById('easyBar').style.width = `${(easy/50)*100}%`;
        document.getElementById('mediumBar').style.width = `${(medium/100)*100}%`;
        document.getElementById('hardBar').style.width = `${(hard/50)*100}%`;
    }

    // Edit profile
    editProfileBtn.addEventListener('click', () => {
        const newName = prompt('Enter new username:', currentUser.name);
        if (newName && newName.trim()) {
            currentUser.name = newName.trim();
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            loadProfile();
        }
    });

    // Load activity
    function loadActivity() {
        const activityList = document.getElementById('activityList');
        const progress = JSON.parse(localStorage.getItem('leetcodeProgress')) || {};
        
        if (Object.keys(progress).length === 0) {
            activityList.innerHTML = '<p class="empty-state">No activity yet. Start solving problems!</p>';
        }
    }

    loadProfile();
    loadActivity();
});
