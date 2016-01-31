var API = require("groupme").Stateless
var apiKey = require("../config/config").accessCode
var Post = require("../api/post/postModel")
var queryString = require('query-string');
var request = require('request');
var _ = require('lodash');
var logger = require('./logger');

var groupId = "19001737"
var opts = {limit:'100'}
var allMessages = []

var urlGen = function (groupId, apiKey,opts) {
  if (Object.keys(opts).length === 1) {
    return "https://api.groupme.com/v3/groups/" + groupId + "/messages?token=" + apiKey + "&" + queryString.stringify(opts);
  }
  return "https://api.groupme.com/v3/groups/" + groupId + "/messages?token=" + apiKey + "&limit=" + opts.limit + "&before_id=" + opts.before_id;  
}
var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [Post]
  .map(function(model) {
    return model.remove().exec();
  });
  return Promise.all(cleanPromises);
}

var apiCall = function (url) {
  return new Promise(function (res,rej) {
    request(
    {
      uri:    url,
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    },function (err,responses,body) {
      var lol = JSON.parse(body)
      res(lol.response.messages)
    })
  }) 
}
var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var seeder = function () {
  apiCall(urlGen(groupId,apiKey,opts)).then(function (messages) {
   allMessages = allMessages.concat(messages)
   var lastIndex = allMessages.length-1
   var newOpts = _.merge(opts,{before_id: allMessages[lastIndex].id});
   var newUrl =  urlGen(groupId,apiKey,newOpts);
   apiCall(newUrl).then(function (messages) {
     allMessages = allMessages.concat(messages)
     var lastIndex = allMessages.length-1
     var newOpts = _.merge(opts,{before_id: allMessages[lastIndex].id});
     var newUrl =  urlGen(groupId,apiKey,newOpts);
     apiCall(newUrl).then(function (messages) {
       allMessages = allMessages.concat(messages)
       var lastIndex = allMessages.length-1
       var newOpts = _.merge(opts,{before_id: allMessages[lastIndex].id});
       var newUrl =  urlGen(groupId,apiKey,newOpts);
       apiCall(newUrl).then(function (messages) {
         allMessages = allMessages.concat(messages)
         allMessages.map((message) => {
           return createDoc(Post,message)
         })
         // logger.log('Seeded with ' + Post.find({}) + ' posts');
         logger.log('Seeded with posts');
       })  
     })  
   })

 },function (err) {
   console.log(err)
 }) 
}

cleanDB()
  .then(seeder)
  .catch(logger.log.bind(logger));