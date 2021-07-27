const router = require('express').Router();
const { Tasks } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/game/', withAuth, async (req, res) => {
  try {
    const newTask = await Tasks.findAll({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newTask);
    console.log(newTask, "try and get tasks");
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/tasks/:id', withAuth, async (req, res) => {
  try {
    const newTask = await Tasks.create({
      ...req.body,
      user_id: req.session.user_id,
      tasks_id: req.params.tasks_id
    });
    console.log("This is where we are trying to create a task", newTask);
    res.status(200).json(newTask);
  } catch (err) {
    res.status(400).json(err);
  }
});

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
