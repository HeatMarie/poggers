const router = require('express').Router();
const { User } = require('../../models');
const sendemail = require('../../utils/mailer');

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    sendemail(req.body.email, req.body.username);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.redirect("/profile");
    });
  } catch (err) {
    // if (err == UniqueConstraintError) {
    //   res
    //     .status(400)
    //     .json({ message: 'Oi! I think you have been here before!' });
    // } else {
    //   res.status(404).json(err);
    //   return;
    // }
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now signed in!' });
      res.status(200);
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;