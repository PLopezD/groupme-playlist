var _ = require('lodash');
var config = {};

module.exports = config;
var config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 5000,
  // 10 days in minutes
  expireTime: 24 * 60 * 10,
  mongoUri: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/rtr',
  accessCode: "193e9310caa601320bde62ca9c03ce01"
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

var envConfig;
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
  envConfig = require('./' + config.env);
  // just making sure the require actually
  // got something back :)
  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
module.exports = _.merge(config, envConfig);
