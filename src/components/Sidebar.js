import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import SidebarNav from './SidebarNav'
import pfp from '../assets/pfp.png'

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__profile">
        <img src={pfp} alt="" className="Sidebar__pfp" />
        <div className="Sidebar__text">
          <h1 className="Sidebar__mobile-title">Tawnee's Portfolio</h1>
          <div className="Sidebar__status-wrapper">
            <div className="Sidebar__status-dot"></div>
            <p className="Sidebar__status">Currently available for work.</p>
          </div>

          <div className="Sidebar__social-icons">
            <a
              href="https://twitter.com/TA_Coding"
              aria-label="open twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a
              href="https://github.com/stormcloud266"
              aria-label="open github"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a
              href="https://codepen.io/stormcloud266"
              aria-label="open codepen"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'codepen']} />
            </a>
          </div>
        </div>
      </div>

      <SidebarNav />

      <p className="Sidebar__legal">
        Copywrite 2018 <span>|</span> <Link to="/privacy">Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Sidebar
