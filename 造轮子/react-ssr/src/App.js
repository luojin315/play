import React, { useState } from 'react'

function App(props) {
    const [state, setState] = useState(0)

    return (<div>
        <h1>hello word: {props.title}</h1>
        <span>{state}</span>
        <button onClick={() => { setState(state + 1) }}>click me!</button>
    </div>)
}

export default App