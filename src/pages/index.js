import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby'
import fire from '../assets/fire.gif';


const Home = () => (
  <Layout>
    <div className="page mountains fadeIn">
      <div className="Home page__content">
        <p className="page__title">Home</p>
        <div>
          <h2 className="Home__title">Hey, I'm Tawnee</h2>
          <p className="Home__subtitle">
            Let's build something that makes difference.
          </p>
        </div>
        <p className="Home__body">
          I'm a fullstack web developer who is passionate about building clean, responsive websites from the ground up using the latest technologies and frameworks. If you need a fast, secure, and optimized website <Link to="contact">let's chat</Link>.
        </p>
        {/* <div className="Home__toolbelt">
          <h2 className="Home__toolbelt-title">Tools in My Belt</h2>
          <div className="Home__tools-list">
            <ul>
              <li>React</li>
              <li>Node</li>
              <li>SCSS</li>
              <li>HTML</li>
              <li>PostCSS</li>
            </ul>

            <ul>
              <li>Gulp</li>
              <li>Heroku</li>
              <li>Git / Github</li>
              <li>PHP</li>
            </ul>
          </div>
        </div> */}
      </div>
      <img className="fire" src={fire} alt=""/>
    </div>
  </Layout>
)

export default Home;
