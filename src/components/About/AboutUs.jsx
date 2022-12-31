import React from 'react'
import styled from 'styled-components'
import { AiOutlineDeploymentUnit, AiOutlineRead } from 'react-icons/ai'

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="section-title about-us-title">Our Story</h1>
        <div className="row">
          <div className="col-lg-7">
            <div className="about-card">
              <AiOutlineRead className="icon" />
              <h3>Humble Beginnings</h3>
              <p>
                It started with a simple question: how can one raise money for
                charity, without actually donating money?
              </p>
              <p>
                The first idea was a free text-based course website that donates
                the majority if it's revenue to charity (hint:{' '}
                <a
                  href="https://openmastery.one"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open Mastery
                </a>
                ), and soon after, an even simpler idea appeared. How about an
                incredibly simple site for writers to promote their favourite
                educational resources?
              </p>
              <p>
                Revista(ucation) was born from that idea. Completely open
                source, Revista is a platform for passionate people to share
                knowledge.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-card">
              <AiOutlineDeploymentUnit className="icon" />
              <h3>Easier Access to Learning</h3>
              <p>
                Teaching is rewarding, and the world always needs more teachers.
                What if you want to teach yourself, and you're overwhelmed by
                the available options?
              </p>
              <p>
                Revista seeks to demystify free education by finding the best
                free educational resources for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 5rem 0;

  .about-us-title {
    margin-bottom: 4rem;
    font-size: 180%;
  }

  .about-card {
    background-color: #fafafa;
    padding: 40px;
    border-radius: 5px;
    min-height: 464px;
  }

  .icon {
    width: 90px;
    height: auto;
    background-color: var(--card-icon-bg);
    padding: 1rem;
    border-radius: 0.8rem;
    margin-bottom: 1rem;
    box-shadow: 0 7px 25px #b6eaffb4;
  }

  @media screen and (max-width: 767px) {
    .about-card {
      margin-bottom: 1rem;
    }
  }
`

export default AboutUs
