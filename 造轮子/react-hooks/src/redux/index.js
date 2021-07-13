import React, { Component } from 'react'
import { countState, countState2 } from './store'


export default class index extends Component {
    componentDidMount() {
        countState2.subscribe(() => {
            console.log("ASdasd")
          })
          
    }
    render() {
        return (
            <div>
                <h2>{countState.getState()}</h2>
                <h2>{countState2.getState()}</h2>
                <button onClick={() => { countState.dispatch({ type: 'ADD' }) }}>加法</button>
                <button onClick={() => { countState.dispatch({ type: 'MINUS' }) }}>减法</button>
                <hr></hr>
                <button onClick={() => { countState2.dispatch({ type: 'ADD' }) }}>加法</button>
                <button onClick={() => { countState2.dispatch({ type: 'MINUS' }) }}>减法</button>
            </div>
        )
    }
}

