import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'
import Links from '../constants/links'
import styled from 'styled-components'
import Heart from '../assets/heart.png'
import logo from '../assets/logo.png'
import { StaticImage } from 'gatsby-plugin-image'
// import { useStaticQuery, graphql } from 'gatsby'

const Navbar = ({ toggle }) => {
  // const { site } = useStaticQuery(query)
  // const { title } = site.siteMetadata
  return (
    <NavbarStyles>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="nav-logo not-blue">
              <img
                src={logo}
                alt="Open Mastery Logo"
                width="100"
                height="100"
              />
              <div className="logo-text">
                <span className="nav-word-open">Rev</span>
                <span className="nav-word-ed">ista</span>
              </div>
            </Link>

            <button
              className="toggle-btn"
              onClick={toggle}
              aria-label="Expand Menu"
            >
              <FaBars></FaBars>
            </button>
          </div>

          <Links styleClass="nav-links" />
          {/* <SocialLinks /> */}
          <Link
            className="support-us-link not-blue"
            target="_blank"
            rel="noreferrer noopener"
            to="/support-us"

            // to="https://www.buymeacoffee.com/chrismorrison"
          >
            {/* <GoHeart className='support-heart'/> */}
            <StaticImage
            class="support-heart"
                src="../assets/heart.png"
                alt="Open Source Illustration"
                layout="constrained"
                placeholder="blurred"
                width='19'
                height='19'
              />
            {/* <img src={Heart} alt="" class="support-heart" /> */}
            Support Us
          </Link>
        </div>
      </nav>
    </NavbarStyles>
  )
}

export const NavbarStyles = styled.div`
  /*
===============
Navbar
===============
*/
  .navbar {
    height: 5rem;
    display: flex;
    align-items: center;
    background: transparent;
    border-bottom: 1px solid #eaf2ff;
  }

  .bmc-lg {
    display: none;
  }

  .nav-word-ed {
    color: #11a3e1;
  }

  .nav-center {
    width: 90vw;
    max-width: 1400px;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-logo {
    display: block;
    height: 40px;
  }
  .nav-logo {
    display: flex;
    align-items: center;
    gap: 0.7rem;

    .logo-text {
      font-size: 1.3rem;
      letter-spacing: var(--spacing);
      font-weight: 500;
    }
  }

  .nav-logo img {
    height: auto;
    width: 43px;
  }
  .toggle-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--primary-6);
    cursor: pointer;
    transition: var(--transition);
  }
  .toggle-btn:hover {
    color: var(--primary-5);
  }
  .nav-links {
    display: none;
  }

  .support-us-link {
    display: none;
  }

  .page-link:hover {
    /* background: var(--primary-5); */
    color: var(--primary-8);
  }

  @media screen and (min-width: 980px) {
    .toggle-btn {
      display: none;
    }
    .support-us-link {
      display: flex;
      align-items: center;
      padding: 0.55rem 1rem;
      background-image: linear-gradient(120deg, #a6e3fd 0%, #79c3ff 100%);
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0 88%;
      transition: all 0.1s linear;
      border-radius: 5px;
      box-shadow: 0 0 15px var(--primary-4);

      .support-heart {
        width: 1.2rem;
        margin-right: 0.5rem;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      margin: 0 auto;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      column-gap: 2rem;
      align-items: center;
    }
  }

  @media screen and (min-width: 800px) {
    .bmc-lg {
      height: 40px;
      width: auto;
      display: block;
      border-radius: 8px;
    }

    .page-link {
      margin-right: 1rem;
    }
    .page-link {
      color: var(--black);
      font-weight: 400;
      letter-spacing: var(--spacing);
      font-size: 1rem;
      transition: var(--transition);
      font-family: var(--ff-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
    }
    .page-link:hover {
      /* background: var(--primary-5); */
      color: var(--primary-8);
    }
    .nav-icons {
      display: flex;
      justify-content: space-between;
    }
    .nav-icons .social-icon {
      font-size: 1.5rem;
      transition: var(--transition);
      margin-left: 0.5rem;
    }
    .nav-icons .social-icon:hover {
      color: var(--primary-5);
      transform: translateY(-5px);
    }
  }
`

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `

export default Navbar
