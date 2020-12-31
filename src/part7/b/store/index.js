import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import aneReducer  from '../anecdotes/reducer'
import notiReducer from '../notification/reducer'

export default createStore(combineReducers({
  anecdotes: aneReducer,
  notification: notiReducer,
}), applyMiddleware(thunk))