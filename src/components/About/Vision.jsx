import React from 'react'
import styled from 'styled-components'

const Vision = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col grid">
            <div className="grid-item grid-item-title">
              {' '}
              <div className="title">
                <h2>Committed to Free Education</h2>
              </div>
            </div>

            <div className="grid-item grid-item-right grid-item-vision ">
              {' '}
              <div className="vision container">
                <h3>Vision</h3>
                <p>
                  Sharing information has never been so easy and accessible. We
                  envision a world where both paid education and free
                  educational resources online are equally as valuable.
                </p>
                <p>
                  Quite simply, Revista is our way of making free education easy
                  to find. Our articles link to a ton of free resources on a
                  growing number of topics. These are perfect for students
                  looking for free supplemental material, or anyone with a
                  lifelong passion for learning!
                </p>
              </div>
            </div>

            <div className="grid-item grid-item-right grid-item-mission">
              {' '}
              <div className="mission container">
                <h3>Mission</h3>
                <p>
                  We value free online learning, and we want everyone to share
                  our values. Free learning allows everyone to educate
                  themselves, to improve their decision making ability, and
                  empowers many to seek knowledge that may have been harder to
                  access in the past.
                </p>
                <p>
                  We're showing the world that free online learning is a good
                  thing, and we're facilitating lifelong learners to empower
                  themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .col {
    display: grid;
    width: 100%;
    min-height: 450px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title vision'
      'title mission';
    border-right: 1px solid var(--border-color-light);
    border-top: 1px solid var(--border-color-light);
    border-bottom: 1px solid var(--border-color-light);
    padding: 0;
    margin-bottom: 5rem;
  }

  .grid-item-right {
    border-left: 1px solid var(--border-color-light);
  }

  .grid-item-title {
    grid-area: title;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .grid-item-vision {
    grid-area: vision;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
    border-bottom: 1px solid var(--border-color-light);
  }

  .grid-item-mission {
    grid-area: mission;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .grid-item {
    padding: 2.5rem;
  }

  .vision {
  }

  .mission {
  }

  @media screen and (max-width: 767px) {
    text-align: center;

    .col {
      display: grid;
      width: 100%;
      min-height: 450px;
      grid-template-rows: 0.5fr 1fr 1fr;
      grid-template-columns: 1fr;
      grid-template-areas:
        'title'
        'vision'
        'mission';
      padding: 0;
      margin-bottom: 2rem;
    }
    .grid-item-right,
    .col,
    .grid-item-vision {
      border: none;
    }
    .grid-item {
      padding: 0;
    }

    h3 {
      position: relative;
      display: inline-block;
    }

    .vision h3::after {
      position: absolute;
      content: '';
      background-color: #ffe7b8;
      width: 109%;
      height: 6px;
      left: 0;
      bottom: 4px;
      z-index: -1;
    }

    .mission h3::after {
      position: absolute;
      content: '';
      background-color: #b8faff;
      width: 109%;
      height: 6px;
      left: 0;
      bottom: 4px;
      z-index: -1;
    }
  }
`

export default Vision
