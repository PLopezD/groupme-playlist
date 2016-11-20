import Collection from 'ampersand-rest-collection';
import Post from './post';
import config from '../config';


export default Collection.extend({
	model: Post,
	
	url: config.apiUrl + '/api/posts',

  fetchWithParams: function(params) {
    return config.apiUrl + '/api/posts';
  }
  
})