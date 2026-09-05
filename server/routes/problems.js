const express = require('express');
const { getOne, getAll, runQuery } = require('../database');
const { optionalAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', optionalAuth, (req, res) => {
  try {
    const { search, difficulty, status, topic, sort, page = 1, limit = 50 } = req.query;

    let query = 'SELECT * FROM problems WHERE 1=1';
    const params = [];

    if (search) {
      query += ' AND (title LIKE ? OR slug LIKE ? OR topics LIKE ?)';
      const s = `%${search}%`;
      params.push(s, s, s);
    }
    if (difficulty && difficulty !== 'all') {
      query += ' AND difficulty = ?';
      params.push(difficulty);
    }
    if (topic && topic !== 'all') {
      query += ' AND topics LIKE ?';
      params.push(`%"${topic}"%`);
    }

    const countRow = getOne(query.replace('SELECT *', 'SELECT COUNT(*) as total'), [...params]);
    const total = countRow ? countRow.total : 0;

    switch (sort) {
      case 'difficulty_asc': query += ' ORDER BY CASE difficulty WHEN "Easy" THEN 1 WHEN "Medium" THEN 2 WHEN "Hard" THEN 3 END ASC'; break;
      case 'difficulty_desc': query += ' ORDER BY CASE difficulty WHEN "Hard" THEN 1 WHEN "Medium" THEN 2 WHEN "Easy" THEN 3 END DESC'; break;
      case 'acceptance_desc': query += ' ORDER BY acceptance DESC'; break;
      case 'acceptance_asc': query += ' ORDER BY acceptance ASC'; break;
      case 'title_asc': query += ' ORDER BY title ASC'; break;
      default: query += ' ORDER BY id ASC';
    }

    const offset = (parseInt(page) - 1) * parseInt(limit);
    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);

    let problems = getAll(query, [...params]);

    if (req.user && status && status !== 'all') {
      const userId = req.user.id;
      const ids = problems.map(p => p.id);
      if (ids.length > 0) {
        const ph = ids.map(() => '?').join(',');
        const progRows = getAll(`SELECT problem_id, status FROM user_progress WHERE user_id = ? AND problem_id IN (${ph})`, [userId, ...ids]);
        const progMap = {};
        progRows.forEach(r => { progMap[r.problem_id] = r.status; });
        problems = problems.filter(p => (progMap[p.id] || 'todo') === status);
      } else {
        problems = [];
      }
    }

    if (req.user) {
      const userId = req.user.id;
      const ids = problems.map(p => p.id);
      if (ids.length > 0) {
        const ph = ids.map(() => '?').join(',');
        const progRows = getAll(`SELECT problem_id, status FROM user_progress WHERE user_id = ? AND problem_id IN (${ph})`, [userId, ...ids]);
        const progMap = {};
        progRows.forEach(r => { progMap[r.problem_id] = r.status; });
        problems = problems.map(p => ({ ...p, userStatus: progMap[p.id] || 'todo' }));
      }
    }

    res.json({ problems, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    console.error('Get problems error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/topics', (req, res) => {
  try {
    const problems = getAll('SELECT topics FROM problems');
    const topicSet = new Set();
    problems.forEach(p => {
      try { JSON.parse(p.topics).forEach(t => topicSet.add(t)); } catch (e) {}
    });
    res.json({ topics: Array.from(topicSet).sort() });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/stats', (req, res) => {
  try {
    const easy = getOne("SELECT COUNT(*) as count FROM problems WHERE difficulty = 'Easy'")?.count || 0;
    const medium = getOne("SELECT COUNT(*) as count FROM problems WHERE difficulty = 'Medium'")?.count || 0;
    const hard = getOne("SELECT COUNT(*) as count FROM problems WHERE difficulty = 'Hard'")?.count || 0;
    res.json({ easy, medium, hard, total: easy + medium + hard });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/daily', optionalAuth, (req, res) => {
  try {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const count = getOne('SELECT COUNT(*) as count FROM problems')?.count || 1;
    const problemId = (dayOfYear % count) + 1;
    const problem = getOne('SELECT * FROM problems WHERE id = ?', [problemId]);
    if (!problem) return res.status(404).json({ error: 'Problem not found' });

    let completed = false;
    if (req.user) {
      const progress = getOne("SELECT status FROM user_progress WHERE user_id = ? AND problem_id = ? AND status = 'solved'", [req.user.id, problemId]);
      completed = !!progress;
    }

    res.json({ problem: parseProblem(problem), date: new Date().toISOString().split('T')[0], completed });
  } catch (err) {
    console.error('Daily challenge error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', optionalAuth, (req, res) => {
  try {
    const problem = getOne('SELECT * FROM problems WHERE id = ?', [parseInt(req.params.id)]);
    if (!problem) return res.status(404).json({ error: 'Problem not found' });

    let userProgress = null;
    let userSubmissions = [];
    if (req.user) {
      userProgress = getOne('SELECT * FROM user_progress WHERE user_id = ? AND problem_id = ?', [req.user.id, problem.id]);
      userSubmissions = getAll(
        'SELECT id, language, status, runtime_ms, memory_kb, passed_tests, total_tests, created_at FROM submissions WHERE user_id = ? AND problem_id = ? ORDER BY created_at DESC LIMIT 10',
        [req.user.id, problem.id]
      );
    }

    res.json({
      problem: parseProblem(problem),
      userProgress: userProgress ? userProgress.status : 'todo',
      recentSubmissions: userSubmissions
    });
  } catch (err) {
    console.error('Get problem error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function parseProblem(p) {
  return {
    ...p,
    topics: JSON.parse(p.topics || '[]'),
    companies: JSON.parse(p.companies || '[]'),
    constraints: JSON.parse(p.constraints || '[]'),
    examples: JSON.parse(p.examples || '[]'),
    templates: JSON.parse(p.templates || '{}'),
    hints: JSON.parse(p.hints || '[]'),
    test_cases: JSON.parse(p.test_cases || '[]'),
    visibleTestCases: JSON.parse(p.visible_test_cases || '[]'),
    follow_up: p.follow_up || ''
  };
}

module.exports = router;
