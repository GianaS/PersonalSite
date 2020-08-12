exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const ResumeTemplate = require.resolve(`./src/templates/resume.tsx`)
  const AboutTemplate = require.resolve(`./src/templates/about.tsx`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let slug = node.frontmatter.slug

    switch (slug) {
      case '/resume':
        createPage({
          path: slug,
          component: ResumeTemplate,
          context: {
            slug
          },
        })
        break
      case '/about':
        createPage({
          path: slug,
          component: AboutTemplate,
          context: {
            slug
          },
        })
        break
    }
  })
}