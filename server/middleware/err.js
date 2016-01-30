module.exports = function () {
	return function (err,req,res,next) {
		if (err){
			console.log('just the err',err)
			res.status(500).send('error')
		}
		next()
	}
}