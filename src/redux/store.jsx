import {createStore, combineReducers, applyMiddleware} from 'redux'
import Thunk from 'redux-thunk'

import InitState from '@/redux/initState'
import Reducers from '@/redux/reducers'
import * as List from '@/list/index'

const appReducers = combineReducers(Reducers)

const store = createStore(
  appReducers, 
  InitState,
  applyMiddleware(Thunk)
)

store.subscribe(() => {
  console.log(store.getState())
})

export default store
