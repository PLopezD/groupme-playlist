import Post from './postModel'
import _ from 'lodash'
import logger from '../../util/logger'


module.exports = {
	getRequest: (req,res,next) => {
		Post.find({},).sort({created_at: -1})
		.then(function(posts){
			res.json(posts);
		}, function(err){
			next(err);
		});
	}
}
