import React from 'react';
import ReactDOM from 'react-dom';
import ProjectItem from '../components/ProjectItem';
import Layout from '../components/layout'


const data = require('../components/project-data.json');

class Projects extends React.Component {
  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollTop = 0;
  }
  render() {
    return (
      <Layout>
        <div className="page fadeIn">
          <div className="Projects page__content">
            <p className="page__title">Projects</p>
            <ul className="Projects__list">
            {
              data.map(data => (
                <li key={data.name} className="Projects__list-item fadeInUp">
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
