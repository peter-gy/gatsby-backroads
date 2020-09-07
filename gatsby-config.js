const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Backroads",
    description: "Explore awesome tours",
    author: "Peter Gyarmati",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
  ],
}
