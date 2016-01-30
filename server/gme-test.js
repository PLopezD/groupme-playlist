var API = require("groupme").Stateless
var apiKey = require("./config").accessCode
var stream = require('groupme').IncomingStream;
var queryString = require('query-string');
var request = require('request');
var _ = require('lodash');

var groupId = "19001737"
var opts = {}
opts.limit = '100'
// opts.before_id = '145377644978789735'
var allMessages = []

var urlGen = function (groupId, apiKey,opts) {
	if (Object.keys(opts).length === 1) {
		return "https://api.groupme.com/v3/groups/" + groupId + "/messages?token=" + apiKey + "&" + queryString.stringify(opts);
	}
	return "https://api.groupme.com/v3/groups/" + groupId + "/messages?token=" + apiKey + "&limit=" + opts.limit + "&before_id=" + opts.before_id;	
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
// apiCall(urlGen(groupId,apiKey,opts)).then(function (messages) {
// 	allMessages = allMessages.concat(messages)
// 	var lastIndex = allMessages.length-1
// 	var newOpts = _.merge(opts,{before_id: allMessages[lastIndex].id});
// 	var newUrl =  urlGen(groupId,apiKey,newOpts);
// 	apiCall(newUrl).then(function (messages) {
// 		allMessages = allMessages.concat(messages)
// 		var lastIndex = allMessages.length-1
// 		var newOpts = _.merge(opts,{before_id: allMessages[lastIndex].id});
// 		var newUrl =  urlGen(groupId,apiKey,newOpts);
// 		apiCall(newUrl).then(function (messages) {
// 			allMessages = allMessages.concat(messages)
// 			var lastIndex = allMessages.length-1
// 			var newOpts = _.merge(opts,{before_id: allMessages[lastIndex].id});
// 			var newUrl =  urlGen(groupId,apiKey,newOpts);
// 			apiCall(newUrl).then(function (messages) {
// 				allMessages = allMessages.concat(messages)

// 			})	

// 		})	
// 	})

// },function (err) {
// 	console.log(err)
// })	


// apiCall(urlGen(groupId,apiKey,{limit:20})).then(function (s) {
// 	console.log(s)
// })