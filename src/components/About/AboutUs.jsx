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
              Flannel fixie tilde gastropub actually. La croix everyday carry hot chicken shaman snackwave. Godard art party hexagon hot chicken franzen woke. 8-bit VHS hoodie heirloom, YOLO poutine scenester cloud bread kombucha next level truffaut mustache bruh polaroid kale chips. Small batch PBR&B trust fund ethical before they sold out. Master cleanse sustainable locavore vinyl prism squid single-origin coffee.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-card">
              <AiOutlineDeploymentUnit className="icon" />
              <h3>Access to Resources</h3>
              <p>
              Adaptogen skateboard schlitz viral edison bulb knausgaard shabby chic drinking vinegar semiotics cred occupy. Fit roof party ugh fanny pack ascot. Blog messenger bag you probably haven't heard of them distillery, vexillologist offal brunch leggings gentrify sustainable mumblecore pok pok polaroid pour-over big mood. 
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
