import Model from 'ampersand-model';
import PostCollection from './post-collection';

export default Model.extend({
	initialize(){
		this.token = window.localStorage.token
	},
	session:{
		token: 'string'
	},
	collections:{
		posts:PostCollection
	},
	fetchInitialData(){
		this.posts.fetch()
	}
})