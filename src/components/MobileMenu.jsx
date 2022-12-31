import React from 'react'
import Links from '../constants/links'
import { Link } from 'gatsby'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <Wrapper>
      {' '}
      <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
        <button className="close-btn" onClick={toggle}>
          <IoMdClose />
        </button>
        <div className="sidebar-container">
          <Links styleClass="sidebar-links"></Links>
          <Link
            className="support-us-link not-blue"
            target="_blank"
            rel="noreferrer noopener"
            to="/support-us"

            // to="https://www.buymeacoffee.com/chrismorrison"
          >
            Support Us
          </Link>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;

  .bmc-sm {
    width: 220px;
    height: auto;
  }

  .bmc-link {
    display: block;
    margin: 3rem auto 0;
    text-align: center;
  }

  .support-us-link {
    font-size: 2rem;
    display: block;
    color: var(--grey-10);
    font-weight: 700;
  }
`

export default MobileMenu
