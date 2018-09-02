import React from 'react';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Layout from '../components/layout';

const About = (props) => {
  return (
    <Layout>
      <div className="page fadeIn">
        <div className="Privacy page__content">
          <p className="page__title">Privacy</p>
          <PrivacyPolicy />
        </div>
      </div>
    </Layout>

  )
}

export default About;
