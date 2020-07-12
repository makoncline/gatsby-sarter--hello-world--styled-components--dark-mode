module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/theme.js`).darkTheme,
      },
    },
  ],
}
