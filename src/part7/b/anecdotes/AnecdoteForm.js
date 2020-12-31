import React from 'react';
import {addAnecdote} from './reducer'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {setNoti} from '../notification/reducer'
import {useField} from '../hooks'

export default function(){
  console.log('11');
  const dispatch = useDispatch()
  const history = useHistory()
  const text = useField('text')
  const author = useField('text')
  const url = useField('text')

  async function handleSubmit(e){
    e.preventDefault()

    dispatch(addAnecdote(text.value))
    dispatch(setNoti('a new anecdote Goto statement', 2000))
    history.push('/anecdotes')
  }

  function reset(){
    text.reset()
    author.reset()
    url.reset()
  }
  return (
    <form onSubmit={handleSubmit} onReset={reset}>
      <h1>create new</h1>
      text:<input {...text} /> <br />
      author:<input {...author}/> <br />
      url form more info:<input {...url} /> <br />

      <button type="submit">add</button>
      <button type="reset" >reset</button>
    </form>
  )
}


























