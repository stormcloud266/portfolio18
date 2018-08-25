import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavLink from './NavLink';

class SidebarNav extends React.Component {

  state = {
    mobile: false
  }

  componentDidMount() {
    this.getWindowSize();
    window.addEventListener("resize", this.getWindowSize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.getWindowSize);
  }

  getWindowSize = () => {
   this.setState({ mobile: window.innerWidth < 960 });
 }

  render() {
    return (
      <nav className="SidebarNav">
        <NavLink to="/">
          <div className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="home" />
          </div>
          {this.state.mobile ? 'Home' : 'Base Camp'}
        </NavLink>

        <NavLink to="about">
          <div className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="user-astronaut" />
          </div>
          {this.state.mobile ? 'About' : 'Get To Know Me'}
        </NavLink>

        <NavLink to="projects">
          <div className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="wrench" />
          </div>
          {this.state.mobile ? 'Projects' : 'See What I\'ve Built'}
        </NavLink>

        <NavLink to="contact">
          <div className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="mobile-alt" />
          </div>
          {this.state.mobile ? 'Contact' : 'Get in Touch'}
        </NavLink>

      </nav>

    )
  }
}

export default SidebarNav;
