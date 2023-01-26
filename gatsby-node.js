exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    externals: [
      {
        canvas: "canvas",
      },
    ],
  });
};
