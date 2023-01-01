import React from 'react'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import slugify from 'slugify'
import './features-styles.scss'

const query = graphql`
  query Trending {
    allMdx(
      limit: 3
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { trending: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          title
          category
          date(formatString: "MMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                height: 100
                width: 100
              )
            }
          }
        }
        id

        fields {
          timeToRead {
            words
          }
        }
      }
    }
  }
`

const Trending = () => {
  const data = useStaticQuery(query)

  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <div className="col-md-4 col-12">
      <h2 className="section-title trending-title">Trending</h2>

      {posts.map(post => {
        const { title, category, date, image } = post.frontmatter

        return (
          <article
            key={post.id}
            className="card card-body card-bg card-shadow trending-card"
          >
            <Link
              to={`/${category.toLowerCase()}/${slugify(title, {
                lower: true,
              })}`}
            >
              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="trending-img"
              />
              {/* <img className='top-and-popular-img' src={imageSource} alt={title} /> */}
            </Link>

            <div className="trending-meta">
              <Link
                to={`/${category.toLowerCase()}/${slugify(title, {
                  lower: true,
                })}`}
              >
                <h3>{title}</h3>
              </Link>

              <ul className="card-meta list-inline">
                <li className="list-inline-item">
                  <AiOutlineClockCircle />
                  {Math.ceil(post.fields.timeToRead.words / 275)} Min Read
                </li>
                <li className="list-inline-item">
                  <GoCalendar /> {date}
                </li>
              </ul>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Trending
