require('../less/main.less')
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import createRoutes from './routes/index'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

const store = configureStore()

ReactDOM.render((
    <Provider store={store}>
        { createRoutes(browserHistory) }
    </Provider>
), document.getElementById('react-container'))
