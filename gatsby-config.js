module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: { rule: { include: /\.svg$/ } },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
    // {
    //   resolve: 'gatsby-plugin-eslint',
    //   options: {},
    // },
    // {
    //   resolve: 'gatsby-plugin-stylelint',
    //   options: { files: ['**/*.{js,jsx}'] },
    // },
  ],
};
