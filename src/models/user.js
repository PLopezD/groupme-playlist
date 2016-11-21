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
      let endOfCollectionIndex = this.posts.length
      this.posts.fetch({data:params})
      // this.posts.add({data:params},{at:endOfCollectionIndex, merge:true})
    }
	}
})