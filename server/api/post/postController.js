import Post from './postModel'
import _ from 'lodash'
import logger from '../../util/logger'


module.exports = {
	getRequest: (req,res,next) => {
    let query = {}
    console.log(req.query)
    if (req.query.user_id) {
      query.user_id = req.query.user_id
    }

    if (req.query.favorited_by) {
      query.favorited_by = String(req.query.favorited_by);
    }

		Post.find(query)
      .sort({created_at: -1})
      .skip(Number(req.query.offset) * 20)
		.then(function(posts){
			res.json(posts);
		}, function(err){
			next(err);
		});
	}
}



