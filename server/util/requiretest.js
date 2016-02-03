var GmeMusicDefiner = require('./gmemusicdefiner.js')

var GmeMusicDefiner = new definer('https://fuck.com/ehealy/150-roll-widdit?in=ehealy/sets/a-galaxy-with-skin')

GmeMusicDefiner.getDesc().then(function (final) {
	console.log(final)
})


