import Post from './postModel'
import _ from 'lodash'
import logger from '../../util/logger'


module.exports = {
	getRequest: (req,res,next) => {
    let query = {}
    if (req.query.user_id) {
      query.user_id = req.query.user_id
    }
    let limit = 20

		Post.find(query)
      .limit(limit)
      .sort({created_at: -1})
      .skip(Number(req.query.offset) * 20)
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



