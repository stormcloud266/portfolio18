import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

class SidebarNav extends React.Component {
  state = {
    mobile: false,
  }

  componentDidMount() {
    this.getWindowSize()
    window.addEventListener('resize', this.getWindowSize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowSize)
  }

  getWindowSize = () => {
    this.setState({ mobile: window.innerWidth < 960 })
  }

  render() {
    return (
      <nav className="SidebarNav">
        <Link to="/" activeClassName="active-page">
          <span className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="home" />
          </span>
          {this.state.mobile ? 'Home' : 'Base Camp'}
        </Link>

        <Link to="/projects" activeClassName="active-page">
          <span className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="wrench" />
          </span>
          {this.state.mobile ? 'Projects' : "See What I've Built"}
        </Link>

        <Link to="/about" activeClassName="active-page">
          <span className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="user-astronaut" />
          </span>
          {this.state.mobile ? 'About' : 'Get To Know Me'}
        </Link>

        <Link to="/contact" activeClassName="active-page">
          <span className="SidebarNav__icon-wrapper">
            <FontAwesomeIcon icon="mobile-alt" />
          </span>
          {this.state.mobile ? 'Contact' : 'Get in Touch'}
        </Link>
      </nav>
    )
  }
}

export default SidebarNav
