document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const problemId = parseInt(urlParams.get('id')) || 1;

  updateNavbar();

  let currentProblem = null;
  let currentLanguage = 'javascript';
  let editor = null;

  // Initialize CodeMirror
  editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    mode: 'javascript',
    theme: 'dracula',
    lineNumbers: true,
    tabSize: 4,
    indentWithTabs: false,
    lineWrapping: true,
    autofocus: true,
    extraKeys: {
      'Ctrl-Enter': () => runCode(),
      'Cmd-Enter': () => runCode(),
      'Ctrl-Shift-Enter': () => submitCode()
    }
  });

  const modeMap = {
    javascript: 'javascript',
    python: 'python',
    java: 'text/x-java',
    cpp: 'text/x-c++src',
    c: 'text/x-csrc'
  };

  // Load problem
  try {
    const data = await ProblemsService.getById(problemId);
    currentProblem = data.problem;

    document.getElementById('problemTitle').textContent = `${currentProblem.id}. ${currentProblem.title}`;
    document.title = `${currentProblem.title} - LeetCode Clone`;

    const diffBadge = document.getElementById('problemDifficulty');
    diffBadge.textContent = currentProblem.difficulty;
    diffBadge.className = `difficulty-badge ${currentProblem.difficulty.toLowerCase()}`;

    // Topics
    const topicsDiv = document.getElementById('problemTopics');
    const topics = Array.isArray(currentProblem.topics) ? currentProblem.topics : JSON.parse(currentProblem.topics || '[]');
    topicsDiv.innerHTML = topics.map(t => `<span class="topic-tag">${t}</span>`).join('');

    // Description
    document.getElementById('problemDescription').innerHTML = currentProblem.description;

    // Examples
    const examplesDiv = document.getElementById('problemExamples');
    examplesDiv.innerHTML = '<h3>Examples</h3>';
    currentProblem.examples.forEach((ex, i) => {
      examplesDiv.innerHTML += `
        <div class="example">
          <h4>Example ${i + 1}:</h4>
          <div class="example-io">
            <div><strong>Input:</strong> <code>${escapeHtml(ex.input)}</code></div>
            <div><strong>Output:</strong> <code>${escapeHtml(ex.output)}</code></div>
            ${ex.explanation ? `<div><strong>Explanation:</strong> ${escapeHtml(ex.explanation)}</div>` : ''}
          </div>
        </div>`;
    });

    // Constraints
    const constraints = Array.isArray(currentProblem.constraints) ? currentProblem.constraints : JSON.parse(currentProblem.constraints || '[]');
    const constraintsDiv = document.getElementById('problemConstraints');
    constraintsDiv.innerHTML = `<h3>Constraints</h3><ul>${constraints.map(c => `<li><code>${escapeHtml(c)}</code></li>`).join('')}</ul>`;

    // Follow up
    if (currentProblem.follow_up) {
      const followUpDiv = document.getElementById('problemFollowUp');
      followUpDiv.style.display = 'block';
      followUpDiv.innerHTML = `<h3>Follow up</h3><p>${currentProblem.follow_up}</p>`;
    }

    // Testcase inputs
    const visibleTests = currentProblem.visibleTestCases || [];
    const testcaseInputs = document.getElementById('testcaseInputs');
    if (visibleTests.length > 0) {
      testcaseInputs.innerHTML = visibleTests.map((tc, i) => `
        <div class="testcase-item">
          <strong>Case ${i + 1}:</strong>
          <code>${escapeHtml(tc.input)}</code>
        </div>`).join('');
    }

    // Load saved code
    if (AuthService.isLoggedIn()) {
      try {
        const saved = await SavedCodeService.get(problemId, currentLanguage);
        if (saved.code) {
          editor.setValue(saved.code);
        } else {
          editor.setValue(currentProblem.templates[currentLanguage] || '');
        }
      } catch {
        editor.setValue(currentProblem.templates[currentLanguage] || '');
      }
    } else {
      editor.setValue(currentProblem.templates[currentLanguage] || '');
    }

    // Load submissions
    if (AuthService.isLoggedIn()) {
      loadSubmissions();
    }
  } catch (err) {
    console.error('Failed to load problem:', err);
    document.getElementById('problemDescription').innerHTML = '<p class="error">Failed to load problem. <a href="index.html">Go back</a></p>';
  }

  // Language change
  document.getElementById('languageSelect').addEventListener('change', async (e) => {
    currentLanguage = e.target.value;
    editor.setOption('mode', modeMap[currentLanguage]);

    if (AuthService.isLoggedIn()) {
      try {
        const saved = await SavedCodeService.get(problemId, currentLanguage);
        if (saved.code) {
          editor.setValue(saved.code);
          return;
        }
      } catch {}
    }
    editor.setValue(currentProblem?.templates[currentLanguage] || '');
  });

  // Auto-save code
  let saveTimeout;
  editor.on('change', () => {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(async () => {
      if (AuthService.isLoggedIn()) {
        try {
          await SavedCodeService.save(problemId, currentLanguage, editor.getValue());
        } catch {}
      }
    }, 1000);
  });

  // Output tabs
  document.querySelectorAll('.output-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.output-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab + 'Tab').classList.add('active');
    });
  });

  // Run code
  document.getElementById('runCode').addEventListener('click', runCode);

  async function runCode() {
    if (!AuthService.isLoggedIn()) {
      toast.warning('Please login to run code');
      window.location.href = 'login.html';
      return;
    }

    const code = editor.getValue();
    if (!code.trim()) {
      toast.warning('Please write some code first');
      return;
    }

    const runBtn = document.getElementById('runCode');
    LoadingManager.show(runBtn, 'Running...');

    try {
      const result = await SubmissionsService.run(problemId, currentLanguage, code);
      displayRunResults(result);

      // Switch to result tab
      document.querySelectorAll('.output-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.output-tab-content').forEach(c => c.classList.remove('active'));
      document.querySelector('[data-tab="result"]').classList.add('active');
      document.getElementById('resultTab').classList.add('active');
    } catch (err) {
      toast.error(err.message || 'Failed to run code');
    } finally {
      LoadingManager.hide(runBtn);
    }
  }

  // Submit code
  document.getElementById('submitCode').addEventListener('click', submitCode);

  async function submitCode() {
    if (!AuthService.isLoggedIn()) {
      toast.warning('Please login to submit code');
      window.location.href = 'login.html';
      return;
    }

    const code = editor.getValue();
    if (!code.trim()) {
      toast.warning('Please write some code first');
      return;
    }

    const submitBtn = document.getElementById('submitCode');
    LoadingManager.show(submitBtn, 'Submitting...');

    try {
      const result = await SubmissionsService.submit(problemId, currentLanguage, code);
      displaySubmitResult(result);
      loadSubmissions();

      if (result.status === 'Accepted') {
        toast.success(`Accepted! ${result.passed_tests}/${result.total_tests} test cases passed`);
      } else {
        toast.warning(`${result.status}: ${result.passed_tests}/${result.total_tests} test cases passed`);
      }
    } catch (err) {
      toast.error(err.message || 'Failed to submit code');
    } finally {
      LoadingManager.hide(submitBtn);
    }
  }

  function displayRunResults(result) {
    const resultTab = document.getElementById('resultTab');
    let html = `<div class="result-header ${result.status === 'Accepted' ? 'accepted' : 'rejected'}">
      <strong>${result.status}</strong>
      <span>${result.passed}/${result.total} test cases passed</span>
    </div>`;

    result.results.forEach(r => {
      html += `
        <div class="test-result ${r.passed ? 'pass' : 'fail'}">
          <div class="test-result-header">
            <span>Case ${r.index}: ${r.passed ? '<i class="fas fa-check-circle"></i> Accepted' : '<i class="fas fa-times-circle"></i> Failed'}</span>
            ${r.runtime_ms ? `<span class="runtime">${r.runtime_ms}ms</span>` : ''}
          </div>
          <div class="test-result-details">
            <div><strong>Input:</strong> <code>${escapeHtml(r.input)}</code></div>
            <div><strong>Expected:</strong> <code>${escapeHtml(r.expected)}</code></div>
            ${!r.passed ? `<div><strong>Output:</strong> <code>${escapeHtml(r.actual || '')}</code></div>` : ''}
            ${r.error ? `<div class="error"><strong>Error:</strong> ${escapeHtml(r.error)}</div>` : ''}
          </div>
        </div>`;
    });

    resultTab.innerHTML = html;
  }

  function displaySubmitResult(result) {
    const resultTab = document.getElementById('resultTab');
    const isAccepted = result.status === 'Accepted';

    resultTab.innerHTML = `
      <div class="submit-result ${isAccepted ? 'accepted' : 'rejected'}">
        <div class="submit-status">
          <i class="fas ${isAccepted ? 'fa-check-circle' : 'fa-times-circle'}"></i>
          <h2>${result.status}</h2>
        </div>
        <div class="submit-stats">
          <div class="stat">
            <div class="stat-label">Test Cases</div>
            <div class="stat-value">${result.passed_tests}/${result.total_tests}</div>
          </div>
          <div class="stat">
            <div class="stat-label">Runtime</div>
            <div class="stat-value">${result.runtime_ms} ms</div>
          </div>
          <div class="stat">
            <div class="stat-label">Memory</div>
            <div class="stat-value">${(result.memory_kb / 1024).toFixed(1)} MB</div>
          </div>
        </div>
        ${result.error_message ? `<div class="error-message"><strong>Error:</strong> ${escapeHtml(result.error_message)}</div>` : ''}
      </div>`;
  }

  async function loadSubmissions() {
    try {
      const data = await SubmissionsService.getAll({ problemId, limit: 10 });
      const tab = document.getElementById('submissionsTab');

      if (data.submissions.length === 0) {
        tab.innerHTML = '<p class="placeholder">No submissions yet</p>';
        return;
      }

      tab.innerHTML = data.submissions.map(s => `
        <div class="submission-item ${s.status === 'Accepted' ? 'accepted' : ''}">
          <div class="submission-status">
            <i class="fas ${s.status === 'Accepted' ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            ${s.status}
          </div>
          <div class="submission-info">
            <span>${s.language}</span>
            <span>${s.runtime_ms}ms</span>
            <span>${s.passed_tests}/${s.total_tests}</span>
            <span>${timeAgo(s.created_at)}</span>
          </div>
        </div>`).join('');
    } catch (err) {
      console.error('Failed to load submissions:', err);
    }
  }

  // Reset code
  document.getElementById('resetCode').addEventListener('click', () => {
    if (currentProblem) {
      editor.setValue(currentProblem.templates[currentLanguage] || '');
      toast.info('Code reset to template');
    }
  });

  // Theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const icon = document.querySelector('#themeToggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
  });

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
