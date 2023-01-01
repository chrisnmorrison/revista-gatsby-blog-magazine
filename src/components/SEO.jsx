import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    url,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image || defaultImage}`,
    url: `${url}${pathname}`,
  }
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      {seo.title && <meta property="og:title" content={seo.title} />}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org/",
          "@type": "Organization",
          "description: "Free and Revista Resources",
          "url": "https://revista-gatsby-blog-magazine.one",
          "homepage": "https://revista-gatsby-blog-magazine.one",
          "name": "Revista",
          "email": "mailto:opendotone@gmail.com",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+5-601-785-8543",
            "contactType": "Customer Support"
          }
        }
      `}
      </script>
    </Helmet>
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}
const query = graphql`
  {
    site {
      siteMetadata {
        defaultDescription: description
        title
        url
        twitterUsername
        titleTemplate
        image
      }
    }
  }
`
