module.exports = {
  siteMetadata: {
    title: 'Modern Web Developer | Tawnee Allport',
    siteUrl: `https://www.tawneeallport.com`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Modern Web Developer | Tawnee Allport',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#30274d',
        theme_color: '#30274d',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Dosis:200,400', 'Heebo:900,400']
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    },
    'gatsby-plugin-offline',
    {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {

      }
    },
  ],
}
