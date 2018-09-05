import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';

const tools = [
  'Javascript', 'React', 'Redux', 'Node', 'jQuery',
  'HTML5', 'CSS3','PostCSS', 'SCSS', 'Git', 'PHP', 'Gulp',
  'Firebase', 'MongoDB', 'GraphQL', 'Jest'
]

const About = (props) => {
  return (
    <Layout>
    <div className="swoop page fadeIn">
      <div className="About page__content">
        <p className="page__title">About</p>

        <div className="About__section fadeInUp">
          <h2 className="About__title"><FontAwesomeIcon icon="globe" />website coder</h2>
          <p className="About__body">
            I am a self-taught web developer currently specializing in the MERN stack. Learning to code has been one of the most rewarding adventures of my life. I'm always on the lookout for <a href="https://codepen.io/collection/DoWgMQ/" className="link">design inspiration</a> and new ideas.
          </p>
          <div className="About__toolbelt">
            <p className="About__playlist-title">My Toolbelt</p>
            <div className="About__tools-list">


            <div className="tools">
              <p className="tools__title">
                <FontAwesomeIcon icon="terminal" />
                ls <span>core_skills</span>
              </p>
              <ul className="tools__list">
                <li>React</li>
                <li>Node</li>
                <li>Firebase</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>


            </div>
          </div>
        </div>

        <div className="About__section fadeInUp">
          {/* possibly right aligned? */}
          <h2 className="About__title"><FontAwesomeIcon icon="music" />music hoarder</h2>
          <p className="About__body">
            I've been obsessed with music for as long as I can remember. Getting my first Walkman was a spiritual epiphany, and I've been a devout follower ever since. Around the age of 13 I started learning guitar, and it's still my favorite hobby to this day.
          </p>
          <p className="About__playlist-title">Check Out Some Playlists</p>
          <div className="About__playlist">
            <a href="https://www.youtube.com/playlist?list=PLbimQysGO7mi4ds9xUEP6bAbbWSUdPbZc" className="About__cover">
              <FontAwesomeIcon icon="terminal" />
              <p>Coding</p>
            </a>
            <div className="About__cover">
              <FontAwesomeIcon icon="headphones" />
              <p>Rockin'</p>
            </div>
            <a href="https://www.youtube.com/playlist?list=PLbimQysGO7minVUbUZ4Bi1nbD2aXcN8Uz" className="About__cover">
              <FontAwesomeIcon icon="cloud" />
              <p>So Dreamy</p>
            </a>
          </div>

        </div>

        <div className="About__section fadeInUp">
          <h2 className="About__title"><FontAwesomeIcon icon="glasses" />book skimmer</h2>
          <p className="About__body">
            During highschool I became an avid reader of everything except my textbooks. Now I enjoy science fiction, science fact, philosophy, and poetry.
          </p>

          <p className="About__playlist-title">Peruse My Bookshelf</p>

          <div className="About__reading-container">
            <a href="https://www.goodreads.com/book/show/216377.VALIS" className="About__reading-list">
              <FontAwesomeIcon icon="book" />
              <p>VALIS</p>
            </a>

            <a href="https://www.goodreads.com/book/show/13072461-daniel-fights-a-hurricane?ac=1&from_search=true" className="About__reading-list">
              <FontAwesomeIcon icon="book" />
              <p>Daniel Fights a Hurricane</p>
            </a>

            <a href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning?ac=1&from_search=true" className="About__reading-list">
              <FontAwesomeIcon icon="book" />
              <p>Man's Search for Meaning</p>
            </a>
          </div>



        </div>


      </div>
    </div>
  </Layout>

  )
}

export default About;
