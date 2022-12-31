import React from 'react'
import { Link } from 'gatsby'
const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/categories" className="page-link">
          Categories
        </Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Links
