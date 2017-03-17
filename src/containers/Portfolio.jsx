import React from 'react';
import BigText from '../components/BigText.jsx';
import ProjectLinks from '../components/ProjectLinks.jsx';

const Portfolio = ({children}) => {
  return (
    <div>
      <BigText>Portfolio</BigText>
      <ProjectLinks />
      {children}
    </div>
  );
};

export default Portfolio;
