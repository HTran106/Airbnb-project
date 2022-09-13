const express = require('express');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { validateLogin } = require('../../utils/validation');
const router = express.Router();

//login
router.post('/login', validateLogin, async (req, res, next) => {
  const { credential, password } = req.body;

  const user = await User.login({ credential, password });

  if (!user) {
    const err = new Error('Invalid credientials');
    err.status = 401;
    err.title = 'Invalid credentials';
    err.errors = ['Invalid credentials'];
    return next(err);
  }

  const token = setTokenCookie(res, user);

  return res.json({
    user: user.toSafeObject(),
    token
  });
}
);

//logout
router.delete('/', (_req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'success' });
}
);

// Restore session user
router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);

module.exports = router;
