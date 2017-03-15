import React from 'react';
import BigText from '../components/BigText';

const Project = ({params}) => {
  return (
    <div>
      <BigText>{params.id}</BigText>
    </div>
  );
};

export default Project;
