var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './example.ts',
    vuevendor: [ 'vue', 'vue-property-decorator', 'vue-router', 'vuex' ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    // Needed to build dynamic bundles. Use chunkhash to get file hash value
    // to prevent e.g. CDN to serve old versions of your bundles.
    chunkFilename: '[name].[chunkhash].bundle.js',
    // Used to load [name].[chunkhash].bundle.js from a correct location
    // publicPath: '/dist/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
          },
        },
      },      
    ]
  },
  plugins: [
    // libraries
    new webpack.optimize.CommonsChunkPlugin({
      name: "vuevendor",
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),

    // Webpack's bootstrap and module manifest.
    // Include logic to load correct versions of dynamic bundles.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    })        
  ]
}
