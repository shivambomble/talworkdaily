const _ = require('lodash');

const sanitizeLogin = (req, res, next) => {
    req.body = _.pick(req.body, ['email', 'password']); // Sanitize
    next();
};

module.exports = { sanitizeLogin };
