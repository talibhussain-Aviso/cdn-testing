const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lead-intelligence-module.umd.js',
    library: 'LeadIntelligenceModule',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  },
  'vue-router': {
    root: 'VueRouter',
    commonjs: 'vue-router',
    commonjs2: 'vue-router',
    amd: 'vue-router'
  }
},
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [new VueLoaderPlugin()],
};
