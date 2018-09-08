import React from 'react';
import Helmet from 'react-helmet';

const Head = (props) => {
  return (
    <Helmet
      title={props.data.site.siteMetadata.title}
      meta={[
        {  name: 'description', content: 'Get found online with a fast, responsive website built from the ground up. Tawnee Allport is a freelance web developer and designer based out of Wyoming.' },
        { name:"twitter:card", content: "summary" },
        { name:"twitter:site", content: "@TA_Coding" },
        { name: "twitter:title", content: "Modern Web Developer | Tawnee Allport"},
        { name:"twitter:description", content:"Get found online with a fast, responsive website built from the ground up. Tawnee Allport is a freelance web developer and designer based out of Wyoming."},
        { name:"twitter:image", content: "https://www.tawneeallport.com/pfp.png" },
        { name:"twitter:image:alt", content: "Tawnee's 8 bit profile picture" },
      ]}
    >
      <script type="application/ld+json">{`
        {
            "@context": "http://schema.org"
        }
    `}</script>
      <html lang="en" />
    </Helmet>
  )
}

export default Head;
