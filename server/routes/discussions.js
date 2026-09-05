const express = require('express');
const { getOne, getAll, runQuery, runInsert } = require('../database');
const { authMiddleware, optionalAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', optionalAuth, (req, res) => {
  try {
    const { category, sort, search, page = 1, limit = 20 } = req.query;
    let query = 'SELECT d.*, u.username as author FROM discussions d JOIN users u ON d.user_id = u.id WHERE 1=1';
    const params = [];

    if (category && category !== 'all') { query += ' AND d.category = ?'; params.push(category); }
    if (search) { query += ' AND (d.title LIKE ? OR d.content LIKE ?)'; params.push('%' + search + '%', '%' + search + '%'); }

    if (sort === 'popular') query += ' ORDER BY d.upvotes DESC';
    else query += ' ORDER BY d.created_at DESC';

    const countRow = getOne(query.replace(/SELECT d\.\*, u\.username as author/, 'SELECT COUNT(*) as total'), [...params]);
    const total = countRow ? countRow.total : 0;

    const offset = (parseInt(page) - 1) * parseInt(limit);
    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);
    const discussions = getAll(query, [...params]);

    if (req.user) {
      discussions.forEach(d => {
        const vote = getOne('SELECT vote FROM votes WHERE user_id = ? AND discussion_id = ?', [req.user.id, d.id]);
        d.userVote = vote ? vote.vote : 0;
      });
    }

    res.json({ discussions, total, page: parseInt(page), totalPages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    console.error('Get discussions error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', authMiddleware, (req, res) => {
  try {
    const { title, category, content } = req.body;
    if (!title || !content) return res.status(400).json({ error: 'Title and content required' });
    const id = runInsert('INSERT INTO discussions (user_id, title, category, content) VALUES (?, ?, ?, ?)', [req.user.id, title, category || 'general', content]);
    res.status(201).json({ id, message: 'Post created' });
  } catch (err) {
    console.error('Create discussion error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', optionalAuth, (req, res) => {
  try {
    const discussion = getOne('SELECT d.*, u.username as author FROM discussions d JOIN users u ON d.user_id = u.id WHERE d.id = ?', [parseInt(req.params.id)]);
    if (!discussion) return res.status(404).json({ error: 'Discussion not found' });

    runQuery('UPDATE discussions SET views = views + 1 WHERE id = ?', [discussion.id]);

    const comments = getAll('SELECT c.*, u.username as author FROM comments c JOIN users u ON c.user_id = u.id WHERE c.discussion_id = ? ORDER BY c.created_at ASC', [discussion.id]);
    let userVote = 0;
    if (req.user) {
      const vote = getOne('SELECT vote FROM votes WHERE user_id = ? AND discussion_id = ?', [req.user.id, discussion.id]);
      userVote = vote ? vote.vote : 0;
    }

    res.json({ discussion: { ...discussion, userVote }, comments });
  } catch (err) {
    console.error('Get discussion error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/:id/vote', authMiddleware, (req, res) => {
  try {
    const { vote } = req.body;
    if (vote !== 1 && vote !== -1) return res.status(400).json({ error: 'Vote must be 1 or -1' });

    const existing = getOne('SELECT * FROM votes WHERE user_id = ? AND discussion_id = ?', [req.user.id, parseInt(req.params.id)]);
    if (existing) {
      if (existing.vote === vote) {
        runQuery('DELETE FROM votes WHERE id = ?', [existing.id]);
        runQuery('UPDATE discussions SET upvotes = upvotes - ? WHERE id = ?', [vote, parseInt(req.params.id)]);
      } else {
        runQuery('UPDATE votes SET vote = ? WHERE id = ?', [vote, existing.id]);
        runQuery('UPDATE discussions SET upvotes = upvotes + ? WHERE id = ?', [vote * 2, parseInt(req.params.id)]);
      }
    } else {
      runInsert('INSERT INTO votes (user_id, discussion_id, vote) VALUES (?, ?, ?)', [req.user.id, parseInt(req.params.id), vote]);
      runQuery('UPDATE discussions SET upvotes = upvotes + ? WHERE id = ?', [vote, parseInt(req.params.id)]);
    }

    const updated = getOne('SELECT upvotes FROM discussions WHERE id = ?', [parseInt(req.params.id)]);
    res.json({ upvotes: updated.upvotes });
  } catch (err) {
    console.error('Vote error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/:id/comments', authMiddleware, (req, res) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: 'Content required' });
    const id = runInsert('INSERT INTO comments (user_id, discussion_id, content) VALUES (?, ?, ?)', [req.user.id, parseInt(req.params.id), content]);
    res.status(201).json({ id, message: 'Comment added' });
  } catch (err) {
    console.error('Add comment error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
