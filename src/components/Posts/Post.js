import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { getColor } from '../utils/heroCategories'
import Seo from '../SEO'
import slugify from 'slugify'
import '../featured/features-styles.scss'

const Post = ({ excerpt, frontmatter, fields }) => {
  const { title, image, date, category } = frontmatter
  const { words } = fields.timeToRead
  return (
    <Wrapper>
      <Seo title={title} description={excerpt} />
      <article className="card card-bg card-shadow category-card-margin">
        <Link
          to={`/${category.toLowerCase()}/${slugify(title, { lower: true })}`}
        >
          <GatsbyImage image={getImage(image)} alt={title} className="img" />
          {/* <img className='top-and-popular-img' src={imageSource} alt={title} /> */}
        </Link>

        <div className="card-body category-page-card">
          <Link
            to={`/${category.toLowerCase()}/${slugify(title, { lower: true })}`}
          >
            <h3>{title}</h3>
          </Link>

          <ul className="card-meta list-inline">
            <li className="list-inline-item">
              <AiOutlineClockCircle />
              {Math.ceil(words / 275)} Min Read
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
            className="excerpt-link"
            to={`/${category.toLowerCase()}/${slugify(title, { lower: true })}`}
          >
            <p className="excerpt">{excerpt}</p>
          </Link>

          <Link
            className="btn btn-outline-primary"
            to={`/${category.toLowerCase()}/${slugify(title, { lower: true })}`}
          >
            Read More
          </Link>
        </div>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 3rem;
  .info {
    text-align: center;
  }

  .excerpt-link {
    color: var(--grey-6);
  }

  .category-page-card {
    padding: 15px 25px 30px 25px;
  }

  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-grey-10);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: var(--clr-grey-5);
    line-height: 1.8;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: var(--clr-primary-5);
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: var(--clr-primary-8);
  }
  footer {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid var(--clr-grey-9);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--clr-grey-5);

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: var(--clr-primary-5);
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 50%;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
