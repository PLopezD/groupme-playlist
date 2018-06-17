var API = require("groupme").Stateless
var apiKey = require("../config/config").accessCode
var Post = require("../api/post/postModel")
var queryString = require('query-string');
var request = require('request');
var _ = require('lodash');
var logger = require('./logger');
var GmeMusicDefiner = require('./gmemusicdefiner.js')

// group specific seedings
var groupId = "19001737";
var createdTime = '1452792784';
// 
var urlPattern = new RegExp("^(http|ftp|https)");
var opts = {limit:'100'};
var allMessages = [];

var urlGenerator = function (groupId, apiKey,opts) {
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
    }, function (err,responses,body) {
      var response = JSON.parse(body)
      res(response.response.messages)
    }, function (err) {
      rej(err)
    }
    )
  }) 
}

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var number = 0;

var keepGettingMessages = function (messages) {
    number++  
    if (number > 30) {
      return pushToMongo(allMessages)
    } else {
      allMessages = allMessages.concat(messages)
      var lastIndex = allMessages.length-1
      var newOpts = _.merge(opts,{before_id: allMessages[lastIndex].id});
      var newUrl =  urlGenerator(groupId,apiKey,newOpts);
      return apiCall(newUrl).then(function(messages){
        keepGettingMessages(messages);
      })
    }
  }


var getAllMessages = function () {
  var initialUrl = urlGenerator(groupId,apiKey,opts);
  return apiCall(initialUrl).then(function(messages){
      return keepGettingMessages(messages)
  })
}

var pushToMongo = function(messages) {
  messages.map((message) => {
    if (message.text && suitableUrl(message.text)) {
      var defineMe = new GmeMusicDefiner(message.text)
      defineMe.getDesc().then(function (final) {
        var postFinal = _.merge(message,final);
        createDoc(Post,postFinal)
      })
    }          
  })
}

var suitableUrl = function (messageText) {
  if ( messageText.match(urlPattern) 
    && messageText.indexOf('grouplayv1') === -1
    && messageText.indexOf('https://youtu.be/p9j8RGTq') === -1) {
    return true
  } else {
    return false
  }
}
  
cleanDB()
.then(getAllMessages)
.then(logger.log('Added posts'))
.catch(logger.log.bind(logger));