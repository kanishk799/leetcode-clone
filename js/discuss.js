document.addEventListener('DOMContentLoaded', async () => {
  updateNavbar();

  const discussList = document.getElementById('discussList');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortBy = document.getElementById('sortBy');
  const searchInput = document.getElementById('discussSearch');
  const newPostBtn = document.getElementById('newPostBtn');
  const newPostModal = document.getElementById('newPostModal');

  let currentCategory = 'all';
  let currentSort = 'recent';

  // Load discussions
  async function loadDiscussions() {
    try {
      const params = {};
      if (currentCategory !== 'all') params.category = currentCategory;
      if (currentSort) params.sort = currentSort;
      if (searchInput?.value) params.search = searchInput.value;

      const data = await DiscussionsService.getAll(params);

      if (data.discussions.length === 0) {
        discussList.innerHTML = '<div class="empty-state"><i class="fas fa-comments"></i><h3>No discussions yet</h3><p>Be the first to start a discussion!</p></div>';
        return;
      }

      discussList.innerHTML = data.discussions.map(d => `
        <div class="discuss-card" onclick="viewDiscussion(${d.id})">
          <div class="discuss-votes">
            <button class="vote-btn up ${d.userVote === 1 ? 'active' : ''}" onclick="event.stopPropagation(); voteDiscussion(${d.id}, 1)">
              <i class="fas fa-chevron-up"></i>
            </button>
            <span class="vote-count">${d.upvotes}</span>
            <button class="vote-btn down ${d.userVote === -1 ? 'active' : ''}" onclick="event.stopPropagation(); voteDiscussion(${d.id}, -1)">
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
          <div class="discuss-content">
            <div class="discuss-meta">
              <span class="category-tag ${d.category.toLowerCase()}">${d.category}</span>
              <span class="time">${timeAgo(d.created_at)}</span>
            </div>
            <h3>${escapeHtml(d.title)}</h3>
            <p>${escapeHtml(d.content.substring(0, 200))}${d.content.length > 200 ? '...' : ''}</p>
            <div class="discuss-footer">
              <div class="author">
                <div class="avatar">${d.author[0].toUpperCase()}</div>
                <span>${d.author}</span>
              </div>
              <div class="discuss-stats">
                <span><i class="fas fa-eye"></i> ${d.views}</span>
              </div>
            </div>
          </div>
        </div>`).join('');
    } catch (err) {
      console.error('Failed to load discussions:', err);
      discussList.innerHTML = '<div class="empty-state"><p>Failed to load discussions</p></div>';
    }
  }

  // View single discussion
  window.viewDiscussion = async function(id) {
    try {
      const data = await DiscussionsService.getById(id);
      const d = data.discussion;

      discussList.innerHTML = `
        <div class="discussion-detail">
          <button class="btn btn-secondary btn-sm" onclick="loadDiscussions()" style="margin-bottom:1rem">
            <i class="fas fa-arrow-left"></i> Back
          </button>
          <div class="discussion-header-detail">
            <h1>${escapeHtml(d.title)}</h1>
            <div class="discuss-meta">
              <span class="category-tag ${d.category.toLowerCase()}">${d.category}</span>
              <span>by ${d.author}</span>
              <span>${timeAgo(d.created_at)}</span>
            </div>
          </div>
          <div class="discussion-body">${escapeHtml(d.content)}</div>
          <div class="comments-section">
            <h3>Comments (${data.comments.length})</h3>
            ${AuthService.isLoggedIn() ? `
              <form id="commentForm" class="comment-form">
                <textarea id="commentContent" placeholder="Add a comment..." rows="3" required></textarea>
                <button type="submit" class="btn btn-primary btn-sm">Post Comment</button>
              </form>` : '<p><a href="login.html">Login</a> to comment</p>'}
            <div class="comments-list">
              ${data.comments.map(c => `
                <div class="comment-item">
                  <div class="comment-header">
                    <div class="avatar">${c.author[0].toUpperCase()}</div>
                    <strong>${c.author}</strong>
                    <span class="time">${timeAgo(c.created_at)}</span>
                  </div>
                  <div class="comment-body">${escapeHtml(c.content)}</div>
                </div>`).join('')}
            </div>
          </div>
        </div>`;

      // Comment form
      document.getElementById('commentForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const content = document.getElementById('commentContent').value;
        try {
          await DiscussionsService.addComment(id, content);
          toast.success('Comment added');
          viewDiscussion(id);
        } catch (err) {
          toast.error(err.message || 'Failed to add comment');
        }
      });
    } catch (err) {
      toast.error('Failed to load discussion');
    }
  };

  // Vote
  window.voteDiscussion = async function(id, vote) {
    if (!AuthService.isLoggedIn()) {
      toast.warning('Please login to vote');
      return;
    }
    try {
      await DiscussionsService.vote(id, vote);
      loadDiscussions();
    } catch (err) {
      toast.error('Failed to vote');
    }
  };

  // New post modal
  newPostBtn?.addEventListener('click', () => {
    if (!AuthService.isLoggedIn()) {
      toast.warning('Please login to create a post');
      window.location.href = 'login.html';
      return;
    }
    newPostModal.classList.add('active');
  });

  document.getElementById('closeModal')?.addEventListener('click', () => newPostModal.classList.remove('active'));
  document.getElementById('cancelPost')?.addEventListener('click', () => newPostModal.classList.remove('active'));

  // Create post
  document.getElementById('newPostForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('postTitle').value;
    const category = document.getElementById('postCategory').value;
    const content = document.getElementById('postContent').value;

    try {
      await DiscussionsService.create(title, category, content);
      toast.success('Post published!');
      newPostModal.classList.remove('active');
      e.target.reset();
      loadDiscussions();
    } catch (err) {
      toast.error(err.message || 'Failed to create post');
    }
  });

  // Filters
  categoryFilter?.addEventListener('change', (e) => { currentCategory = e.target.value; loadDiscussions(); });
  sortBy?.addEventListener('change', (e) => { currentSort = e.target.value; loadDiscussions(); });
  searchInput?.addEventListener('input', debounce(() => loadDiscussions(), 300));

  loadDiscussions();
});

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
