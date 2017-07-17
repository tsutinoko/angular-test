const glob = require("glob")

var entries = []
glob.sync("./develop/counter/**/*.js").map(function(file){
  entries.push(file);
})

module.exports = {
  // エントリーポイントの設定
  entry: entries,
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'component.js',
    // 出力先のパス
    path: './develop/js'
  },
  watch: true,
  cache: false,
  module: {
    loaders:[{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  }
}

