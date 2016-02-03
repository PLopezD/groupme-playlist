import Model from 'ampersand-model'
import PostCollection from './post-collection';
import config from '../config';


export default Model.extend({
	props:{
		avatar_url:'string',
		created_at:'string',
		favorited_by:'string',
		group_id:'string',
		id:'string',
		name:'string',
		sender_id:'string',
		sender_type:'string',
		source_guid:'string',
		text:'string',
		description:'string',
		user_id:'string'
	}
	
})