module.exports = {
  entry: {
    app: "./src/app.js",
    adminApp: "./src/adminApp.js",
  },
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
      { test: /\.css&/, use: "css-loader"},
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
  externals: {
    fs: "commonjs2 fs",
    path: "commonjs2 path",
    stream: "commonjs2 stream/promises",
  }
};
