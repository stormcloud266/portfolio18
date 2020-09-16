import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ data }) => {
  return (
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content:
            'Get found online with a fast, responsive website built from the ground up. Tawnee Allport is a freelance web developer and designer based out of Wyoming.',
        },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@TA_Coding' },
        {
          name: 'twitter:title',
          content: 'Modern Web Developer | Tawnee Allport',
        },
        {
          name: 'twitter:description',
          content:
            'Get found online with a fast, responsive website built from the ground up. Tawnee Allport is a freelance web developer and designer based out of Wyoming.',
        },
        {
          name: 'twitter:image',
          content: 'https://www.tawneeallport.com/pfp.png',
        },
        {
          name: 'twitter:image:alt',
          content: "Tawnee's 8 bit profile picture",
        },
      ]}
    >
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cody",
          "addressRegion": "WY",
          "postalCode":"82414"
          },
          "description": "Get found online with a fast, responsive website built from the ground up. Tawnee Allport is a freelance web developer and designer based out of Wyoming.",
          "name": "Modern Web Developer | Tawnee Allport",
          "telephone": "857-209-4930",
          "image":"https://www.tawneeallport.com/pfp.png",
          "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.74",
          "longitude": "-73.98"
          },
          "sameAs" : [ "https://twitter.com/TA_Coding",
          "https://github.com/stormcloud266",
          "https://codepen.io/stormcloud266"]
        }
    `}</script>

      <html lang="en" />
    </Helmet>
  )
}

export default Head
