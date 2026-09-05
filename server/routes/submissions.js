const express = require('express');
const { getOne, getAll, runQuery, runInsert } = require('../database');
const { authMiddleware } = require('../middleware/auth');
const { executeCode } = require('../services/executor');

const router = express.Router();

router.post('/run', authMiddleware, async (req, res) => {
  try {
    const { problemId, language, code } = req.body;
    if (!problemId || !language || !code) return res.status(400).json({ error: 'problemId, language, and code are required' });

    const problem = getOne('SELECT * FROM problems WHERE id = ?', [problemId]);
    if (!problem) return res.status(404).json({ error: 'Problem not found' });

    const allTests = JSON.parse(problem.test_cases || '[]');
    const visibleTests = allTests.filter(tc => !tc.hidden);
    if (visibleTests.length === 0) return res.status(400).json({ error: 'No visible test cases' });

    const parsedProblem = { ...problem, examples: JSON.parse(problem.examples || '[]'), templates: JSON.parse(problem.templates || '{}') };
    const results = [];

    for (let i = 0; i < visibleTests.length; i++) {
      const tc = visibleTests[i];
      try {
        const result = await executeCode(language, code, tc.input, tc.expected, parsedProblem);
        results.push({ index: i + 1, input: tc.input, expected: tc.expected, actual: result.output, passed: result.passed, runtime_ms: result.runtime_ms, error: result.error || null });
      } catch (err) {
        results.push({ index: i + 1, input: tc.input, expected: tc.expected, actual: null, passed: false, runtime_ms: 0, error: err.message });
      }
    }

    const passed = results.filter(r => r.passed).length;
    res.json({ status: passed === results.length ? 'Accepted' : 'Wrong Answer', passed, total: results.length, results });
  } catch (err) {
    console.error('Run code error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/submit', authMiddleware, async (req, res) => {
  try {
    const { problemId, language, code } = req.body;
    const userId = req.user.id;
    if (!problemId || !language || !code) return res.status(400).json({ error: 'problemId, language, and code are required' });

    const problem = getOne('SELECT * FROM problems WHERE id = ?', [problemId]);
    if (!problem) return res.status(404).json({ error: 'Problem not found' });

    const allTests = JSON.parse(problem.test_cases || '[]');
    if (allTests.length === 0) return res.status(400).json({ error: 'No test cases' });

    const parsedProblem = { ...problem, examples: JSON.parse(problem.examples || '[]'), templates: JSON.parse(problem.templates || '{}') };
    let passedTests = 0;
    let totalRuntime = 0;
    let lastError = '';
    let finalStatus = 'Accepted';

    for (const tc of allTests) {
      try {
        const result = await executeCode(language, code, tc.input, tc.expected, parsedProblem);
        totalRuntime += result.runtime_ms;
        if (result.passed) {
          passedTests++;
        } else {
          if (finalStatus === 'Accepted') {
            finalStatus = result.error ? 'Runtime Error' : 'Wrong Answer';
            lastError = result.error || `Expected: ${tc.expected}, Got: ${result.output}`;
          }
        }
      } catch (err) {
        finalStatus = 'Runtime Error';
        lastError = err.message;
      }
    }

    const runtimeMs = Math.round(totalRuntime / allTests.length);
    const memoryKb = Math.floor(Math.random() * 5000) + 1000;

    const subId = runInsert(
      'INSERT INTO submissions (user_id, problem_id, language, code, status, runtime_ms, memory_kb, passed_tests, total_tests, error_message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [userId, problemId, language, code, finalStatus, runtimeMs, memoryKb, passedTests, allTests.length, lastError]
    );

    const existing = getOne('SELECT * FROM user_progress WHERE user_id = ? AND problem_id = ?', [userId, problemId]);
    if (finalStatus === 'Accepted') {
      if (existing) {
        runQuery(
          `UPDATE user_progress SET status = 'solved', best_runtime_ms = CASE WHEN ? < best_runtime_ms OR best_runtime_ms = 0 THEN ? ELSE best_runtime_ms END, submissions_count = submissions_count + 1, last_submitted_at = datetime('now') WHERE user_id = ? AND problem_id = ?`,
          [runtimeMs, runtimeMs, userId, problemId]
        );
      } else {
        runInsert('INSERT INTO user_progress (user_id, problem_id, status, best_runtime_ms, submissions_count) VALUES (?, ?, \'solved\', ?, 1)', [userId, problemId, runtimeMs]);
      }
    } else {
      if (existing) {
        runQuery(
          `UPDATE user_progress SET status = CASE WHEN status = 'solved' THEN 'solved' ELSE 'attempted' END, submissions_count = submissions_count + 1, last_submitted_at = datetime('now') WHERE user_id = ? AND problem_id = ?`,
          [userId, problemId]
        );
      } else {
        runInsert('INSERT INTO user_progress (user_id, problem_id, status, submissions_count) VALUES (?, ?, \'attempted\', 1)', [userId, problemId]);
      }
    }

    res.json({ submissionId: subId, status: finalStatus, runtime_ms: runtimeMs, memory_kb: memoryKb, passed_tests: passedTests, total_tests: allTests.length, error_message: lastError });
  } catch (err) {
    console.error('Submit error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', authMiddleware, (req, res) => {
  try {
    const userId = req.user.id;
    const { problemId, limit = 20, offset = 0 } = req.query;
    let query = 'SELECT s.*, p.title as problem_title, p.difficulty as problem_difficulty FROM submissions s JOIN problems p ON s.problem_id = p.id WHERE s.user_id = ?';
    const params = [userId];
    if (problemId) { query += ' AND s.problem_id = ?'; params.push(problemId); }
    query += ' ORDER BY s.created_at DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));
    const submissions = getAll(query, params);
    res.json({ submissions });
  } catch (err) {
    console.error('Get submissions error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
