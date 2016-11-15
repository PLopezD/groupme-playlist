require('babel/register')
var getConfig = require('hjs-webpack')
var finalConfig = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true,
  loaders:[
    {
      test: /\.html$/,
      loader: "raw-loader"
    }
  ]
})
module.exports = finalConfig;