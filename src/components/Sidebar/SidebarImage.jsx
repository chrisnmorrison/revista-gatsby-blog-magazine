import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

// Might be able to use this component to display ads on the sidebar.

const SidebarImage = () => {
  return (
    <StyledSidebarImage>
      <Link className="sidebar-img-container" to="/about">
        <StaticImage
          src="../../assets/bookstack.jpg"
          layout="constrained"
          alt="author"
          width="400"
          className="img sidebar-img"
        />
        <button className="btn-center-img btn btn-outline-primary">
          About Us
        </button>
      </Link>
    </StyledSidebarImage>
  )
}

const StyledSidebarImage = styled.div`
  position: relative;

  .btn-center-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .sidebar-img {
    border-radius: 5px;
    overflow: hidden;
  }

  .sidebar-img-container:hover .btn-center-img {
    opacity: 1;
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`

export default SidebarImage
