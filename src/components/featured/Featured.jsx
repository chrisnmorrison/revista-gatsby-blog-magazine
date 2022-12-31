import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Trending from './Trending'
import Popular from './Popular'
import './features-styles.scss'

const Featured = () => {
  return (
    <FeaturedStyles>
      <div className="featured-section container">
        <div className="row">
          <Top />
          <Trending />
          <Popular />
        </div>
      </div>
    </FeaturedStyles>
  )
}

export const FeaturedStyles = styled.section`
border-bottom: 1px solid var(--primary-1);

  .featured-section {
    padding: 5rem 0;
  }

  @media screen and (max-width: 767px) {
    .featured-section{
      padding: 0 0 5rem 0;
    }
  }

  @media screen and (max-width: 576px) {
    .featured-section{
      padding: 0 15px 0 15px;
    }
  }
`

export default Featured
