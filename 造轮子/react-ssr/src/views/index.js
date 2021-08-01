import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getIndexList } from '../store/index'


function Index(props) {
    const [state, setState] = useState(0)
    useEffect(() => {
        if (!props.list.length) {

            //客户端获取    如果不是直接访问首页 通过路由访问首页list没数据需要重新获取
            props.getIndexList()

        }
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

Index.loadData = (store) => {
    return store.dispatch(getIndexList())
}

export default connect(
    state => ({ list: state.index.list }), { getIndexList }
)(Index)