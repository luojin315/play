
import { useState } from 'react'






export default function Container() {

    const [obj, setObj] = useState([<Heade key={0} />])

    return (
        <div>
            {obj}
            <button onClick={addComponent(obj, setObj)}>添加组件</button>
        </div>
    )
}


function Heade() {
    return (
        <div style={{ marginTop: "20px" }}>头部asd</div>
    )
}

function Add() {
    return <h2 key={2}>我是被添加的</h2>
}

function addComponent(val, setVal) {
    return () => {
        let ary = [...val, <Add key={2} />]
        console.log(ary)
        setVal(ary)
    }

}