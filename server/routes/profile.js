const express = require('express');
const { getOne, getAll, runQuery } = require('../database');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  try {
    const userId = req.user.id;
    const user = getOne('SELECT id, username, email, created_at FROM users WHERE id = ?', [userId]);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const easyTotal = getOne("SELECT COUNT(*) as count FROM problems WHERE difficulty = 'Easy'").count;
    const mediumTotal = getOne("SELECT COUNT(*) as count FROM problems WHERE difficulty = 'Medium'").count;
    const hardTotal = getOne("SELECT COUNT(*) as count FROM problems WHERE difficulty = 'Hard'").count;
    const solvedTotal = getOne("SELECT COUNT(*) as count FROM user_progress WHERE user_id = ? AND status = 'solved'", [userId]).count;
    const solvedEasy = getOne("SELECT COUNT(*) as count FROM user_progress up JOIN problems p ON up.problem_id = p.id WHERE up.user_id = ? AND up.status = 'solved' AND p.difficulty = 'Easy'", [userId]).count;
    const solvedMedium = getOne("SELECT COUNT(*) as count FROM user_progress up JOIN problems p ON up.problem_id = p.id WHERE up.user_id = ? AND up.status = 'solved' AND p.difficulty = 'Medium'", [userId]).count;
    const solvedHard = getOne("SELECT COUNT(*) as count FROM user_progress up JOIN problems p ON up.problem_id = p.id WHERE up.user_id = ? AND up.status = 'solved' AND p.difficulty = 'Hard'", [userId]).count;
    const totalSubmissions = getOne('SELECT COUNT(*) as count FROM submissions WHERE user_id = ?', [userId]).count;
    const acceptedSubmissions = getOne("SELECT COUNT(*) as count FROM submissions WHERE user_id = ? AND status = 'Accepted'", [userId]).count;
    const acceptanceRate = totalSubmissions > 0 ? Math.round((acceptedSubmissions / totalSubmissions) * 100) : 0;

    const recentSubmissions = getAll(
      'SELECT s.id, s.language, s.status, s.runtime_ms, s.memory_kb, s.passed_tests, s.total_tests, s.created_at, p.title as problem_title, p.id as problem_id FROM submissions s JOIN problems p ON s.problem_id = p.id WHERE s.user_id = ? ORDER BY s.created_at DESC LIMIT 10',
      [userId]
    );

    const topicStatsRows = getAll("SELECT p.topics, up.status FROM user_progress up JOIN problems p ON up.problem_id = p.id WHERE up.user_id = ?", [userId]);
    const topicMap = {};
    topicStatsRows.forEach(row => {
      try {
        JSON.parse(row.topics).forEach(t => {
          if (!topicMap[t]) topicMap[t] = { solved: 0, total: 0 };
          topicMap[t].total++;
          if (row.status === 'solved') topicMap[t].solved++;
        });
      } catch {}
    });

    const allTopics = getAll('SELECT topics FROM problems');
    allTopics.forEach(row => {
      try {
        JSON.parse(row.topics).forEach(t => {
          if (!topicMap[t]) topicMap[t] = { solved: 0, total: 0 };
          topicMap[t].total++;
        });
      } catch {}
    });

    let streak = 0;
    const dailyActivity = getAll(
      "SELECT DATE(created_at) as day, COUNT(*) as count FROM submissions WHERE user_id = ? GROUP BY DATE(created_at) ORDER BY day DESC",
      [userId]
    );
    const activityDates = dailyActivity.map(a => a.day);
    let checkDate = new Date();
    while (true) {
      const dateStr = checkDate.toISOString().split('T')[0];
      if (activityDates.includes(dateStr)) { streak++; checkDate.setDate(checkDate.getDate() - 1); } else { break; }
    }

    const rankingRow = getOne(
      "SELECT COUNT(*) + 1 as rank FROM (SELECT user_id, COUNT(*) as cnt FROM user_progress WHERE status = 'solved' GROUP BY user_id HAVING cnt > (SELECT COUNT(*) FROM user_progress WHERE user_id = ? AND status = 'solved'))",
      [userId]
    );
    const ranking = rankingRow ? rankingRow.rank : 1;

    const solvedProblems = getAll(
      "SELECT p.id, p.title, p.difficulty FROM user_progress up JOIN problems p ON up.problem_id = p.id WHERE up.user_id = ? AND up.status = 'solved' ORDER BY up.last_submitted_at DESC LIMIT 10",
      [userId]
    );

    res.json({
      user,
      stats: { totalProblems: easyTotal + mediumTotal + hardTotal, easyTotal, mediumTotal, hardTotal, solvedTotal, solvedEasy, solvedMedium, solvedHard, totalSubmissions, acceptedSubmissions, acceptanceRate, streak, ranking },
      recentSubmissions, topicStats: topicMap, dailyActivity, solvedProblems
    });
  } catch (err) {
    console.error('Get profile error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/username', authMiddleware, (req, res) => {
  try {
    const { username } = req.body;
    if (!username || username.length < 3) return res.status(400).json({ error: 'Username must be at least 3 characters' });
    const existing = getOne('SELECT id FROM users WHERE username = ? AND id != ?', [username, req.user.id]);
    if (existing) return res.status(409).json({ error: 'Username already taken' });
    runQuery('UPDATE users SET username = ? WHERE id = ?', [username, req.user.id]);
    res.json({ message: 'Username updated' });
  } catch (err) {
    console.error('Update username error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
