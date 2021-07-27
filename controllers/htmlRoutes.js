const router = require('express').Router();
const { Games, User, Tasks } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all games and JOIN with user data
    const gameData = await Games.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const games = gameData.map((game) => game.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      games, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game/:id', async (req, res) => {
  try {
    const gameData = await Games.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
          
        },
      ],
    });

    const games = gameData.get({ plain: true });

    const tasks = await Tasks.findAll({where: {games_id: req.params.id}, 
      include: [
      {
        model: User,
        attributes: ['username']
        
      },
    ],
  });
    // console.log(tasks.map(i => i.get({ plain: true })));

    res.render('games', {
      ...games,
      tasks: tasks.map(i => i.get({ plain: true })),
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Games }],
    });

    const user = userData.get({ plain: true });
// console.log(user);
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/tasks/:id', async (req, res) => {
  try {
    console.log("Well, then");
    const gameData = await Game.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    });

    if(!gameData) {
      res.status(404).json({ message: 'Nothing found with this id'});
      return;
    }
    const game = await gameData.get({ plain: true });

    const taskData = await Tasks.findAll({
      include: [
        {
        model: User,
        attributes: ['username']
        }
      ]
    });

    const tasks = await taskData.map((task) => task.get({ plain: true }));

    res.render('tasks'), {
      tasks,
      game,
      logged_in: req.session.logged_in
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

// router.get('/tasks/:id', async (req, res) => {
//   try {
//     console.log("id", req.params.id);
//     const gameData = await Games.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['username'],

//         },
//         {
//           model: Tasks,
//           attributes: ['description', 'task_id', 'description', 'task_content']
          
//         },
//       ],
//     });
//     console.log("DO THESE?", gameData);
//     const game = gameData.get({ plain: true });
//     res.render('tasks', {
//       game,
//       task_id,
//       description,
//       task_content,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
});


module.exports = router;

