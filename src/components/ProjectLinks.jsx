import React from 'react';
import { Link } from 'react-router';

import './ProjectLinks.css';

const ProjectLinks = () => {
  return (
    <div className="project-links">
      <Link to="/portfolio/1">1</Link>
      <Link to="/portfolio/2">2</Link>
      <Link to="/portfolio/3">3</Link>
      <Link to="/portfolio/4">4</Link>
    </div>
  )
};

export default ProjectLinks;
