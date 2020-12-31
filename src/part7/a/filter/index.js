import React from 'react';
import {useDispatch} from 'react-redux'
import {setFilter} from './reducer'

export default function(){
  const dispatch = useDispatch()
  const style = {
    marginBottom: 10
  }
  return (
    <div style={style}>
      filter: <input onChange={e => dispatch(setFilter(e.target.value))}/> 
    </div>
  ) 
}
























