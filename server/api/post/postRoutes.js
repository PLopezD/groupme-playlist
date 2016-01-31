var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./postController');


router.route('/')
  .get(controller.getRequest)

module.exports = router;

