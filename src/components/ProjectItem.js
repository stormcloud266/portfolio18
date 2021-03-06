import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectItem = props => {
  return (
    <div className="ProjectItem">
      <div className="ProjectItem__title-wrapper">
        <h2 className="ProjectItem__title">{props.data.name}</h2>
        <div className="ProjectItem__icon-wrapper">
          <FontAwesomeIcon
            icon={['fab', props.data.icon]}
            className="ProjectItem__icon"
          />
        </div>
      </div>

      <div className="ProjectItem__tech-wrapper">
        {props.data.tech.map(item => (
          <p className="ProjectItem__tech" key={item}>
            {item}
          </p>
        ))}
      </div>

      <div
        className="ProjectItem__description"
        dangerouslySetInnerHTML={props.data.description}
      ></div>

      <p className="ProjectItem__tasks-title">
        <FontAwesomeIcon icon={'code'} />
        Tasks and challenges
      </p>

      <ul className="ProjectItem__tasks">
        {props.data.tasks.map((task, ind) => (
          <li className="ProjectItem__task" key={ind}>
            {task}
          </li>
        ))}
      </ul>

      {props.data.demo && (
        <a
          className="ProjectItem__demo"
          href={props.data.demo}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      )}

      {props.data.site && (
        <a
          className="ProjectItem__demo"
          href={props.data.site}
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
      )}

      {props.data.source && (
        <a
          className="ProjectItem__code"
          href={props.data.source}
          target="_blank"
          rel="noreferrer"
        >
          See the Code
        </a>
      )}
    </div>
  )
}

export default ProjectItem
