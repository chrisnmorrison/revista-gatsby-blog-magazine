import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { getColor } from './heroCategories'
import { StaticImage } from 'gatsby-plugin-image'

const query = graphql`
  query AllCategories {
    allMdx(sort: { frontmatter: { category: ASC } }) {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`

const AllCategories = () => {
  const data = useStaticQuery(query)

  const {
    allMdx: { distinct: allCategories },
  } = data

  return (
    <Wrapper>
      <div className="container categories-page ">
        <div className="row">
          <div className="col-md-6">
            <h1 className="section-title categories-title">All Categories</h1>
            <div className="categories-list col-12 ">
              {allCategories.map((category, index) => {
                const color = getColor(category)
                return (
                  <>
                    <Link
                      className="item not-blue"
                      key={index}
                      to={`/${category.toLowerCase()}`}
                    >
                      <div
                        className="category-color"
                        style={{ backgroundColor: color }}
                      ></div>
                      <div className="category">{category}</div>
                    </Link>
                  </>
                )
              })}
            </div>
          </div>{' '}
          <div className="col-12 col-md-6 all-categories-img">
            <StaticImage
              src="../../assets/undraw_choice.svg"
              alt="Open Source Illustration"
              layout="constrained"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .categories-page {
    margin-top: 5rem;
    margin-bottom: 5rem;

    h1 {
      margin-bottom: 4rem;
      font-size: 180%;
    }
  }

  .item {
    display: flex;
    align-items: center;
    font-size: 120%;
  }

  .category {
    margin: 1rem 1rem;
    display: flex;
    align-items: center;
  }
  .category-color {
    width: 30px;
    height: 30px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    padding: 10px;
  }

  .all-categories-img {
    align-self: center;
    padding: 5rem;
  }

  @media screen and (max-width: 767px) {
    .item {
      margin-bottom: 1rem;
      width: 50%;
      display: inline-flex;
    }
  }
`

export default AllCategories
