const path = require( 'path' );
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );

module.exports = ( env ) => {
  return {
    entry: [ './src/index.tsx', './src/assets/main.scss' ],
    resolve: {
      extensions: [ '.ts', '.tsx', '.js' ],
      alias: {
        components: path.resolve( __dirname, './src/App/components/' ),
      },
    },
    output: {
      path: path.resolve( __dirname, 'public' ),
      filename: 'assets/js/bundle.min.js',
    },
    module: {
      rules: [
        { test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/css/[name].css',
              },
            },
            {
              loader: 'extract-loader',
            },
            {
              loader: 'css-loader?-url',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true,
          },
          exclude: /assets/,
        },
      ],
    },
    devServer: {
      host: 'localhost',
      port: 8080,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin( {
        template: './public/index.html',
      } ),
      new webpack.DefinePlugin( {
        'process.env.development': !!( env && !env.production ),
      } ),
      new ForkTsCheckerWebpackPlugin( { eslint: true } ),
    ],
  };
};
