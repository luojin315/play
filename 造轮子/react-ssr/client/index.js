import React from 'react'
import ReactDom from 'react-dom'
import routes from '../src/App'
import Header from '../src/component/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { getClientStore } from '../src/store/store'

//注水  客户端入口

const Page = (
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Header />
            <Switch>
                {
                    routes.map(route => <Route {...route} />)
                }
            </Switch>
        </BrowserRouter>
    </Provider>
)
ReactDom.hydrate(Page, document.getElementById('root'))