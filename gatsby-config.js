module.exports = {
  siteMetadata:{
    title:"AwakenTour",
    description:"Conoce la ciudad maravilla visita La Paz durante 3 dias",
    author:"AwakenTour",
    data:{
      name:'Bryan',
      age:24,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`
  ],
}
