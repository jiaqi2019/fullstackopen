import React, { useState } from 'react';

export default function(){
  const  anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [votes, setVotes] = useState( new Array(anecdotes.length).fill(0))
  function handleClick(){
    let arr = [...votes]
    arr[index] += 1 
    setVotes(arr)
  }
  const [index, setIndex] = useState(0)
  return (
    <div>

      <Anecdote text={anecdotes[index]} title= 'Anecdote of the day' vote={votes[index]}/>
      <button onClick={()=>{handleClick()}}>vote</button>
      <button onClick={()=>{setIndex((index + 1) % anecdotes.length)}}>next anecdote</button>
      <Anecdote text={anecdotes[votes.indexOf(Math.max.apply(null,votes))]} title= 'Anecdote witn most votes' />
    </div>
  )
}

const Anecdote = ({title, text, vote}) =>{

  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      {vote && <p>has {vote} votes</p>}
    </>
  )
}