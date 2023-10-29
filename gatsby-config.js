/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Software Development, Design, Consulting, Education`,
    description: `Software Development, Design, Consulting, Education`,
    author: `@Night_Owl_Labs`,
    siteUrl: `https://www.nghtowllabs.net`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Night Owl Labs`,
        short_name: `Night Owl Labs`,
        start_url: `/`,
        background_color: `#fcdb3a`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#fcdb3a`,
        display: `minimal-ui`,
        icon: `src/images/icon-rounded.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
