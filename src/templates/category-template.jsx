import React from 'react'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Seo from '../components/SEO'

const CategoryTemplate = props => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props

  return (
    <>
      <Layout>
        <CategoryPostsStyles>
          <Posts posts={posts} title={`${category}`} />
        </CategoryPostsStyles>
      </Layout>
      <Seo
        title={`${category} | Revista`}
        description={`Top Resources to Learn ${category} for free.`}
      />
    </>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        fields {
          timeToRead {
            words
          }
        }
        excerpt(pruneLength: 60)
        frontmatter {
          title
          category
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
            size
          }
        }
      }
    }
  }
`

const CategoryPostsStyles = styled.section`
  margin: 4rem 0;
`

export default CategoryTemplate
