/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@mahilsonhagnner",
    person: {
      name: "Mahilson",
      age: "31",
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: "Mahilson", age: "31" },
      { name: "Falvia", age: "30" }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
