import React from 'react';
import {addAnecdote} from './reducer'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {setNoti} from '../notification/reducer'

export default function(){
  const dispatch = useDispatch()
  const history = useHistory()
  
  async function handleSubmit(e){
    e.preventDefault()
    e.persist()
    const text = e.target.text.value
    // const newObj = await service.createAnecdote(text)
    // dispatch(addAnecdote(newObj))
    dispatch(addAnecdote(text))
    // 异步之后默认target被赋值为null,要想异步后查看或赋值，需调用persist()
    // console.log(e.target.text.value );
    e.target.text.value = ''
    dispatch(setNoti('a new anecdote Goto statement', 2000))
    history.push('/anecdotes')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>create new</h1>
      text:<input name="text" /> <br />
      author:<input name="author" /> <br />
      url form more info:<input name="url" /> <br />

      <button type="submit">add</button>
    </form>
  )
}


























