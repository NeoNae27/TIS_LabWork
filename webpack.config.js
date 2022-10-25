

// module.exports = {
//   output: {
//     path: path.join(__dirname, 'public/'),
//     publicPath: '/', // must be defined any path, `auto` is not supported yet
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, 'src/index.pug'),
//       filename: 'index.html',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.pug$/,
//         loader: '@webdiscus/pug-loader',
//       },
//     ],
//   },
// };