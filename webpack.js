const Path = require("path");
const createHTMLPages = require("./src/scripts/build");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpack = require("webpack");

const loadPlugins = baseurl => {
  let plugins = createHTMLPages(baseurl);
  plugins.push(new CleanWebpackPlugin());
  plugins.push(
    new CopyWebpackPlugin([
      {
        from: Path.resolve(__dirname, "src/html/assets/*"),
        to: Path.resolve(__dirname, "html")
      }
    ])
  );
  plugins.push(
    new Webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  );
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  );
  plugins.push(
    new Webpack.DefinePlugin({
      "process.env.baseurl": JSON.stringify(process.env.baseurl)
    })
  );
  return plugins;
};

module.exports = env => {
  const isProduction = undefined === env || !env.development;
  const baseurl = env.baseurl || "/";
  const config = {
    paths: {
      resources: Path.resolve(__dirname, "./src/"),
      assets: Path.resolve(__dirname, "./src/assets/"),
      dist: Path.resolve(__dirname, "html")
    },
    sourceMaps: !isProduction,
    isProduction: isProduction
  };

  const settings = {
    context: config.paths.assets,
    mode: isProduction ? "production" : "development",
    devtool: config.sourceMaps ? "#source-map" : undefined,
    optimization: {
      splitChunks: {
        chunks: "async",
        name: false
      }
    },
    entry: {
      app: [Path.join(config.paths.resources, "scripts/index.js")],
      components: Path.join(config.paths.resources, "scripts/components.js")
    },
    output: {
      path: config.paths.dist,
      /*publicPath: "",*/
      filename: "js/[name].js",
      chunkFilename: "js/[name].chunk.js"
    },
    devServer: {
      inline: true,
      contentBase: Path.join(__dirname, "src"),
      watchContentBase: true,
      disableHostCheck: true,
      host: "0.0.0.0",
      useLocalIp: false //set to true to use actual ip address
    },

    stats: {
      hash: true,
      outputPath: true,
      assets: true,
      errors: true,
      errorDetails: true,
      warnings: true,
      reasons: true,
      source: true,
      children: false,
      modules: false,
      publicPath: true
    },
    plugins: loadPlugins(baseurl),
    module: {
      rules: [
        /*
        {
          enforce: "pre",
          test: /\.js$/,
          include: config.paths.resources,
          use: "eslint"
        },*/
        {
          test: /\.(js)$/,
          include: config.paths.resources,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
          include: config.paths.assets,
          exclude: /node_modules/,
          loader: "url-loader",
          options: {
            name: `[path][name].[ext]`
          }
        },
        {
          test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
          include: /node_modules/,
          loader: "file-loader",
          options: {
            limit: 4096,
            outputPath: (url, resourcePath, context) => {
              return `vendor/${url}`;
            },
            publicPath: "../vendor/",
            name: `[name].[ext]`
          }
        },
        {
          test: /\.(s?css|ya?ml)/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProduction
              }
            },
            "css-loader"
          ]
        },
        {
          test: /\.(s?css|ya?ml)$/i,
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        },
        {
          test: /\.md$/i,
          include: config.paths.resources,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader"
            }
          ]
        }
      ]
    }
  };
  return settings;
};
