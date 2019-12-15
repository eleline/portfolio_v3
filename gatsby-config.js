require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  lang: "ja",
  siteMetadata: {
    siteTitle: `ELELINE`,
    siteTitleAlt: `ELELINE Portfolio`,
    siteHeadline: `ELELINE Portfolio`,
    siteUrl: `https://eleline.me`,
    siteDescription: `フロントエンドエンジニア見習い ELELINE のポートフォリオサイト`,
    siteLanguage: `ja`,
    siteImage: `/og.png`,
    author: `@eleline5`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ELELINE`,
        short_name: `ELELINE`,
        description: `Portfolio for ELELINE`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
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
  ],
}
