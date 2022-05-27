const { validationResult } = require('express-validator');

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

module.exports = { handleValidationErrors }
