document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();

  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendMessage');
  const modal = document.getElementById('agentModal');
  const closeChat = document.getElementById('closeChat');
  const chatAgentName = document.getElementById('chatAgentName');
  let currentAgent = 'hint';

  document.querySelectorAll('.agent-card').forEach(card => {
    card.addEventListener('click', () => {
      if (!AuthService.isLoggedIn()) {
        toast.warning('Please login to use AI Agents');
        window.location.href = 'login.html';
        return;
      }
      currentAgent = card.dataset.agent;
      chatAgentName.textContent = card.querySelector('h3').textContent;
      modal.classList.add('active');
      chatInput.focus();
    });
  });

  closeChat?.addEventListener('click', () => modal.classList.remove('active'));
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

  sendBtn?.addEventListener('click', sendChat);
  chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
  });

  async function sendChat() {
    const message = chatInput.value.trim();
    if (!message) return;

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

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
