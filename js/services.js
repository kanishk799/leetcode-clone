const API_BASE = window.location.origin + '/api';

class ApiClient {
  constructor() {
    this.token = localStorage.getItem('auth_token') || null;
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('auth_token', token);
    } else {
      localStorage.removeItem('auth_token');
    }
  }

  getHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  async request(method, path, body = null) {
    const options = {
      method,
      headers: this.getHeaders(),
      credentials: 'include'
    };
    if (body) options.body = JSON.stringify(body);

    const response = await fetch(`${API_BASE}${path}`, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Request failed');
    }

    return data;
  }

  get(path) { return this.request('GET', path); }
  post(path, body) { return this.request('POST', path, body); }
  put(path, body) { return this.request('PUT', path, body); }
  delete(path) { return this.request('DELETE', path); }
}

const api = new ApiClient();

// Auth Service
const AuthService = {
  async register(username, email, password) {
    const data = await api.post('/auth/register', { username, email, password });
    api.setToken(data.token);
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    return data;
  },

  async login(email, password) {
    const data = await api.post('/auth/login', { email, password });
    api.setToken(data.token);
    localStorage.setItem('currentUser', JSON.stringify(data.user));
    return data;
  },

  async logout() {
    await api.post('/auth/logout');
    api.setToken(null);
    localStorage.removeItem('currentUser');
  },

  async getMe() {
    return await api.get('/auth/me');
  },

  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem('currentUser'));
    } catch { return null; }
  },

  isLoggedIn() {
    return !!localStorage.getItem('currentUser') && !!api.token;
  }
};

// Problems Service
const ProblemsService = {
  async getAll(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await api.get(`/problems?${query}`);
  },

  async getById(id) {
    return await api.get(`/problems/${id}`);
  },

  async getTopics() {
    return await api.get('/problems/topics');
  },

  async getStats() {
    return await api.get('/problems/stats');
  },

  async getDaily() {
    return await api.get('/problems/daily');
  }
};

// Submissions Service
const SubmissionsService = {
  async run(problemId, language, code) {
    return await api.post('/submissions/run', { problemId, language, code });
  },

  async submit(problemId, language, code) {
    return await api.post('/submissions/submit', { problemId, language, code });
  },

  async getAll(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await api.get(`/submissions?${query}`);
  },

  async getById(id) {
    return await api.get(`/submissions/${id}`);
  }
};

// Profile Service
const ProfileService = {
  async get() {
    return await api.get('/profile');
  },

  async updateUsername(username) {
    return await api.put('/profile/username', { username });
  }
};

// Discussions Service
const DiscussionsService = {
  async getAll(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await api.get(`/discussions?${query}`);
  },

  async getById(id) {
    return await api.get(`/discussions/${id}`);
  },

  async create(title, category, content) {
    return await api.post('/discussions', { title, category, content });
  },

  async delete(id) {
    return await api.delete(`/discussions/${id}`);
  },

  async vote(id, vote) {
    return await api.post(`/discussions/${id}/vote`, { vote });
  },

  async addComment(id, content) {
    return await api.post(`/discussions/${id}/comments`, { content });
  }
};

// Contests Service
const ContestsService = {
  async getAll(params = {}) {
    const query = new URLSearchParams(params).toString();
    return await api.get(`/contests?${query}`);
  },

  async getById(id) {
    return await api.get(`/contests/${id}`);
  },

  async register(id) {
    return await api.post(`/contests/${id}/register`);
  },

  async getLeaderboard(id) {
    return await api.get(`/contests/${id}/leaderboard`);
  }
};

// AI Service
const AIService = {
  async chat(agent, message, problemId = null, code = null, language = null) {
    return await api.post('/ai/chat', { agent, message, problemId, code, language });
  }
};

// Saved Code Service
const SavedCodeService = {
  async get(problemId, language) {
    return await api.get(`/saved-code/${problemId}/${language}`);
  },

  async save(problemId, language, code) {
    return await api.put(`/saved-code/${problemId}/${language}`, { code });
  }
};

window.api = api;
window.AuthService = AuthService;
window.ProblemsService = ProblemsService;
window.SubmissionsService = SubmissionsService;
window.ProfileService = ProfileService;
window.DiscussionsService = DiscussionsService;
window.ContestsService = ContestsService;
window.AIService = AIService;
window.SavedCodeService = SavedCodeService;
