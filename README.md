# Portfolio 2018
My portfolio website developed in 2018. It is built with Gatsby and hosted on Netlify.

[view site](https://www.tawneeallport.com/)

![](https://github.com/stormcloud266/portfolio18/blob/master/screenshot.gif)

## Challenges and Goals
* Build my portfolio website with React in a SEO friendly way
* Incorporate website analytics
* Create a fully responsive, mobile-first design to display my projects and info about myself
* Integrate an icon pack and custom fonts
* Connect a form for users to get in touch with me

## Solutions
### Built with SEO in mind
I chose to build my portfolio with Gatsby. This way I could write the code in React, and use Gatsby to generate the files into HTML allowing search engines to crawl my website. 

Using React Helmet, I also implemented Twitter card data and JSON LD for rich search results. I added the Google Analytics Gatsby plugin which enabled me to set up Google Analytics quickly. The sitemap plugin generates an up-to-date sitemap file on build.

### The design
I designed a dark and colorful website using a mobile-first approach. The desktop version features a dashboard style component with a moving gradient background, while the mobile version was design to look and function similarly to a mobile app. 

The styling was done using SCSS so I could easily set up mixins, variables, and functions. Icons are provided by Font Awesome's React plugin, and fonts are provided by Google Fonts.

### The build
The main goal of this website was to provide a way for me to show design and development projects I have worked on. I decided to build a component that maps through a data source and outputs html for every project. This makes it much easier to update my list of projects and keeps the code DRY.

In order to allow users to get in contact with me, I developed a functioning form by connecting my Gatsby project to Netlify Forms. This uses webhooks to email me whenever the form is submitted.

## Project Details
Continuous deployment with Netlify. The website rebuilds when updates are pushed to master on Github.

* front end: [Gatsby](https://gatsbyjs.com)
* hosting: [Netlify](https://www.netlify.com)