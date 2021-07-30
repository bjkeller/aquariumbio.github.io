module.exports = {
  siteMetadata: {
    title: "Aquarium",
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-theme-material-ui",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto`,
          `lato`,
          "material icons"
        ],
        display: 'swap'
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // url: API URL to use. Defaults to  https://api.github.com/graphql
        url: `https://api.github.com/graphql`,

        // token: required by the GitHub API
        token: `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`,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `
          {
            search(
              type:REPOSITORY,
              query: "org:klavinslab in:README workflow",
              last: 100
            ) {
              repos: edges {
                repo: node {
                  ... on Repository {
                    name
                    url
                    description
                    primaryLanguage {name}
                    languages(first: 3) { nodes {name} }
                    forkCount
                    pullRequests {totalCount}
                    updatedAt
                    readme: object(expression: "master:README.md") {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
              }
            }
            repository(owner: "aquariumbio", name: "aquarium") {
              description
              releases(last: 10, orderBy: {field: CREATED_AT, direction: DESC}) {
                edges {
                  node {
                    id
                    description
                    isLatest
                    name
                    tag {
                      name
                    }
                    publishedAt
                    author {
                      login
                    }
                  }
                }
              }
            }
          }
        `,
      }
    },
  ],
};
