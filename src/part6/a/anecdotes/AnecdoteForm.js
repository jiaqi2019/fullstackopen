import React from 'react';
import {addAnecdote} from './reducer'
import {useDispatch} from 'react-redux'
import service from '../service'

export default function(){
  const dispatch = useDispatch()

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
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>create new</h1>
      text:<input name="text" />
      <button type="submit">add</button>
    </form>
  )
}


























