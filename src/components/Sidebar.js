import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SidebarNav from './SidebarNav';
import pfp from '../assets/pfp.png';

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__profile">
        <img src={pfp} alt="" className='Sidebar__pfp'/>
        <div className="Sidebar__text">
          <h1 className='Sidebar__mobile-title'>Tawnee's Portfolio</h1>
          <div className='Sidebar__status-wrapper'>
            <div className="Sidebar__status-dot"></div>
            <p className='Sidebar__status'>User is currently available for work.</p>
          </div>

          <div className="Sidebar__social-icons">
            <a href="https://www.twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="https://www.github.com"><FontAwesomeIcon icon={['fab', 'github']} /></a>
            <a href="https://www.codepen.com"><FontAwesomeIcon icon={['fab', 'codepen']} /></a>
          </div>
        </div>

      </div>
      <SidebarNav />
      <p className="Sidebar__legal">Copywrite 2018</p>
    </div>
  )
}

export default Sidebar;
