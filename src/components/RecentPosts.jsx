import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { Link } from 'gatsby'
import SidebarWide from './Sidebar/indexWide'
import { getColor } from './utils/heroCategories'
import slugify from 'slugify'
import '../components/featured/features-styles.scss'

const RecentPosts = () => {
  const data = useStaticQuery(query)

  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-8 col-12">
          <h2 className="section-title">Recent Articles</h2>

          {posts.map(post => {
            const { title, category, date, slug, image } = post.frontmatter

            return (
              <article
                key={post.id}
                className="card card-bg card-shadow recent-article-mb"
              >
                <Link
                  to={`/${category.toLowerCase()}/${
                    slug || slugify(title, { lower: true })
                  }`}
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
                    to={`/${category.toLowerCase()}/${
                      slug || slugify(title, { lower: true })
                    }`}
                  >
                    <h3 className="recent-articles-heading">{title}</h3>
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
                            <div className="category-text-color">
                              {category}
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <Link
                    to={`/${category.toLowerCase()}/${
                      slug || slugify(title, { lower: true })
                    }`}
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
        <SidebarWide />
      </div>
    </section>
  )
}

export const query = graphql`
  query RecentPosts {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          category
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
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

export default RecentPosts
