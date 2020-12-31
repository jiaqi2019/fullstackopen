import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addVote} from './reducer'
import {setNoti} from '../notification/reducer'

export default function(){
  const dispatch = useDispatch()

  const anecdotes = useSelector((state)=>{
    if(!state.filter) return state.anecdotes
    return state.anecdotes.filter(item => item.text.includes(state.filter))
  })
  
  function handleAdd( anecdote){
    dispatch(addVote( anecdote))
    dispatch(setNoti('you voted ' + anecdote.text, 3000))
  }
  return (
    <div>
      {anecdotes.map((anecdote, index) => {
        return (
          <div key={anecdote.id}>
            <Anecdote text={anecdote.text} vote={anecdote.votes}/>
            <button onClick={() => handleAdd(anecdote)}>vote</button>
          </div>
        )
      })}
    </div>
  )
}

const Anecdote = ({text, vote}) =>{

  return (
    <>
      <p>{text}</p>
      has {vote}
    </>
  )
}