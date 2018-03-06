/**
 * Created by DENG on 3/5/2018.
 */
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
 
const loggerMiddleware = createLogger()
 
export default function configureStore(preloadedState) {
  return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
    )
  )
}