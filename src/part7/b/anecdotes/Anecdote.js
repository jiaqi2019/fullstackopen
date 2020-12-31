import React from 'react';
import { useDispatch } from 'react-redux'
import { addVote } from './reducer'
import { setNoti } from '../notification/reducer'

export default function({anecdote}){
  if(!anecdote) return null
  const dispatch = useDispatch()

  function handleAdd( anecdote){
    dispatch(addVote( anecdote))
    dispatch(setNoti('you voted ' + anecdote.text, 3000))
  }
  return (
  <div>
    <h2>{anecdote.text}</h2>
    <p>has {anecdote.votes} <button onClick={() => handleAdd(anecdote)}>vote</button> </p>
    <p>for more info see <a href={anecdote.url}>{anecdote.url}</a></p>
  </div>
  )
}