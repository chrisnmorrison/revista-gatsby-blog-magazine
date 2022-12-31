import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import styled from 'styled-components'
const Success = () => {
  return (
    <Layout>
      <Styles className="success-page">
        <div className="page-center">
          <h2 className="received">Thank you for contacting us, we have received your submission! </h2>
          <Link to="/" className="btn btn-outline-primary">
            back home
          </Link>
        </div>
      </Styles>
    </Layout>
  )
}

const Styles = styled.section`
  .success-page {
    background: white;
  }

  .page-center {
    margin: 30vh auto;
    text-align: center;
  }
  .received {
    margin-bottom: 3.5rem !important;
  }

@media screen and (max-width: 980px){
    .page-center {
    margin: 10vh auto;
    text-align: center;
  }
}

@media screen and (max-width: 590px){
    .received {
    font-size: 1.5rem;
  }
}
`

export default Success
