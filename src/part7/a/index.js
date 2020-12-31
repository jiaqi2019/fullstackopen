import React from 'react';
import Anecdotes from './anecdotes'
import { Provider } from 'react-redux'
import store from './store' 
import {BrowserRouter as Router} from 'react-router-dom'

export default function () {
  return (
    <Provider store = {store}>
      <Router>
        <Anecdotes />
      </Router>
    </Provider>
  )
}


