import React from 'react';
import Layout from '../components/layout';
import ufo from '../assets/ufo.svg';
import cow from '../assets/cow.png';

const NotFoundPage = () => (
  <Layout>
    <div className="page fadeIn">
    <div className="page__content">
      <p className="page__title">404</p>
    <div className="lost">
      <img src={ufo} alt="" className='ufo'/>
      <p>Hey, I don't think I made the page you were looking for, but you seem cool and adventurous. The truth is out there.</p>
      <img src={cow} alt="" className='cow'/>
    </div>
  </div>
</div>
  </Layout>
);

export default NotFoundPage;
