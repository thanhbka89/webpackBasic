var path = require('path');

module.exports = {
  name: 'app',
  target: 'web',
  entry: {
    app: [
      './app/index.js',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'./dist')
  },
  watch: true
}
