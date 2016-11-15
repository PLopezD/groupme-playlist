import Post from './postModel'
import _ from 'lodash'
import logger from '../../util/logger'


module.exports = {
	getRequest: (req,res,next) => {
		Post.find({})
      .limit(20)
      .sort({created_at: -1})
		.then(function(posts){
			res.json(posts);
		}, function(err){
			next(err);
		});
	},
  getByUser: (req,res,next) => {
    const userId = req.params.user;
    Post.find({user_id:userId})
      .sort({created_at: -1})
    .then(function(posts){
      res.json(posts);
    }, function(err){
      next(err);
    });
  }
}



