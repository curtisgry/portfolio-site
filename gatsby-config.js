module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Curtis Gray',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['urbanist:300,400'],
        display: 'swap',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
  ],
};
