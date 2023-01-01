const path = require('path')
const slugify = require('slugify')
const postTemplate = path.resolve(`./src/templates/post-template.jsx`)
const categoryTemplate = path.resolve(`./src/templates/category-template.jsx`)
const readingTime = require(`reading-time`)

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetAllMdx {
      allMdx {
        nodes {
          frontmatter {
            title
            category
          }
          internal {
            contentFilePath
          }
        }
      }
      categories: allMdx {
        nodes {
          frontmatter {
            title
            category
          }
          internal {
            contentFilePath
          }
        }
        distinct(field: { frontmatter: { category: SELECT } })
      }
    }
  `)

  const getCategories = await graphql(`
    query GetDistinctCategories {
      categories: allMdx {
        distinct(field: { frontmatter: { category: SELECT } })
        nodes {
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.nodes
  const categories = getCategories.data.categories.distinct

  posts.forEach(node => {
    slug = slugify(node.frontmatter.title, { lower: true })
    createPage({
      path: `/${node.frontmatter.category.toLowerCase()}/${slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, slug, title: node.frontmatter.title },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/${category.toLowerCase()}`,
      component: path.resolve(`src/templates/category-template.jsx`),
      context: {
        category,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })
  }
}
