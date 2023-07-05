import React from 'react';

const Content = (props) => {
  const Part = (props) => (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )

  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  );
};

export default Content;
