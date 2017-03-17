import React from 'react';
import BigText from '../components/BigText.jsx';

const Project = ({params}) => {
  return (
    <div>
      <BigText>{params.id}</BigText>
    </div>
  );
};

export default Project;
