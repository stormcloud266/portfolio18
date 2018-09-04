import React from 'react';
import ReactDOM from 'react-dom';
import ProjectItem from '../components/ProjectItem';
import Layout from '../components/layout'


const data = require('../components/project-data.json');

class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <div className="page fadeIn" id="list-top">
          <div className="Projects page__content">
            <p className="page__title">Projects</p>
            <ul className="Projects__list">
            {
              data.map((data, ind) => (
                <li
                  key={data.name}
                  id={`list-ind-${ind}`}
                  className="Projects__list-item fadeInUp"
                >
                  <ProjectItem data={data}/>
                </li>
              ))
            }
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}


export default Projects;
