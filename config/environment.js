var _ = require('lodash');

var localEnvVars = {
  TITLE:      'tumblrApp',
  SAFE_TITLE: 'tumblrApp'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
