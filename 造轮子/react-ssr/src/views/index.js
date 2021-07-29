import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'


function Index(props) {
    const [state, setState] = useState(0)
    useEffect(() => {
        props.getIndexList()
    }, []);

    return (<div>
        <h1>hello word: {props.title}</h1>
        <span>{state}</span>
        <button onClick={() => { setState(state + 1) }}>click me!</button>
        <ul>
            {
                props.list.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
    </div>)
}

export default connect(
    state => ({ list: state.index.list }), { getIndexList }
)(Index)