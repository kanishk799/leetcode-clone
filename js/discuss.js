document.addEventListener('DOMContentLoaded', () => {
    const newPostBtn = document.getElementById('newPostBtn');
    const newPostModal = document.getElementById('newPostModal');
    const closeModalBtn = document.getElementById('closeModal');
    const cancelPostBtn = document.getElementById('cancelPost');
    const newPostForm = document.getElementById('newPostForm');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');

    // Open modal
    newPostBtn.addEventListener('click', () => {
        const user = localStorage.getItem('currentUser');
        if (!user) {
            alert('Please login to create a post');
            window.location.href = 'login.html';
            return;
        }
        newPostModal.classList.add('active');
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        newPostModal.classList.remove('active');
    });

    cancelPostBtn.addEventListener('click', () => {
        newPostModal.classList.remove('active');
    });

    // Close on outside click
    newPostModal.addEventListener('click', (e) => {
        if (e.target === newPostModal) {
            newPostModal.classList.remove('active');
        }
    });

    // Submit new post
    newPostForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('postTitle').value;
        const category = document.getElementById('postCategory').value;
        const content = document.getElementById('postContent').value;
        
        // Save to localStorage
        const posts = JSON.parse(localStorage.getItem('discussPosts')) || [];
        const user = JSON.parse(localStorage.getItem('currentUser'));
        
        const newPost = {
            id: Date.now(),
            title,
            category,
            content,
            author: user.name,
            votes: 0,
            comments: 0,
            views: 0,
            createdAt: new Date().toISOString()
        };
        
        posts.unshift(newPost);
        localStorage.setItem('discussPosts', JSON.stringify(posts));
        
        newPostModal.classList.remove('active');
        newPostForm.reset();
        
        alert('Post published successfully!');
        loadPosts();
    });

    // Vote functionality
    document.querySelectorAll('.vote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const user = localStorage.getItem('currentUser');
            if (!user) {
                alert('Please login to vote');
                return;
            }
            
            const voteCount = this.parentElement.querySelector('.vote-count');
            const currentVote = parseInt(voteCount.textContent);
            
            if (this.classList.contains('up')) {
                voteCount.textContent = currentVote + 1;
            } else {
                voteCount.textContent = currentVote - 1;
            }
        });
    });

    // Filter posts
    categoryFilter.addEventListener('change', loadPosts);
    sortBy.addEventListener('change', loadPosts);

    function loadPosts() {
        // In a real app, this would fetch from API
        console.log('Loading posts...');
    }
});
