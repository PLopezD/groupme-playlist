var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./postController');


router.route('/')
  .get(controller.getRequest)

router.route('/user/:user')
  .get(controller.getByUser)


module.exports = router;

