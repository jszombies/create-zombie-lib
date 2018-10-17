// @flow

import { createStore, applyMiddleware, combineReducers } from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

type AppState = {
}

type Action = {
  type: string
}

const initialState: AppState = {
}

export const actionTypes = {
}

const appReducer = combineReducers({
})

export const initStore = (state: AppState = initialState) => {
  return createStore(appReducer, state, composeWithDevTools(applyMiddleware(loggerMiddleware, thunkMiddleware)))
}
