var config = {};

config.mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/rtr'
config.accessCode = "193e9310caa601320bde62ca9c03ce01"

module.exports = config;