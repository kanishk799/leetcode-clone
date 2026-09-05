document.addEventListener('DOMContentLoaded', () => {
  if (AuthService.isLoggedIn()) {
    window.location.href = 'index.html';
    return;
  }

  const authTabs = document.querySelectorAll('.auth-tab');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  // Tab switching
  authTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      authTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      if (tab.dataset.tab === 'login') {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
      } else {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
      }
    });
  });

  // Toggle password visibility
  document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.parentElement.querySelector('input');
      const icon = btn.querySelector('i');
      
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
  });

  // Login
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginBtn = document.getElementById('loginBtn');

    LoadingManager.show(loginBtn, 'Logging in...');

    try {
      await AuthService.login(email, password);
      toast.success('Login successful! Redirecting...');
      setTimeout(() => window.location.href = 'index.html', 800);
    } catch (err) {
      toast.error(err.message || 'Invalid email or password');
      LoadingManager.hide(loginBtn);
    }
  });

  // Signup
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const signupBtn = document.getElementById('signupBtn');

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    LoadingManager.show(signupBtn, 'Creating account...');

    try {
      await AuthService.register(username, email, password);
      toast.success('Account created! Redirecting...');
      setTimeout(() => window.location.href = 'index.html', 800);
    } catch (err) {
      toast.error(err.message || 'Registration failed');
      LoadingManager.hide(signupBtn);
    }
  });
});
