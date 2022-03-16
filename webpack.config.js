const path = require("path");

const appDir = path.resolve("./app");
const outDir = path.resolve("./www");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = () => {
  return {
    devServer: {
      compress: false,
      open: true,
      port: 9005,
      static: {
        directory: path.join(__dirname, "www"),
      },
    },
    mode: "production",
    entry: appDir + "/index.tsx",
    module: {
      rules: [
        {
          test: /\.tsx?/,
          use: [
            {
              loader: path.resolve(__dirname, "./template-loader.js"),
            },
            {
              loader: "ts-loader",
              options: {
                configFile: "tsconfig.app.json",
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: outDir,
      publicPath: "/",
      filename: "[name].js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      modules: ["app", "node_modules"],
    },
    performance: {
      hints: false,
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              // We want terser to parse ecma 8 code. However, we don't want it
              // to apply any minification steps that turns valid ecma 5 code
              // into invalid ecma 5 code. This is why the 'compress' and 'output'
              // sections only apply transformations that are ecma 5 safe
              // https://github.com/facebook/create-react-app/pull/4234
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              // Disabled because of an issue with Uglify breaking seemingly valid code:
              // https://github.com/facebook/create-react-app/issues/2376
              // Pending further investigation:
              // https://github.com/mishoo/UglifyJS2/issues/2011
              comparisons: false,
              // Disabled because of an issue with Terser breaking valid code:
              // https://github.com/facebook/create-react-app/issues/5250
              // Pending further investigation:
              // https://github.com/terser-js/terser/issues/120
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            // Added for profiling in devtools
            output: {
              ecma: 5,
              comments: false,
              // Turned on because emoji and regex is not minified properly using default
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
    },
    // plugins: [
    //     new BundleAnalyzerPlugin()
    // ]
  };
};
