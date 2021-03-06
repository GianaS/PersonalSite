module.exports = {
  siteMetadata: {
    title: `Giana's Site`,
    description: `Giana's Site`,
    author: `Giana`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./static/images/lemon-emoji.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "noopener noreferrer"
          }
        }]
      }
    }
  ],
}
