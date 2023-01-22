import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import styled from 'styled-components'
import Bmc from '../assets/bmc-logo-no-background.png'
import Github from '../assets/github.png'
import SocialMedia from '../assets/social-media.png'

const Support = () => {
  return (
    <Layout>
      <Wrapper>
        <Seo
          title="Support Us | Revista"
          description="There are several ways you can support Revista"
        />
        <div className="container support-container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-title categories-title">Support Us</h1>
          
              <p>
                We are also an{' '}
                <a
                  href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  open-source blog template
                </a>
                , and if you're interested in an out-of-the-box Markdown
                blog/magazine starter, fork our repo and modify to fit your
                uses!
              </p>
              <p>There are a few ways you can support us:</p>

              {/* Item */}
              <div className="support-item">
                <div>
                  <a
                    className="support-link"
                    href="https://www.buymeacoffee.com/chrismorrison"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Bmc}
                      alt="buy me a coffee logo"
                      className="support-img"
                    />
                  </a>
                </div>
                <div>
                  <h2 className="support-title">Buy Me a Coffee</h2>
                  <p>
                    Support Revista's founder and primary maintainer. Part of
                    your donations go to maintaining Revista, as well as the
                    other education promoting services that Chris created, like{' '}
                    <a
                      href="https://openmastery.one"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Mastery
                    </a>
                    .
                  </p>
                  <a
                    className="support-link"
                    href="https://www.buymeacoffee.com/chrismorrison"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Me a Coffee
                  </a>
                </div>
              </div>
              {/* Item */}
              <div className="support-item">
                <div>
                  <a
                    className="support-link"
                    href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Github}
                      alt="github logo"
                      className="support-img"
                    />
                  </a>
                </div>
                <div>
                  <h2 className="support-title">Improve & Enhance our Code</h2>
                  <p>
                    Revista is an open-source blog/magazine template, and is
                    ready for you to add your articles! If you'd like to help us
                    improve, feel free to open an issue, or check out the
                    currently open issues on Github. We use Markdown, GraphQL,
                    Gatsby, and React, so if you know any of those, it's easy to
                    contribute!
                  </p>
                  <p>
                    Don't forget to{' '}
                    <a href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine">
                      star me on Github
                    </a>
                    !
                  </p>
                  <a
                    className="support-link"
                    href="https://github.com/chrisnmorrison/revista-gatsby-blog-magazine/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find out how to contribute
                  </a>
                </div>
              </div>
              {/* Item */}
              <div className="support-item">
                <div>
                  <img
                    src={SocialMedia}
                    alt="various social media icons"
                    className="support-img"
                  />
                </div>
                <div>
                  <h2 className="support-title">Share us with the world</h2>
                  <p>
                    Who doesn't like free stuff? If you like our work, share
                    our articles with your friends, family, on Reddit, or
                    anywhere else. This is the easiest way to support us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blockquote-wrapper">
          <div className="blockquote">
            <h3>
              Revista will remain free forever. Thank you to all of our
              supporters and maintainers!
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              Best of all, Revista is completely open source! Anyone can
              contribute, or if you have grander ideas, clone our project and
              create your own dream project. Let's build off of each other to
              create amazing, meaningful online services.
            </h3>
            <h4>
              &mdash; <strong>Chris Morrison</strong>
              <br aria-hidden="true" />
              <em>
                Creator of Revista &amp; owner of <br aria-hidden="true" />
                <a
                  href="https://mesmerdesign.ca"
                  className="support-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mesmer Design
                </a>
              </em>
            </h4>
          </div>
        </div>
      </Wrapper>{' '}
    </Layout>
  )
}

const Wrapper = styled.section`
  .section-title {
    font-size: 180%;
  }

  .support-container {
    margin: 5rem auto;
  }

  .support-title {
    font-size: 18px;
  }

  .support-item {
    margin: 3rem auto;
    display: flex;
    align-items: center;

    p {
      margin-bottom: 0.5rem;
    }
  }

  .support-link {
    color: var(--primary-7);
    font-size: 110%;
    font-weight: 500;
    transition: color 0.1s ease-in-out;

    &:hover {
      color: var(--primary-8);
    }
  }

  .support-img {
    width: 3rem;
    height: auto;
    margin-right: 3rem;
    display: block;
  }

  /* increase header size after 600px */
  @media all and (max-width: 600px) {
    .blockquote-wrapper,
    .section-title {
      text-align: left;
    }

    .support-item {
      flex-direction: column;
      text-align: center;
    }

    .support-img {
      margin: 0 0 0.8rem 0;
    }
  }

  /* center the blockquote in the page */
  .blockquote-wrapper {
    display: flex;
    padding: 0 20px;
    background-color: #292a2b;
  }

  /* Blockquote main style */
  .blockquote {
    position: relative;
    font-family: 'Barlow Condensed', sans-serif;
    max-width: 620px;
    margin: 80px auto;
    align-self: center;
  }

  .blockquote,
  h3,
  h4 {
    text-transform: none !important;
  }

  /* Blockquote header */
  .blockquote h3 {
    font-family: 'Montserrat', sans-serif;
    position: relative; /* for pseudos */
    color: var(--primary-6);
    font-size: 1rem;
    font-weight: normal;
    line-height: 1;
    margin: 0;
    border: 2px solid #fff;
    border: solid 2px;
    border-radius: 20px;
    padding: 25px;
  }

  /* Blockquote right double quotes */
  .blockquote h3:after {
    content: '';
    position: absolute;
    border: 2px solid var(--primary-6);
    border-radius: 0 50px 0 0;
    width: 60px;
    height: 60px;
    bottom: -60px;
    left: 50px;
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }

  .blockquote h3:before {
    content: '';
    position: absolute;
    width: 80px;
    border: 6px solid #292a2b;
    bottom: -3px;
    left: 50px;
    z-index: 2;
  }

  /* increase header size after 600px */
  @media all and (min-width: 600px) {
    .blockquote h3 {
      font-size: 1.4rem;
      line-height: 1.2;
    }
  }

  /* Blockquote subheader */
  .blockquote h4 {
    position: relative;
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    padding-top: 15px;
    z-index: 1;
    margin-left: 150px;
    padding-left: 12px;
  }

  .blockquote h4:first-letter {
    margin-left: -12px;
  }

  @media screen and (max-width: 800px) {
    .support-link {
      color: var(--primary-7);
      font-size: 140%;
      font-weight: 500;
      transition: color 0.1s ease-in-out;
    }
  }
`

export default Support
