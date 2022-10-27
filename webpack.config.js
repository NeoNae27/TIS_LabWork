const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const PugPlugin = require("pug-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const Optimization = () => {
  const Config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    Config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return Config;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  devtool: isProd ? false : "source-map",

  // SRC
  entry: {
    main: ["@babel/polyfill", "./index.js"],
  },

  // DIST
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    port: 3000,
    hot: isDev,
  },

  // Плагины
  plugins: [
    // Корнева страница
    new HTMLWebpackPlugin({
      template: "./index.pug",
      minify: {
        collapseWhitespace: isProd,
      },
    }),

    // new BundleAnalyzerPlugin(),

    // Очистка
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),

    // Копирование
    //     new CopyWebpackPlugin([
    //       {
    //         from: path.resolve(__dirname, "src/НАЗВАНИЕ ФАЙЛА"),
    //         to: path.resolve(__dirname, "dist"),
    //       },
    //     ]),
  ],

  // Модули (ЗАГРУЗКА РАБОТАЕТ СПРАВА НА ЛЕВО!!!)
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "@webdiscus/pug-loader",
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader", // inject CSS to page
          },
          {
            loader: "css-loader", // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function () {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              },
            },
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          },
        ],
      },

      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },

      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },

      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      
      {
        test: /\.csv$/,
        use: ["csv-loader"],
      },
    ],
  },

  optimization: Optimization(),
};
