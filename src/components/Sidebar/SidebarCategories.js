import React from 'react'
import styled from 'styled-components'
import CategoriesDistinct from '../CategoriesDistinct'
import Title from './Title'
import SidebarCard from './SidebarCard'

import './sidebar-styles.scss'

const SidebarCategories = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <Title title="categories"></Title>
        <CategoriesDistinct />
      </Wrapper>
    </SidebarCard>
  )
}
const Wrapper = styled.div`


  .category {
    font-size: 1rem;
    color: var(--grey-5);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 3rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
    cursor: pointer;
    position: relative;

    &::after {
      content: '»';
      font-size: 22px;
      color: var(--grey-5);
      position: absolute;
      opacity: 0;
      top: 1px;
      right: -10px;
      transition: 0.5s;
    }
  }
  .category:hover {
    /* background: var(--primary-5); */
    padding-right: 24px;
    padding-left: 3.3rem;

    &::after {
      opacity: 1;
      right: 10px;
    }
  }

  @media screen and (max-width: 1263px) {
    .category {

    padding: 0.5rem 0 0.5rem 2rem;

    }

    .category:hover {
      padding-left: 1.3rem;
    }
  }

  @media screen and (max-width: 1015px) {
    .category {

    padding: 0.5rem 0 0.5rem 2rem;

    }

    .category:hover {
      padding-left: .8rem;
    }
  }

  @media screen and (max-width: 991px) {
    .category {
    font-size: 1rem;
    color: var(--grey-5);
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 0;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
    cursor: pointer;
    position: relative;
    text-align: center;

    &::after {
      content: '';
    }
  }
  .category:hover, .category:active {
    padding-right: unset;
    padding-left: unset;
    color: var(--grey-8);

    &::after {
      
    }
  }

  }

`
export default SidebarCategories
