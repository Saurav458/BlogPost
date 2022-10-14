const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
//   entry:"./src/components/Homepage/Homepage.tsx",
  entry: ["./src/components/Homepage/Homepage.tsx","./src/components/Card.tsx"],
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: "/.(js|jsx)$/",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        loader: "css-loader",
        test: /\.txt$/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
};
