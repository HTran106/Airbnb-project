const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { User } = require('../../db/models');
const router = express.Router();

//Sign up route
router.post('/signup', validateSignup, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await User.signup({ firstName, lastName, email, password });

  await setTokenCookie(res, user);

  return res.json({
    user
  });
}
);

module.exports = router;
