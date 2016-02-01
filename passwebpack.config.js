// module.exports = {
//   entry: './ui',
//   output: {
//   	filename: 'public/bundle.js'
//   },
//   module: {
//   	loaders: [
// 		{
// 			loader:'babel',
// 			exclude: /(node_modules|server)/
// 		}
// 	]
//   }
// }


var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'ui/app.js',
  out: 'public',
  clearBeforeBuild: true
})
