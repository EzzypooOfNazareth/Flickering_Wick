const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            title
            content
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            title
            content
            path
            status
            template
            format
          }
        }
      }
      allWordpressWcProducts {
        edges {
          node {
            id
            name
            description
            on_sale
            prices {
              regular_price
              sale_price
            }
            images {
              src {
                source_url
              }
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw new Error(result.errors)
  }

  const { allWordpressPage, allWordpressPost, allWordpressWcProducts } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(pageTemplate),
      context: edge.node,
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: edge.node,
    })
  })

  const productTemplate = path.resolve(`./src/templates/product.js`)
  allWordpressWcProducts.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.id}`,
      component: slash(productTemplate),
      context: edge.node,
    })
  })
}