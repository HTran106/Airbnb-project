const { validationResult, check } = require('express-validator');


const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);
  let errorObj = {}
  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      // .map((error) => `${error.msg}`);
      .forEach((error) => {
        errorObj[error.param] = error.msg
      })


    const err = Error('Validation error');
    err.errors = errorObj;
    err.status = 400;
    err.title = 'Validation error';
    next(err);
  }
  next();
};


const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors
];

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a valid first name with at least 2 characters'),
  check('lastName')
    .exists({ checkFalsy: true })
    .isLength({ min: 2 })
    .withMessage('Please provide a valid last name with at least 2 characters'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

module.exports = { handleValidationErrors, validateLogin, validateSignup }
