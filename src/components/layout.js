import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUserAstronaut, faWrench, faEnvelope, faMobileAlt, faCode, faTerminal, faHeadphones, faFire, faGlasses, faGlobe, faMusic, faBook, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../styles/styles.scss';


// import ScrollToTop from './ScrollToTop';
import Sidebar from './Sidebar';


library.add(fab, faHome, faUserAstronaut, faWrench, faEnvelope, faMobileAlt, faCode, faTerminal, faHeadphones, faFire, faGlasses, faGlobe, faMusic, faBook, faInfoCircle);


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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
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
