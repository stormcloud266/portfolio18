import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUserAstronaut, faWrench, faEnvelope, faMobileAlt, faCode, faTerminal, faHeadphones, faCloud, faGlasses, faGlobe, faMusic, faBook, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../styles/styles.scss';


// import ScrollToTop from './ScrollToTop';
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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {  name: 'description', content: 'Get found online with fast, responsive website built from the ground up. Tawnee Allport is a freelance web developer and designer based out of Wyoming.' },
            { name:"twitter:card", content: "summary" },
            { name:"twitter:site", content: "@TA_Coding" },
            { name: "twitter:title", content: "Modern Web Developer | Tawnee Allport"},
            { name:"twitter:description", content:"Get found online with fast, responsive website built from the ground up. Tawnee Allport is a freelance web developer and designer based out of Wyoming."},
            { name:"twitter:image", content: "https://www.tawneeallport.com/pfp.png" },
            { name:"twitter:image:alt", content: "tawnee's 8 bit profile picture" },
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
