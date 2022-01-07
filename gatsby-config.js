require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitleAlt: `thr0n's Blog | Hendrik Bölcke`,
    siteTitle: `thr0n's Blog 🐧`,
    siteUrl: `https://thr0n.github.io`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    siteHeadline: `thr0n's Blog`,
    siteDescription: `Just my thoughts about technology, reports about private programming projects, and code snippets i'd like to share.`,
    author: `Hendrik Bölcke`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/thr0n`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/hendrik-t-54932377/`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/hthr0n`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thr0n's Blog 🐧`,
        short_name: `thr0n's Blog`,
        description: `Just my thoughts about technology, reports about private programming projects, and code snippets i'd like to share.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
