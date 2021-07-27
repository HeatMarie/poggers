const router = require('express').Router();
const { Games, Tasks } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGame = await Games.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGame);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const gamesData = await Games.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!gamesData) {
      res.status(404).json({ message: 'Sorry! We could not find any games this id!' });
      return;
    }

    res.status(200).json(gamesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;