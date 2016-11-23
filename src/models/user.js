import Model from 'ampersand-model';
import PostCollection from './post-collection';

export default Model.extend({
	collections:{
		posts:PostCollection
	},
	fetchData(params){
    if (this.posts.length === 0) {
      this.posts.fetch({data:params})
    } else {
		  this.posts.fetch()
    }
	},
  getPage(offset) {
    
  }
})