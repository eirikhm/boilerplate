const path = require('path')
const webpack = require('webpack'); // used to merge webpack configs
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');


module.exports = (env, args) => {

  const isProduction = args.mode === 'production'
  return {
  
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [
      new ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),

      new webpack.ProvidePlugin({
        "React": "react",
      }),
      new BundleAnalyzerPlugin({
        analyzerMode:  !isProduction ? 'server' : 'disabled',
      }),

    ],  
    optimization: Object.assign(
      {
        splitChunks: {
          chunks: 'all',
        },
      },
      isProduction && {
        minimizer: [
          (compiler) => {
            const TerserPlugin = require('terser-webpack-plugin')
            new TerserPlugin({
              cache: true,
              parallel: true,
              sourceMap: true,
              terserOptions: {
                safari10: true,
              },
            }).apply(compiler)
          },
        ],
      }
    ),
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      https:false,
      hot:true,
      inline:true,
      open:true,
      historyApiFallback:{
        disableDotRule: true,
      },
      
    },
    module: {
      rules: [
        {
          test: /\.(png|woff2|jpg)$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(ts|tsx|js)$/,
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ]
        },

      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    }
  }
}

