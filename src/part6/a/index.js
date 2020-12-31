import React from 'react';
import Unicafe from './unicafestore/index'
import Anecdotes from './anecdotes'
import { Provider } from 'react-redux'

import store from './store' 

export default function () {
  return (
    // <Unicafe/>
    <Provider store = {store}>
      <Anecdotes />
    </Provider>
  )
}


