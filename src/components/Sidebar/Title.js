import React from 'react'
import styled from 'styled-components'
import './sidebar-styles.scss'

const Title = ({ title }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <div className="line"></div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1.5rem;
  h4 {
    color: var(--grey-7);
    text-transform: uppercase;
    font-weight: 700;
    background: none;
    display: inline-block;
    margin-bottom: 0;
    padding: 0 0.6rem;
  }
  .line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1.5px;
    transform: translateY(-50%);
    background: var(--primary-5);
    z-index: -1;
  }
`
export default Title
