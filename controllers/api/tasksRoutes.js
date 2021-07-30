const router = require('express').Router();
const { Tasks } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try{
    console.log(req.body);
    const task = await Tasks.create({
      description: req.body.content,
      game_id: req.body.id,
      title: req.body.title,
      user_id: req.session.user_id,
    });
    res.status(200).json(task);
    console.log('task', task);
  } catch(err) {
    console.log(err);
    res.status(500).json(err)
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tasksData = await Tasks.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!tasksData) {
      res.status(404).json({ message: 'Fail! No Tasks here!' });
      return;
    }
    res.status(200).json(tasksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
