import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import Anecdote from './Anecdote'
import AnecdoteList from './anecdoteList'
import AnecdoteForm from './AnecdoteForm'
import Notification from  '../notification'

import {initAnecdotes} from './reducer'
import {Switch, Link, Route, useRouteMatch} from 'react-router-dom'
import Footer from './footer'


const style = {
  padding: '10px'
}

export default function(){
  const notification = useSelector(store => store.notification)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    // service.getAll().then(list => dispatch(initAnecdotes(list)))
    dispatch(initAnecdotes())
  }, [])

  const anecdotes = useSelector((state)=>{
    if(!state.filter) return state.anecdotes
    return state.anecdotes.filter(item => item.text.includes(state.filter))
  })
  const match = useRouteMatch('/anecdotes/:id')
  const anecdote = match ? anecdotes.find(item => item.id == match.params.id) : null
  return (
    <>
      <h1>Software anecdotes</h1>
      <div>
        <Link style={style} to='/anecdotes'>anecdotes</Link>
        <Link style={style} to='/create'>create new</Link>
        <Link style={style} to='/about'>about</Link>
      </div>
      <Notification mess={notification}/>
      <Switch>
        <Route path='/anecdotes/:id'><Anecdote anecdote={anecdote}/></Route>
        <Route path='/anecdotes'><AnecdoteList anecdotes={anecdotes}/></Route>
        <Route path='/create'><AnecdoteForm /></Route>
        <Route path='/about'></Route>
        <Route path='/'><AnecdoteList anecdotes={anecdotes}/></Route>
      </Switch>
      <Footer />
      
      
    </>
  )
}

