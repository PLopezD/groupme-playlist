//curl -X POST "https://api.groupme.com/v3/bots/post?bot_id=a50adb57a9892969de430abaee&text=Hello+an+faggots,+this+is+Johnny"
//"https://api.groupme.com/v3/bots/post?bot_id=a50adb57a9892969de430abaee&text=Hello+an+faggots,+this+is+Johnny"
var https = require('https');
var makeURI = function (message,botId) {
	//tester group
	//a50adb57a9892969de430abaee == asshole group
	var botId = botId || '46614c61b21cb2f6f43fde0ca6'
	var encodedURI = encodeURI("/v3/bots/post?bot_id="+botId+"&text="+message);	
	return encodedURI;
}
var path = makeURI("Do you boys want to party?",'a50adb57a9892969de430abaee')
//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'api.groupme.com',
  path: path,
  method: 'POST',
  headers: {
	    accept: '*/*'
	},
	port:443
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });

  response.on('error', function (error) {
    console.log(error);
  });

}

var req = https.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write('');
req.end();
req.on('error', function (err) {
	console.log(err)
})