module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-gatsby-cloud", 
    "gatsby-plugin-styled-components",
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Baron Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#e4815d`,
        theme_color: `#e4815d`,
        display: `standalone`,
        icon: `src/images/iconB.png`,
      },
    },
  ],
};
