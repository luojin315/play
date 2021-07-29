import React from 'react'
import ReactDom from 'react-dom'
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/store/store'

//注水  客户端入口

const Page = (
    <Provider store={store}>
        <BrowserRouter>
            {App}
        </BrowserRouter>
    </Provider>
)
ReactDom.hydrate(Page, document.getElementById('root'))