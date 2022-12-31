import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const NotFoundPage = () => (
  <Layout>
    <Styles404>
      <section className="error-page">
        <div className="page-center">
          <span>404</span>
          <h3>Oops, you broke us!</h3>
          <h3>The page you tried cannot be found.</h3>
          <Link to="/" className="btn btn-outline-primary btn-404">
            back home
          </Link>
        </div>
      </section>
    </Styles404>
  </Layout>
)

const Styles404 = styled.section`
  .error-page {
    background: white;
  }
  .error-page span {
    font-size: 10rem;
    color: var(--black);
  }
  .error-page h3 {
    margin-bottom: 2rem;
    padding: 0 2rem;
  }

  .btn-404{
    font-size: 150%;
  }
`

export default NotFoundPage
