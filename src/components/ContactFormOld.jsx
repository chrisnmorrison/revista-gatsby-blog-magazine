// import React from 'react'
// import styled from 'styled-components'
// import { useState } from 'react';

// // Currently not using StaticForms, but saving this page in case changing later

// const ContactForm = () => {
//   const [contact, setContact] = useState({
//     name: '',
//     email: '',
//     subject: 'StaticForms - Contact Form',
//     honeypot: '', // if any value received in this field, form submission will be ignored.
//     message: '',
//     replyTo: '@', // this will set replyTo of email to email address entered in the form
//     accessKey: `${process.env.STATIC_FORMS_KEY}` // TODO: Get your key from here https://www.staticforms.xyz/

//   });

//   const [response, setResponse] = useState({
//     type: '',
//     message: ''
//   });

//   const handleChange = e =>
//     setContact({ ...contact, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     try {
//       const res = await fetch('https://api.staticforms.xyz/submit', {
//         method: 'POST',
//         body: JSON.stringify(contact),
//         headers: { 'Content-Type': 'application/json' }
//       });

//       const json = await res.json();

//       if (json.success) {
//         setResponse({
//           type: 'success',
//           message: 'Thank you, we\'ve received your message!'
//         });
//         setTimeout(function() {
//           window.location.reload(false);
//         }, 3000);
//       } else {
//         setResponse({
//           type: 'error',
//           message: json.message
//         });
//       }
//     } catch (e) {
//       console.log('An error occurred', e);
//       setResponse({
//         type: 'error',
//         message: 'An error occurred while submitting the form'
//       });
//     }
//   };


//   return (
//     <Wrapper>
//       <div>
//         <section className="get-in-touch">
//           <h1 className="title">Get in touch</h1>
//           <p className="note subtitle">Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
//           <div className='column  is-two-thirds'>
//               <div
//                 className={
//                   response.type === 'success'
//                     ? 'tile box notification is-primary'
//                     : 'is-hidden'
//                 }
//               >
//                 <p>{response.message}</p>
//               </div>
//               <div
//                 className={
//                   response.type === 'error'
//                     ? 'tile box notification is-danger'
//                     : 'is-hidden'
//                 }
//               >
//                 <p>{response.message}</p>
//               </div>
//               <div
//                 className={response.message !== '' ? 'is-hidden' : 'columns'}
//               ></div>
//               </div>
//           <form className="contact-form-styles contact-row" action="https://api.staticforms.xyz/submit" method="post" onSubmit={handleSubmit}>
//             <div className="form-field col x-50">
//               <input
//                 id="name"
//                 name="name"
//                 className="input-text js-input"
//                 type="text"
//                 required
//                 onChange={handleChange}
//                 placeholder="Name"
//               />
            
//             </div>
//             <div className="form-field col x-50">
//               <input
//                 id="email"
//                 name="email"
//                 className="input-text js-input"
//                 type="email"
//                 required
//                 onChange={handleChange}
//                 placeholder='Email'
//               />
             
//             </div>
//             <div className="form-field col x-100">
//               <input
//                 id="message"
//                 name="message"
//                 className="input-text js-input"
//                 type="text"
//                 required
//                 onChange={handleChange}
//                 placeholder="Message"
//               />
              
//             </div>
//             <input type="text" name="honeypot" style={{display: "none"}}/>
//             <div className="form-field submit col x-100 align-center">
//               {/* You need to set this up to go somewhere :) */}
//               <button
//                 to='/success'
//                 className="btn btn-outline-primary contact-btn"
//                 type="submit"
//                 defaultValue="Submit"
//               >Send</button>
//             </div>
//           </form>
//           <p className="note">
//             Powered by {" "}
//             <a
//               className="link"
//               href="https://www.staticforms.xyz/"
//               target="blank"
//             >
//               Static Forms
//             </a>. </p>
//             <p className="note">The information you submit in this form <u>is not stored</u>, per <a href="https://www.staticforms.xyz/privacy" target="_blank" rel="noopener noreferrer">Static Form's Privacy Policy</a>. it is directly forwarded to our email.</p>
         
//         </section>
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div`
//   .align-center {
//     text-align: center;
//   }

//   .subtitle{
//     padding: 1.5rem 0 2.5rem;
//   }

//   input:focus label {
//   color: transparent;
// }

// .notification p{
//   line-height: 0;
//   margin-bottom: 0;
// }

//   // Grid
//   .contact-row {
//     margin: -20px 0;
//     .col {
//       padding: 0 20px;
//       float: left;
//       box-sizing: border-box;
//       &.x-50 {
//         width: 50%;
//       }
//       &.x-100 {
//         width: 100%;
//       }
//     }
//   }

//   @media only screen and (max-width: 576px) {
//     .contact-row .col.x-50 {
//     width: 100%;
//   }
// }

// @media only screen and (max-width: 398px) {
//     .contact-row {
//     padding: 0 5vw;
//     display: block;
//   }
// }

//   .content-wrapper {
//     min-height: 100%;
//     position: relative;
//   }

//   .get-in-touch {
//     max-width: 650px;
//     margin: 5rem auto;
//     position: relative;
//     display: block;
//     font-family: var(--ff-primary), sans-serif;

//     .title {
//       text-align: center;
//       font-family: var(--ff-primary), sans-serif;
//       text-transform: uppercase;
//       letter-spacing: 3px;
//       font-size: 36px;
//       line-height: 48px;
//       /* padding-bottom: 48px; */
//     }
//   }

//   .contact-form-styles {
//     .form-field {
//       position: relative;
//       margin: 32px 0;
      
//     }
//     .input-text {
//       display: block;
//       width: 100%;
//       height: 36px;
//       border-width: 0 0 2px 0;
//       border-radius: 0px;
//       border-color: var(--primary-6);
//       font-family: var(--ff-primary), sans-serif;
//       font-size: 18px;
//       line-height: 26px;
//       font-weight: 400;
//       background-color: transparent;

//       &:focus {
//         outline: none;
        
//       }

//       &:focus,
//       &.not-empty {
//         + .label {
//           transform: translateY(-24px);
//         }
//       }
//     }
//     .label {
//       position: absolute;
//       left: 20px;
//       bottom: 11px;
//       font-size: 18px;
//       line-height: 26px;
//       font-weight: 400;
//       color: #7e7e7e;
//       cursor: text;
//       transition: transform 0.2s ease-in-out;
//     }

    
//   }

//   .note {
//     width: 100%;
//     text-align: center;
//     line-height: 21px;
//     font-size: 1.125em;
//   }

//   @media only screen and (max-width: 690px) {
//     .note{
//         padding: 0 5vw;
//     }

//     .subtitle{
//       margin: 1rem auto 1.3rem;
//     }

    
// }

// .contact-btn{
//     padding: 1rem 2rem;
// }
// @media only screen and (max-width: 767px) {
//     .submit{
//         margin-bottom: 3rem !important;
//     }
// }

// .is-hidden{
//     display: none !important;
// }

// .is-danger {
//   background-color: #f14668;
//   border-color: transparent;

//   p{
//     color: #fff !important;
//   }
  
// }

// .is-primary {
//   background-color: #48c78e;
//   border-color: transparent;

//   p{
//      color: #fff !important;
//   }
 
// }

// .notification{
//   padding: 1.5rem 2rem;
//   border-radius: 5px;
//   display: inline-block;
//   margin-bottom: .5rem;
// }


// `

// export default ContactForm
