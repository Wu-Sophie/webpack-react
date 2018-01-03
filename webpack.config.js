var path = require('path')

module.exports = {
  entry: './src/main.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: ['/node_modules/'],
        loader: 'babel-loader'
      },
      {
        test: /\.png|jpg|jpeg|gif$/,
        exclude: ['/node_modules/'],
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        exclude: ['/node_modules/'],
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: ['.', './src'],// 指定服务器资源的根目录，默认值是项目目录
    port: 8888,
    hot: true,
    open: true,
    proxy: {
      '/discover-api':  {
        target: 'http://112.124.116.174:3001',
        changeOrigin: true,
        pathRewrite: {'/discover-api' : '/'}
      },
      '/app-api':  {
        target: 'https://test-napi.yiqijiao.net',
        changeOrigin: true
      }
    }
  }
}