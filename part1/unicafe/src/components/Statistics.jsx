import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad


  if (all === 0) {
    return (
      <div>
        <h3>Statistics</h3>
        <p>No feedback yet</p>
      </div>
    )
  }

  return (
    <div>
      <h3>Statistics</h3>
      <StatisticLine value={props.good} text={'Good'} />
      <StatisticLine value={props.neutral} text={'Neutral'} />
      <StatisticLine value={props.bad} text={'Bad'} />
      <hr />
      <StatisticLine value={all} text={'All'} />
      <StatisticLine value={(props.good - props.bad) / all} text={'Average'} />
      <StatisticLine value={(props.good / all) * 100} text={'Positive'} />
    </div>
  );
}

export default Statistics
