import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { getColor } from '../utils/heroCategories'
import slugify from 'slugify'
import './features-styles.scss'

const query = graphql`
  query Top {
    allMdx(
      limit: 1
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { topPick: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
          category
        }
        id

        excerpt(pruneLength: 60)
        fields {
          timeToRead {
            words
          }
        }
      }
    }
  }
`

const Top = () => {
  const data = useStaticQuery(query)

  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <div className="col-md-4 col-12">
      <h2 className="section-title">Top Article</h2>

      {posts.map(post => {
        const { title, category, date, image } = post.frontmatter

        return (
          <article key={post.id} className="card card-bg card-shadow">
            <Link
              to={`/${category.toLowerCase()}/${slugify(title, {
                lower: true,
              })}`}
            >
              <GatsbyImage
                image={getImage(image)}
                alt={title}
                className="img"
              />
              {/* <img className='top-and-popular-img' src={imageSource} alt={title} /> */}
            </Link>

            <div className="card-body">
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
                        <div className="category-text-color">{category}</div>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <Link
                to={`/${category.toLowerCase()}/${slugify(title, {
                  lower: true,
                })}`}
              >
                <p className="excerpt">{post.excerpt}</p>
              </Link>
              <a
                className="btn btn-outline-primary"
                href={`/${category.toLowerCase()}/${slugify(title, {
                  lower: true,
                })}`}
              >
                Read More
              </a>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Top
