const express = require('express');
const { getOne, getAll, runQuery, runInsert } = require('../database');
const { authMiddleware, optionalAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', optionalAuth, (req, res) => {
  try {
    const { status } = req.query;
    let query = 'SELECT * FROM contests';
    const params = [];
    if (status && status !== 'all') { query += ' WHERE status = ?'; params.push(status); }
    query += ' ORDER BY start_time DESC';
    const contests = getAll(query, [...params]);

    if (req.user) {
      contests.forEach(c => {
        const reg = getOne('SELECT id FROM contest_registrations WHERE user_id = ? AND contest_id = ?', [req.user.id, c.id]);
        c.registered = !!reg;
      });
    }
    res.json({ contests });
  } catch (err) {
    console.error('Get contests error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/:id/register', authMiddleware, (req, res) => {
  try {
    const contest = getOne('SELECT * FROM contests WHERE id = ?', [parseInt(req.params.id)]);
    if (!contest) return res.status(404).json({ error: 'Contest not found' });
    const existing = getOne('SELECT id FROM contest_registrations WHERE user_id = ? AND contest_id = ?', [req.user.id, parseInt(req.params.id)]);
    if (existing) return res.status(409).json({ error: 'Already registered' });
    runInsert('INSERT INTO contest_registrations (user_id, contest_id) VALUES (?, ?)', [req.user.id, parseInt(req.params.id)]);
    res.json({ message: 'Registered successfully' });
  } catch (err) {
    console.error('Register contest error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', optionalAuth, (req, res) => {
  try {
    const contest = getOne('SELECT * FROM contests WHERE id = ?', [parseInt(req.params.id)]);
    if (!contest) return res.status(404).json({ error: 'Contest not found' });
    const participants = getOne('SELECT COUNT(*) as count FROM contest_registrations WHERE contest_id = ?', [contest.id]).count;
    let registered = false;
    if (req.user) {
      const reg = getOne('SELECT id FROM contest_registrations WHERE user_id = ? AND contest_id = ?', [req.user.id, contest.id]);
      registered = !!reg;
    }
    res.json({ contest: { ...contest, participants, registered } });
  } catch (err) {
    console.error('Get contest error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
