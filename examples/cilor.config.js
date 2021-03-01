const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname, "output"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "output"),
  },
  htmlConfig: {
    title: "Type your title here!",
    elementID: "app", // default root
  },
};
