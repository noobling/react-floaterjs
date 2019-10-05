var path = require("path");

module.exports = {
  mode: "production",
  entry: "./examples/src/lib/index.tsx",
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", // https://goo.gl/aAxYAq
                "@babel/preset-react", // https://goo.gl/4aEFV3
                "@babel/typescript"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
