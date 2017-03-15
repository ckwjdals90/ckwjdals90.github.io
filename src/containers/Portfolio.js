import React from 'react';
import BigText from '../components/BigText';
import ProjectLinks from '../components/ProjectLinks';

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
