import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [counter, setCounter] = useState(0)
  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);
  const handleClick = () => setCounter(counter + 1)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={totalExercises} />
      <div>{counter}</div>
      <button onClick={handleClick}>counter</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
