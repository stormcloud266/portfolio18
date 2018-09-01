import React from 'react';
import Layout from '../components/layout'


const Contact = (props) => (
  <Layout>
    <div className="page splash fadeIn">
    <div className="Contact page__content">
      <p className="page__title">Contact</p>
      <div className="Contact__body">
        <p>
          I would love to help you or your business get found online. If you have a project in mind or are hiring, please fill out the form or email me directly, and we can start planning your next project as soon as possible.
        </p>
        <a href="mailto:tawnee.la@gmail.com" className="Contact__email">tawnee.la@gmail.com</a>
      </div>

        <form className="Contact__form fadeIn" name="contact" method="post" action="/submitted" data-netlify="true" data-netlify-honeypot="bot-field">

        <input type="hidden" name="form-name" value="contact" />

          <div>
            <input type="text" name="name" id="name" required/>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input type="text" name="email" id="email" required/>
            <label htmlFor="email">Email</label>
          </div>

          <div>
            <textarea type="text" id="message" name="message" rows="" cols="" required></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>

    </div>
    </div>
    </Layout>
  )


export default Contact;
