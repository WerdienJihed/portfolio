module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-transformer-sharp`,
  ],
};
