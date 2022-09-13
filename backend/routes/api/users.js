const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { validateSignup } = require('../../utils/validation')
const { User } = require('../../db/models');
const router = express.Router();

//Sign up route
router.post('/', validateSignup, async (req, res) => {
  const { firstName, lastName, email, password, profileImage } = req.body;
  const user = await User.signup({ firstName, lastName, email, password, profileImage });

  await setTokenCookie(res, user);

  return res.json({
    user
  });
}
);

module.exports = router;
