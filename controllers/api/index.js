const router = require('express').Router();
const profileRoutes = require('./profileRoutes');
const gameRoutes = require('./gameRoutes');
const tasksRoutes = require('./tasksRoutes');

router.use('/profile', profileRoutes);
router.use('/games', gameRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;
