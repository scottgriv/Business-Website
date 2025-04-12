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
    title: `A Software Development, Design, Consulting, & Education Company`,
    description: `A Software Development, Design, Consulting, & Education Company`,
    author: `@Night_Owl_Labs`,
    siteUrl: `https://nightowllabs.io`,
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
        background_color: `#0E2F00`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        //theme_color: `#FFFFFF`, //White
        //theme_color: `#FCDB3A`, //Yellow
        //theme_color: `#0E2F00`, //Dark Green
        //theme_color: `#005E1F`, //Lighter Green
        theme_color: `#0E2F00`, //Dark Green
        // display: `minimal-ui`,
        icons: [
          {
            src: `images/favicons/apple-touch-icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/favicons/apple-touch-icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/favicons/apple-touch-icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/favicons/apple-touch-icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/favicons/apple-touch-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/favicons/apple-touch-icon-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/favicons/apple-touch-icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/favicons/apple-touch-icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
        display: `standalone`,
        include_favicon: false,
      },
    },
  ],
}
