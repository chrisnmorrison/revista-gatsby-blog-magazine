import * as React from "react";
import styled from 'styled-components'

import { navigate } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };


  render() {
    return (
      <Wrapper>
        <div>
          <section className="get-in-touch">
            <h1 className="title">Get in touch</h1>
            <p className="note subtitle">
              Have a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
            <div className="column  is-two-thirds">
              {this.state.feedbackMsg && <p>{this.state.feedbackMsg}</p>}
            </div>
            <form
                name="contact"
                className="contact-form-styles contact-row"
                method="post"
                action="/success"
                // Uncomment below line for Netlify Forms to work!
                // data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  {/* <label className="label" htmlFor={"name"}>
                    Your name
                  </label> */}
                  <div className="form-field col x-50">
                    <input
                      className="input-text js-input"
                      type={"text"}
                      name={"name"}
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="field">
                  {/* <label className="label" htmlFor={"email"}>
                    Email
                  </label> */}
                  <div className="form-field col x-50">
                    <input
                      className="input-text js-input"
                      type={"email"}
                      name={"email"}
                      onChange={this.handleChange}
                      id={"email"}
                      required={true}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  {/* <label className="label" htmlFor={"message"}>
                    Message
                  </label> */}
                  <div className="form-field col x-100">
                    <textarea
                      className="input-text js-input"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                      placeholder="Message"
                    />
                  </div>
                </div>
                <div className="form-field submit col x-100 align-center">
                  <button className="btn btn-outline-primary contact-btn" type="submit">
                    Send
                  </button>
                </div>
              </form>
            <p className="note">
              Powered by{' '}
              <a
                className="link"
                href="https://www.netlify.com/products/forms/"
                target="_blank"
              >
                Netlify Forms
              </a>
              .{' '}
            </p>
            {/* Not necessary, feel free to delete. Especially if not using Static Forms */}
            {/* <p className="note">
              The information you submit in this form <u>is not stored</u>, per{' '}
              <a
                href="https://www.staticforms.xyz/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Static Form's Privacy Policy
              </a>
              . It is directly forwarded to our email.
            </p> */}
          </section>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .align-center {
    text-align: center;
  }

  .subtitle {
    padding: 1.5rem 0 2.5rem;
  }

  input:focus label {
    color: transparent;
  }

  .notification p {
    line-height: 0;
    margin-bottom: 0;
  }

  // Grid
  .contact-row {
    margin: -20px 0;
    .col {
      padding: 0 20px;
      float: left;
      box-sizing: border-box;
      &.x-50 {
        width: 50%;
      }
      &.x-100 {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .contact-row .col.x-50 {
      width: 100%;
    }
  }

  @media only screen and (max-width: 398px) {
    .contact-row {
      padding: 0 5vw;
      display: block;
    }
  }

  .content-wrapper {
    min-height: 100%;
    position: relative;
  }

  .get-in-touch {
    max-width: 650px;
    margin: 5rem auto;
    position: relative;
    display: block;
    font-family: var(--ff-primary), sans-serif;

    .title {
      text-align: center;
      font-family: var(--ff-primary), sans-serif;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 36px;
      line-height: 48px;
      /* padding-bottom: 48px; */
    }
  }

  .contact-form-styles {
    .form-field {
      position: relative;
      margin: 32px 0;
    }
    .input-text {
      display: block;
      width: 100%;
      height: 36px;
      border-width: 0 0 2px 0;
      border-radius: 0px;
      border-color: var(--primary-6);
      font-family: var(--ff-primary), sans-serif;
      font-size: 18px;
      line-height: 26px;
      font-weight: 400;
      background-color: transparent;

      &:focus {
        outline: none;
      }

      &:focus,
      &.not-empty {
        + .label {
          transform: translateY(-24px);
        }
      }
    }
    .label {
      position: absolute;
      left: 20px;
      bottom: 11px;
      font-size: 18px;
      line-height: 26px;
      font-weight: 400;
      color: #7e7e7e;
      cursor: text;
      transition: transform 0.2s ease-in-out;
    }
  }

  .note {
    width: 100%;
    text-align: center;
    line-height: 21px;
    font-size: 1.125em;
  }

  @media only screen and (max-width: 690px) {
    .note {
      padding: 0 5vw;
    }

    .subtitle {
      margin: 1rem auto 1.3rem;
    }
  }

  .contact-btn {
    padding: 1rem 2rem;
  }
  @media only screen and (max-width: 767px) {
    .submit {
      margin-bottom: 3rem !important;
    }
  }

  .is-hidden {
    display: none !important;
  }

  .is-danger {
    background-color: #f14668;
    border-color: transparent;

    p {
      color: #fff !important;
    }
  }

  .is-primary {
    background-color: #48c78e;
    border-color: transparent;

    p {
      color: #fff !important;
    }
  }

  .notification {
    padding: 1.5rem 2rem;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`
