import Model from 'ampersand-model';
import PostCollection from './post-collection';

export default Model.extend({
	collections:{
		posts:PostCollection
	},
	fetchData(params){
		this.posts.fetch({data:params})
	}
})