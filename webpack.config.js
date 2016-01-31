module.exports = {
  entry: './ui',
  output: {
  	filename: 'public/bundle.js'
  },
  module: {
  	loaders: [
		{
			loader:'babel',
			exclude: /(node_modules|server)/
		}
	]
  }
}
