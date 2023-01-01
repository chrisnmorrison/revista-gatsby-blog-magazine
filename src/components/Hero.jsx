import React from 'react'
import styled from 'styled-components'
// import { StaticImage } from 'gatsby-plugin-image'
// import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import slugify from 'slugify'
import { categories } from './utils/heroCategories'

// export const query = graphql`
//   {
//     allMdx {
//       distinct(field: frontmatter___category)
//     }
//   }
//   `

const Hero = () => {
  // const {
  //   allMdx: {distinct},
  // } = useStaticQuery(query);

  return (
    <HeroStyles>
      <div className="hero">
        <div className="row">
          <div className="col-lg-7 col-12 hero-text">
            <h4>Learning Paths and Curated Lists</h4>
            <h1>
              <span>Free/Open</span>
              <br /> Education Resources
            </h1>
            <p>What are you interested in learning?</p>
          </div>
          <div className="col-lg-5 col-12">
            <div className="hero-categories">
              {categories.map((category, index, arr) => {
                //check if last element. If it is, custom link for "All Categories"
                if (arr.length - 1 === index) {
                  const categoryStyles = {
                    boxShadow: `0 0 40px`,
                    backgroundColor: category.color,
                    color: category.color,
                  }

                  return (
                    <Link
                      style={categoryStyles}
                      className="hero-category"
                      key={index}
                      to={`/categories`}
                    >
                      <div className="overlay">
                        <div className="category-text-color">
                          {category.category}
                        </div>
                      </div>
                    </Link>
                  )
                } else {
                  const categoryStyles = {
                    boxShadow: `0 0 40px`,
                    backgroundColor: category.color,
                    color: category.color,
                  }

                  return (
                    <Link
                      style={categoryStyles}
                      className="hero-category"
                      key={index}
                      to={`/${slugify(category.category).toLowerCase()}`}
                    >
                      <div className="overlay">
                        <div className="category-text-color">
                          {category.category}
                        </div>
                      </div>
                    </Link>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </HeroStyles>
  )
}

export const HeroStyles = styled.header`
  border-bottom: 1px solid var(--primary-1);

  .hero {
    display: flex;
    padding: 6rem 0;
    align-items: center;
    justify-content: center;
    max-width: 83vw;
    margin: 0 auto;
  }

  @media only screen and (min-width: 1600px) {
    .hero {
      max-width: 75vw;
    }
  }

  .row {
    align-items: center;
  }

  .hero-text {
    padding-right: 3rem;
  }

  .hero h1 {
    line-height: 5rem;
  }

  .hero h1 span {
    display: inline-block;
    position: relative;
    font-size: 110%;
  }

  .hero h1 span::after {
    position: absolute;
    content: '';
    background-color: #ace7ff;
    width: 100%;
    height: 15px;
    left: 0;
    bottom: 11px;
    z-index: -1;
  }

  .hero h4 {
    color: var(--grey-8);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    font-size: 17px;
  }

  .hero p {
    font-size: 20px;
  }

  .hero-categories {
    /* flex-wrap: wrap; */
  }

  .category-text-color {
    color: var(--grey-6);
  }

  .hero-category {
    /* background-color: #b8ffec; */
    padding: 0rem 2rem;
    line-height: 60px;
    margin: 25px 25px 0 0;
    border-radius: 10px;
    color: #3a3838;
    min-width: 80px;
    display: inline-block;
    transition: all 0.1s linear;

    &:hover {
      filter: brightness(103%);
      transition: all 0.1s linear;
    }

    /* box-shadow: 0 0 25px black; */
  }

  .hero-category:hover > .overlay {
    width: 100%;
    height: 100%;
    opacity: 0.95;
    transition-duration: 0.2s;
  }

  @media only screen and (max-width: 460px) {
    .hero-categories {
      text-align: center;
    }
  }

  @media only screen and (max-width: 1147px) {
    .hero-category {
      font-size: 90%;
    }
  }
  @media only screen and (max-width: 1092px) {
    .hero-category {
      padding: 0 1.2rem;
    }
  }
  @media only screen and (max-width: 991px) {
    .hero-categories {
      text-align: center;
    }
  }

  @media only screen and (max-width: 502px) {
    .hero-category,
    h4,
    h1,
    p {
      text-align: center;
    }

    .hero-text {
      padding: 0;
    }
  }

  @media only screen and (max-width: 358px) {
    h1 {
      font-size: 2.6rem;
    }
  }
`

export default Hero
