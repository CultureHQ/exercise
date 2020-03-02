import path from "path";

export default {
  output: {
    path: path.resolve(__dirname),
    filename: "application.js"
  },
  entry: path.join(__dirname, "application.tsx"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "awesome-typescript-loader", exclude: /node_modules/ }
    ]
  }
};
