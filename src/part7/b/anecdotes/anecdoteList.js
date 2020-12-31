import React from 'react';
import {useHistory} from 'react-router-dom'

export default function({anecdotes}){
  const history = useHistory()

  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => {
          return (
            <li key={anecdote.id} onClick={()=> history.push('/anecdotes/' + anecdote.id)} style={{cursor: "pointer"}}>
              {anecdote.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

