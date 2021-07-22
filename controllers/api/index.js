const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');
const tasksRoutes = require('./tasksRoutes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/tasks', tasksRoutes);

module.exports = router;
