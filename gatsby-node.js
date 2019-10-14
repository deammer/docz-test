const path = require("path");

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  const extraConfig = {
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            loaders.style(),
            loaders.css(),
            // loaders.postcss({ plugins: postCssPlugins }),
            "sass-loader"
          ]
        }
      ]
    }
  };

  actions.setWebpackConfig(extraConfig);
};
