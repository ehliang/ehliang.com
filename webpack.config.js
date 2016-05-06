module.exports = {
  context: __dirname + "/src",
  entry: "./main.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react']
        }
      }
    ]
  },
}