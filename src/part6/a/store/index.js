import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import aneReducer  from '../anecdotes/reducer'
import notiReducer from '../notification/reducer'
import filterReducer from '../filter/reducer'

export default createStore(combineReducers({
  anecdotes: aneReducer,
  notification: notiReducer,
  filter: filterReducer,
}), applyMiddleware(thunk))