import React from 'react'
import styled from 'styled-components'

const SidebarCard = ( props) => {
  return <SidebarCardStyles>{props.children}</SidebarCardStyles>
}

const SidebarCardStyles = styled.div`
margin-bottom: 1.875rem;
padding: 1.5rem .9rem;
border-radius: 5px;
border-top: 6px solid var(--primary-5);
background-color: white;
box-shadow: 0 15px 25px rgba(30, 30, 30, 0.06);
`

export default SidebarCard
