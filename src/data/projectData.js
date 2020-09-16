export default [
  {
    name: '$ALEX',
    description: {
      __html:
        "<p>Alex needed a central hub where he could display all his information and appearances that were scattered around the web. To accomplish this, we needed to organize and style many different types of media including articles, podcasts, and tweets while ensuring mobile friendliness.</p><p>This project was built in collaboration with <a href='https://bighappytrees.github.io/' target='_blank' rel='noreferrer'>BigHappyTrees</a>.</p>",
    },
    tasks: [
      'Organizing and consolidating posts from various sites (Twitter, Medium, YouTube, etc.)',
      'Designing a layout that was intuitive, responsive and easily navigable',
      'Incorporating a modern, bright and colorful theme',
      'Developing a fixed sidebar that displays components on click',
    ],
    icon: 'react',
    demo: 'https://alex-demo.netlify.app/',
    tech: ['Gatsby', 'SCSS', 'Netlify'],
  },
  {
    name: 'All American Building Services',
    description: {
      __html:
        '<p>AABS chose a complete redesign and rebuild of their old website. They wanted a sophisticated dark theme with an improved experience for mobile users. The result was a static website generated with Gatsby using Contentful as the CMS. This provides faster load speeds, better security, and easy content updates.</p>',
    },
    tasks: [
      'Developing a custom, reusable gallery component that was keyboard accessible',
      'Building out local landing pages for SEO and Facebook ads',
      'Integrating a headless CMS for easy content updates and blog publishing',
      'Implementing a complete redesign and redevelopment focusing on mobile responsiveness, accessibility, and SEO',
    ],
    icon: 'react',
    site: 'https://aabscorp.com',
    tech: ['Gatsby', 'SCSS', 'Contentful', 'Netlify'],
  },
  {
    name: 'Cody Bookkeeping',
    description: {
      __html:
        '<p>The client was a new small business looking to establish their online presence with a website. A static site was chosen because of the minimal long-term maintenance and low-cost hosting options. I developed a custom testimonial slider to showcase their reviews.</p>',
    },
    tasks: [
      'Establishing an online presence for a new small business with a reliable, responsive website',
      'Developing a custom testimonials slider component',
      "Building a form and connecting it to client's email with Netlify Forms",
      'Adding JSON LD schema markup for rich results in search engines',
    ],
    icon: 'react',
    site: 'https://www.codybookkeeping.net',
    tech: ['Gatsby', 'SCSS', 'Netlify'],
  },
  {
    name: 'Reactified Weather',
    description: {
      __html:
        "<p>This weather app was built with React, powered by Node, and styled with SCSS. It utilizes Google's Geocoding API and Dark Sky's Weather API to get weather data for searched locations. Built using my <a href='https://github.com/stormcloud266/templates/tree/master/minimal-react-boilerplate'>Minimal React Boilerplate</a>.</p>",
    },
    tasks: [
      'Writing a function to integrate the weather icons with the conditions info sent back from Dark Sky',
      'Building a NodeJS server to host the app in order to eliminate CORS conflicts and to send the API keys securely',
      'Deploying the app on Heroku which required setting up conditional port and API key variables',
    ],
    icon: 'react',
    demo: 'https://reactified-weather.herokuapp.com/',
    source: 'https://github.com/stormcloud266/react-weather',
    tech: ['Gatsby', 'SCSS', 'Netlify'],
  },
  {
    name: 'Lawn Care Concept',
    description: {
      __html:
        '<p>A one-page concept website built with GatsbyJS, styled with SCSS, and hosted on Netlify. The goal of this project was to help me practice building a brochure website appropriate for a small business.</p>',
    },
    tasks: [
      'Design and build a website that would be suitable for a small business',
      'Build a custom gallery component with lazy loaded images',
      'Implement a mobile responsive layout using Flex and Grid',
      'Integrate YouTube iframe',
    ],
    icon: 'react',
    site: 'https://lawn-care-mock.netlify.app/',
    source: 'https://github.com/stormcloud266/lawn-care',
    tech: ['React', 'SCSS', 'Node', 'Webpack', 'Heroku'],
  },
  {
    name: 'Expensify App',
    description: {
      __html:
        "<p>The Expensify App was the final project in the <a href='https://www.udemy.com/react-2nd-edition/learn/v4/overview'>Complete React Web Developer</a> Udemy Course. It is a fullstack budget app featuring user authentication and a persistent state via Firebase. The user can filter by date or expense amount, and add, search, edit, and delete expenses.</p>",
    },
    tasks: [
      'Setting up Jest as the testing suite',
      'Connecting Firebase to the app to manage stored data securely and authenticating users via Google account',
      'Configuring Webpack to use in this project and also as a boilerplate for future projects',
    ],
    icon: 'react',
    demo: 'https://expensify-app-333.herokuapp.com/',
    source: 'https://github.com/stormcloud266/expensify-app/',
    tech: ['React', 'Redux', 'SCSS', 'Firebase', 'Jest', 'Webpack', 'Heroku'],
  },
  {
    name: 'Shuttered Photography',
    description: {
      __html:
        "<p>For this project my main goal was to build a blog that could be easily updated by a non-technical client. I used GatsbyJS to build the site, and GraphQL to query the blog posts which are stored as simple markdown files. I then connected all this to Netlify's CMS, an intuitive interface, to easily add and edit new blog posts.</p>",
    },
    tasks: [
      'Creating a lightweight, fast and secure blogging website',
      "Hooking up the website to Netlify's content management system for easy blog post additions",
      'Utilizing lazy loading for images to increase site speed',
    ],
    icon: 'react',
    demo: 'https://shuttered-photography.netlify.app/',
    source: 'https://github.com/stormcloud266/gatsby-photography',
    tech: ['React', 'GraphQL', 'SCSS', 'GatsbyJS', 'Netlify CMS', 'Github API'],
  },
  // {
  //   "name": "Orion's Belts",
  //   "description": {"__html": "<p>I wanted to design a one page, mock small business website to practice layout design and speedy image loading. It features multiple navigation menus with smooth scrolling, and a custom built modal that dynamically changes when a gallery image is clicked.</p>"},
  //   "tasks": [
  //     "Constructing a lazily loaded image gallery with svg draw in effect",
  //     "Adding a custom developed, responsive modal to the gallery",
  //     "Condensing the icons to an svg sprite"
  //   ],
  //   "icon": "react",
  //   "demo": "https://orions-belts.netlify.app/",
  //   "source": "https://github.com/stormcloud266/orions-belts",
  //   "tech": [
  //     "React",
  //     "GraphQL",
  //     "SCSS",
  //     "GatsbyJS"
  //   ]
  // },
  {
    name: 'The Café',
    description: {
      __html:
        "<p>I created this project to practice designing and developing a small business website. My aim was to use my <a href='https://github.com/stormcloud266/templates/tree/master/website-project'>SCSS boilerplate</a> to automate my workflow and provide a quick turn around from inception to completion.</p>",
    },
    tasks: [
      'Designing a fast, mobile-ready website suitable for a café style restaurant',
      'Building a tabbed menu interface',
      'Implementing media card and mobile app theme headers',
    ],
    icon: 'html5',
    demo: 'https://flamboyant-edison-672ef1.netlify.com/',
    source: 'https://github.com/stormcloud266/cafe-mock/',
    tech: ['HTML5', 'SCSS', 'jQuery', 'GulpJS'],
  },
]
