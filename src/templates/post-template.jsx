import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { getColor } from '../components/utils/heroCategories'
import '../components/featured/features-styles.scss'
import Seo from '../components/SEO'
// import slugify from 'slugify'

// import { Helmet } from 'react-helmet'

const PostTemplate = ({ data, children }) => {
  const {
    mdx: {
      // fields:{
      //   timeToRead:{
      //     words,
      //   }
      // },
      frontmatter: {
        title,
        category,
        image,
        date,
        embeddedImages,
        imageAttribution,
      },
      body,
      excerpt,
    },
  } = data
  // {console.log(words)}
  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      {/* <Helmet>
      <link rel='canonical' href={`https://opened.one/${category.toLowerCase()}/${slugify(title, { lower: true })}`}/>
      </Helmet> */}
      <Wrapper>
        <section className="container">
          <div className="row">
            <div className="col-2 display-none-on-sm-screen"></div>
            <div className="col-xl-7 col-12">
              <article className="article-content">
                <h2>{title}</h2>{' '}
                <GatsbyImage
                  image={getImage(image)}
                  alt={title}
                  className="main-img"
                />
                <div className="post-info">
                  <ul className="card-meta list-inline">
                    <li className="list-inline-item">
                      <AiOutlineClockCircle />
                      {Math.ceil(123 / 275)} Min Read
                    </li>
                    <li className="list-inline-item">
                      <GoCalendar /> {date}
                    </li>
                    <li className="list-inline-item">
                      {imageAttribution ? (
                        <div className="image-attribution">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={imageAttribution}
                          >
                            Image Source
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                    </li>
                    <li className="list-inline-item">
                      <ul className="card-meta-tag list-inline">
                        <li className="list-inline-item">
                          <Link
                            to={`/${category.toLowerCase()}`}
                            className="category-link"
                            style={{
                              color: getColor(category),
                              backgroundColor: getColor(category),
                            }}
                          >
                            <div className="category-text-color">
                              {category}
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="article-body">
                  {/* <MDXRenderer embeddedImages={embeddedImages}>
                    {body}
                  </MDXRenderer> */}
                  <MDXProvider>{children}</MDXProvider>
                </div>
              </article>
            </div>
            <Sidebar />
          </div>
        </section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($title: String) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        imageAttribution
        category
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
      body
      excerpt(pruneLength: 60)
      fields {
        timeToRead {
          words
        }
      }
    }
  }
`

const Wrapper = styled.section`
  margin: 4rem auto;

  article.article-content {
    margin-top: 3.4rem;
  }

  .display-none-on-sm-screen {
    display: none;
  }

  .article-body {
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2;
      margin: 2rem 0 1rem 0;
    }
  }

  @media (min-width: 991px) {
    .container {
      max-width: 90vw !important;
    }
  }

  .article-content {
    pre {
      width: 100%;
      padding: 1em;
      margin: 1rem 0 1rem 0;
      background: #2b2b2b;
      border-width: 1px;
      border-style: solid;
      color: #eee;
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }

    p {
      line-height: 26px;
    }

    p,
    ol,
    ul {
      margin-bottom: 1.25rem;
      color: var(--grey-8);
      font-weight: 400;
    }

    ol,
    ul {
      margin-left: 2rem;
    }

    ul {
      list-style-type: '- ';
    }

    p code {
      padding: 0.1em 0.25em;
      margin: 1rem 0 1rem 0;
      background: #2b2b2b;
      border-radius: 4px;
      color: #eee;
      white-space: pre-wrap;
      white-space: -moz-pre-wrap;
      white-space: -pre-wrap;
      white-space: -o-pre-wrap;
      word-wrap: break-word;
    }
  }

  .article-content a {
    color: #0070ff;
  }

  .article-content a:visited {
    color: #a61ea3;
  }

  .image-attribution {
    text-align: left;
    a,
    a:visited {
      color: var(--primary-8);
    }
  }

  span.gatsby-resp-image-wrapper + em {
    text-align: center;
    display: block;
  }
  .article-content h2 {
    margin: 0 0 2.25rem 0;
    font-weight: 400;
    text-align: left;
  }
  .post-info {
    padding: 2rem 0 0.5rem;
    margin-bottom: 2rem;
    text-align: center;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }

    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    ul {
      list-style-type: none !important;
      margin-left: unset;
      margin-bottom: unset;
      color: unset;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      /* width: 75%; */
      display: block;
      margin: 0 auto;
    }

    .article-content {
      margin-top: 3.4rem;
    }

    .display-none-on-sm-screen {
      display: block;
    }
  }
  @media (min-width: 1170px) {
    & {
      /* display: grid;
      grid-template-columns: 1fr 250px;
      column-gap: 4rem; */
    }
  }
`

export default PostTemplate
