// Require Webpack
const webpack = require('webpack');

// Node's built-in path module, which prevents file path issues between operating systems
// Use NodeJS helper module to define correct absolute file reference paths
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Generates an HTML5 file for you that includes all your webpack bundles in the body using script tags
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;

const WebpackNotifierPlugin = require('webpack-notifier');

// ADDED FOR AUTOPREFIXER
const PostCSSPlugin = require('postcss-loader');


// MAIN WEBPACK CONFIGURATION
const webpackBaseConfig = function(env) {

    return {

        // Location of the index.js file
        // Where Webpack's begins it module compilation process
        entry: {

          // File containing our custom code
          global: "./src/javascripts/global.js",

          // File containing our custom routes
          router: "./src/javascripts/router.js",

          // File containing code from third party libraries
          vendor: ['jquery', 'picturefill', 'svg4everybody' ]
        },

        // Newly compiled file configuration
        output: {

          // Save location of the newly compiled output file
          path: path.resolve(__dirname, "../public/build"),

          // What to call the newly compiled output file
          // [name] will be replaced with the entry objects key value.
          filename: "[name].config.base.js",

          // Path webpack will reference for looking for public files. Important for dynamic codesplitting
          publicPath: "./build/"

        },

        // Module Rules Systems => Configuration for webpack loaders
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                  test: /\.sass$/,
                  use: ExtractTextPlugin.extract({
                      use: [{loader: "css-loader"}, {loader: "postcss-loader"}, {loader: "sass-loader"}],
                      fallback: "style-loader"
                  })
                },
            ]
        },

        // Don't follow/bundle these modules, but request them at runtime from the environment
        // externals: {
        //     Modernizr: 'modernizr'
        // },

        // Plugins => Configure webpack plugins
        plugins: [
            // The DefinePlugin allows you to create global constants which can be configured at compile time.
            // Note: process.env.NODE_ENV is set within npm "scripts"
            new webpack.DefinePlugin({
              'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }),

            // Will remove duplicate modules that exist due to "Code Splitting" to only include once within the specified bundle "names".
            new webpack.optimize.CommonsChunkPlugin({
              names: ['vendor', 'manifest'],
              minChunks: Infinity
              // minChunks ensures that no other module goes into the vendor chunk
            }),

            // Generates an HTML5 file for you that includes all your webpack bundles in the body using script tags
            // NOTE: Add excludeChunks: ['fallback']
            new HtmlWebpackPlugin({
              template: './src/webpack.templates/_webpack.template.wrapper.twig',
              filename: '../static/templates/_webpack.templates/_webpack.template.wrapper.twig',
            }),

            new WebpackNotifierPlugin({alwaysNotify: true}),

        ]
    }
};

module.exports = webpackBaseConfig;
