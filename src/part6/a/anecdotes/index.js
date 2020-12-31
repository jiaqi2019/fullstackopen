import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { delNoti } from '../notification/reducer'

import AnecdoteList from './anecdoteList'
import AnecdoteForm from './AnecdoteForm'
import Notification from  '../notification'
import Filter from  '../filter'
import service from '../service/index'

import {initAnecdotes} from './reducer'

export default function(){
  const notification = useSelector(store => store.notification)
  const dispatch = useDispatch()

  useEffect(()=>{
    // service.getAll().then(list => dispatch(initAnecdotes(list)))
    dispatch(initAnecdotes())
  }, [])

  // if(notification){
  //   clearTimeout(timer)
  //   timer = setTimeout(() => {
  //     dispatch(delNoti())
  //   }, 3000)
  // }
  return (
    <>
      <h1>Anecdotes</h1>
      <Notification mess={notification}/>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </>
  )
}

