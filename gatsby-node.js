const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  const extraConfig = {
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    }
  };

  actions.setWebpackConfig(extraConfig);
};
