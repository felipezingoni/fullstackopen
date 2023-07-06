import React, { useState } from 'react'
import Statistics from './components/Statistics.jsx'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={handleClickGood}>Good</button>
      <button onClick={handleClickNeutral}>Neutral</button>
      <button onClick={handleClickBad}>Bad</button>
      <br />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </>
  )
}

export default App
