module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: { rule: { include: `${__dirname}/src/assets/svg` } },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
};
