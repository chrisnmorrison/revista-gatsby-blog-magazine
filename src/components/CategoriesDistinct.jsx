import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import slugify from 'slugify'

const distinctCategoriesquery = graphql`
  query CategoriesDistinct {
    allMdx {
      distinct(field: { frontmatter: { category: SELECT } })
    }
  }
`

//returns distinct categories - i.e. for "all categories list"
const CategoriesDistinct = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(distinctCategoriesquery)
  return (
    <ul className="categories">
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link
              to={`/${slugify(category).toLowerCase()}`}
              className="category"
            >
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoriesDistinct
