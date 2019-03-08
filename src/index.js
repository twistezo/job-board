import './styles/_index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { AppContainer } from './containers/AppContainer'
import * as serviceWorker from './serviceWorker'

export const PUBLIC_URL = process.env.PUBLIC_URL
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
