var mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  attachments:{
    type:[]
  },
  avatar_url:{
    type:String
  },
  created_at:{
    type:String
  },
  favorited_by:{
    type: [String]
  },
  group_id:{
    type:String
  },
  id:{
    type:String,
    unique:true
  },
  name:{
    type:String
  },
  sender_id:{
    type:String
  },
  sender_type:{
    type:String
  },
  source_guid:{
    type:String
  },
  text:{
    type:String,
    validate: /^(ftp:\/\/|http:\/\/|https:\/\/)/i
  },
  user_id:{
    type:String
  },
  description:{
   type:String
 },
 author: {type: Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('post', PostSchema);

