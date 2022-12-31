import React from 'react'
import { Chrono } from 'react-chrono'
import styled from 'styled-components'
import { FcCalendar, FcMindMap, FcLike } from 'react-icons/fc'

// https://openbase.com/js/react-chrono

const TimelineComponent = () => {
  const items = [
    {
      title: 'In progress',
      cardTitle: 'Initial Set-up',
      url: 'https://github.com/opendotone/openeducation',
      cardSubtitle: 'Free and open-source forever',
      cardDetailedText:
        "Our mission is to create a free, open repository of educational resources. We'd love for you to help us! Take a look at " +
        'our Github repository for more information on how you can help. We currently accept donations to help us remain ' +
        " in operation (Buy Me a Coffee button on the Navbar), but you don't need to donate to help. Most importantly, your contributions help the world!",
      media: {
        type: 'IMAGE',
        source: {
          url: '../../assets/timeline/plan.png',
        },
      },
    },
    {
      title: 'Up Next',
      cardTitle: 'Promote our Mission',
      cardSubtitle: 'So our story (officially) begins...',
      cardDetailedText:
        'After planning and initial set-up, we will be ready to promote Revista to the world. We will always be looking ' +
        'for contributors!',
      media: {
        type: 'IMAGE',
        source: {
          url: '../../assets/timeline/plan.png',
        },
      },
    },
    {
      title: 'Planned',
      cardTitle: 'Roll out Fundraising Campaign',
      cardSubtitle:
        'We want to provide and promote education, while raising money for charity.',
      url: 'https://github.com/opendotone/openeducation',
      cardDetailedText:
        'We have an interesting plan. We will provide a free and open service forever, as our primary goal is helping others. ' +
        'As we grow, we will explore ways to generate revenue for Revista, BUT much of this revenue will be donated ' +
        "to charity! We are exploring the least intrusive way to implement this, as the last thing we want is to tarnish our service. This is a way for our users to 'give back', so to speak. More to come, and we highly encourage input on this.",
      media: {
        type: 'IMAGE',
        source: {
          url: '../../assets/timeline/plan.png',
        },
      },
    },
  ]

  return (
    <Wrapper>
      {' '}
      <div className="container timeline-component">
        <h2 className="text-center timeline-title">Our Plan</h2>
        <p className="text-center timeline-description">
          We have big plans, and we'd love for you to help us achieve our goals!
        </p>

        <div style={{ height: 'auto' }}>
          <Chrono
            items={items}
            hideControls={true}
            useReadMore={false}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: '#5d5d5d',
              secondary: 'transparent',
              titleColor: '#838383',
              titleColorActive: 'var(--primary-8)',
            }}
            scrollable={{ scrollbar: false }}
          >
            <div className="chrono-icons">
              <FcMindMap />
              <FcCalendar />
              <FcLike />
            </div>
          </Chrono>
        </div>
      </div>{' '}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 5rem;

  .timeline-description {
    margin: 1.2rem 0;
  }

  .card-media-wrapper {
    display: none;
  }

  .card-description {
    margin: 0;
  }

  .timeline-card-content {
    padding: 1rem;
  }

  .using-icon {
    padding: 0.8rem 0;
  }

  @media screen and (max-width: 767px) {
    .timeline-component {
      display: none;
    }
  }
`

export default TimelineComponent
