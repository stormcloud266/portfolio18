import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUserAstronaut, faWrench, faEnvelope, faMobileAlt, faCode, faTerminal, faHeadphones, faCloud, faGlasses, faGlobe, faMusic, faBook, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../styles/styles.scss';


// import ScrollToTop from './ScrollToTop';
import Head from './Head';
import Sidebar from './Sidebar';


library.add(fab, faHome, faUserAstronaut, faWrench, faEnvelope, faMobileAlt, faCode, faTerminal, faHeadphones, faCloud, faGlasses, faGlobe, faMusic, faBook, faInfoCircle);


const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Head data={data} />
        <div className="App">
          <Sidebar />
          <div className="content-main">
            {children}
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
