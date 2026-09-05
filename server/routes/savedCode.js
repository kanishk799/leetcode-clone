const express = require('express');
const { getOne, runQuery, runInsert } = require('../database');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/:problemId/:language', authMiddleware, (req, res) => {
  try {
    const saved = getOne('SELECT code FROM saved_code WHERE user_id = ? AND problem_id = ? AND language = ?', [req.user.id, parseInt(req.params.problemId), req.params.language]);
    res.json({ code: saved ? saved.code : null });
  } catch (err) {
    console.error('Get saved code error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:problemId/:language', authMiddleware, (req, res) => {
  try {
    const { code } = req.body;
    const existing = getOne('SELECT id FROM saved_code WHERE user_id = ? AND problem_id = ? AND language = ?', [req.user.id, parseInt(req.params.problemId), req.params.language]);
    if (existing) {
      runQuery('UPDATE saved_code SET code = ?, updated_at = datetime(\'now\') WHERE id = ?', [code, existing.id]);
    } else {
      runInsert('INSERT INTO saved_code (user_id, problem_id, language, code) VALUES (?, ?, ?, ?)', [req.user.id, parseInt(req.params.problemId), req.params.language, code]);
    }
    res.json({ message: 'Code saved' });
  } catch (err) {
    console.error('Save code error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
