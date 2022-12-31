import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'

const allCategoriesquery = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`

//returns popular categories - i.e. for sorting categories by popularity
const CategoriesPopular = () => {

  const {
    allMdx: { nodes: popular },
  } = useStaticQuery(allCategoriesquery)

  const categories = {}

  popular.forEach(single => {
    single.content.tags.forEach(category => {
      if (categories[category]) {
        categories[category] = categories[category] + 1
      } else {
        categories[category] = 1
      }
    })
  })


  return (
    <ul className="categories">
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default CategoriesPopular
