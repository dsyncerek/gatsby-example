module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: { rule: { include: `${__dirname}/src/assets/icons` } },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { path: `${__dirname}/src/assets/images`, name: 'images' },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-image',
  ],
};
