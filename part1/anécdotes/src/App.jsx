import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const handleClick = () => {
    console.log(props.anecdotes)
    const randomIndex = Math.floor(Math.random() * props.anecdotes.length);
    setSelected(randomIndex)
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }
  const largest = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anocdote of the day:</h1>
      {props.anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <br />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>Next</button>
      <div>
        <h1>Anocdote with most votes:</h1>
        {props.anecdotes[largest]}
        <p>Has {votes[largest]} votes</p>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
