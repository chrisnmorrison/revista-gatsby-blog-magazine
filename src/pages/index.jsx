import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import RecentPosts from '../components/RecentPosts'
import { graphql } from 'gatsby'
import Featured from '../components/featured/Featured'
import Seo from '../components/SEO'
import Notification from '../components/Notification'

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  const {
    site: { siteMetadata: metadata },
  } = data
  return (
    <Layout>
      <Seo
        title={`${metadata.title} | Promoting Free Education for Everyone`}
        description={metadata.description.substr(0, 160)}
      />

      <Hero />

      <Featured />
      <Notification />
      <RecentPosts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
query Home {
  allMdx(limit: 3, sort: {frontmatter: {date: DESC}}) {
    nodes {
      excerpt
      frontmatter {
        title
        category
        date(formatString: "MMMM, Do YYYY")
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
    }
  }
  site {
    siteMetadata {
      title
      description
      image
    }
  }
}
`

export default IndexPage
