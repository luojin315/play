import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import { Provider } from 'react-redux'
import { countState } from './store'
export default class Index extends Component {
    render() {
        return (
            <Provider store={countState}>
                <Switch>
                    <Route path="/Page1" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Page3" component={Page3} />
                    <Redirect to="/Page1" />
                </Switch>
            </Provider>
        )
    }
}
