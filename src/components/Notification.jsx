import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Notification = () => {
  return (
    <NotificationStyles>
      <div className="notification-top-bar">
        <p>Revista is looking for contributors!</p>
        <Link to="/support-us">Support Us</Link>
      </div>
    </NotificationStyles>
  )
}

export const NotificationStyles = styled.div`
  border-bottom: 1px solid var(--primary-1);
  padding: 5rem 0;
  margin-bottom: 5rem;

  .notification-top-bar {
    box-shadow: 0 0 34px var(--primary-6);
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: linear-gradient(
      90deg,
      var(--primary-5) 0%,
      var(--primary-6) 100%
    );
    text-align: center;
    color: #ffffff;
    font-family: sans-serif;
    font-weight: lighter;
    font-size: 14px;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px;
  }
  .notification-top-bar p {
    padding: 0;
    margin: 0;
    color: #ffffff;
    display: inline;
    font-size: 130%;
  }
  .notification-top-bar a {
    padding: 5px 12px;
    border-radius: 3px;
    background: #fff;
    color: var(--primary-7);
    font-weight: 500;
    text-decoration: none;
    margin-left: 1rem;
    font-size: 130%;
    font-weight: 500;
    transition: all 0.2s linear;

    &:hover {
      background-color: #f4f4f4;
      color: var(--primary-8);
    }
  }

  @media screen and (max-width: 815px) {
    .notification-top-bar {
      height: 100%;
      line-height: 40px;
      padding: 1rem;
    }
    .notification-top-bar p {
      display: block;
    }

    .notification-top-bar a {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 979px) {
    .notification-top-bar {
      width: 90vw;
    }
  }

  @media screen and (max-width: 351px) {
    .notification-top-bar p {
      font-size: 120%;
    }
  }

  @media screen and (max-width: 335px) {
    .notification-top-bar {
      padding: 1rem 0;
    }
  }
`

export default Notification
