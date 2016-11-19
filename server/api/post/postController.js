import Post from './postModel'
import _ from 'lodash'
import logger from '../../util/logger'


module.exports = {
	getRequest: (req,res,next) => {
    let query = {}
    let limit = 40
    if (req.query.offset) {
      query = req.query.offset 
      limit = 20
    }
		Post.find(query)
      .limit(limit)
      .sort({created_at: -1})
		.then(function(posts){
			res.json(posts);
		}, function(err){
			next(err);
		});
	}
  // getByUser: (req,res,next) => {
  //   const userId = req.params.user;
  //   Post.find({user_id:userId})
  //     .sort({created_at: -1})
  //   .then(function(posts){
  //     res.json(posts);
  //   }, function(err){
  //     next(err);
  //   });
  // }
}



