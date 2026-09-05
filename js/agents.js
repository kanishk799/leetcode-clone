document.addEventListener('DOMContentLoaded', async () => {
  updateNavbar();

  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendChat');
  const currentMode = document.getElementById('currentMode');
  let currentAgent = 'hint';

  document.querySelectorAll('.agent-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.agent-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      currentAgent = card.dataset.mode;
      currentMode.textContent = card.querySelector('h3').textContent;
    });
  });

  sendBtn?.addEventListener('click', sendChat);
  chatInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); } });

  async function sendChat() {
    const message = chatInput.value.trim();
    if (!message) return;

    if (!AuthService.isLoggedIn()) {
      toast.warning('Please login to use AI Agents');
      window.location.href = 'login.html';
      return;
    }

    appendMessage(message, 'user');
    chatInput.value = '';

    try {
      const data = await AIService.chat(message, currentAgent);
      appendMessage(data.response, 'assistant');
    } catch (err) {
      appendMessage('Sorry, something went wrong. Please try again.', 'assistant');
    }
  }

  function appendMessage(content, role) {
    const div = document.createElement('div');
    div.className = `chat-message ${role}`;
    div.innerHTML = `
      <div class="message-avatar">
        <i class="fas ${role === 'user' ? 'fa-user' : 'fa-robot'}"></i>
      </div>
      <div class="message-content"><p>${escapeHtml(content)}</p></div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
