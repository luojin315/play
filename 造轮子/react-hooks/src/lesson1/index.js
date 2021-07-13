import React, { Component } from 'react'
import { NameContext, AgeContext } from './creatContext'
import ClassChild from './classChild'
import FunChild from './funChild'

export default class index extends Component {

    state = {
        name: "张三",
        age: 18
    }
    render() {
        const { name, age } = this.state;
        return (
            <NameContext.Provider value={name}>
                <AgeContext.Provider value={age}>
                    <FunChild />
                    <h1>类组件↓</h1>
                    <ClassChild />
                </AgeContext.Provider>
            </NameContext.Provider>
        )
    }
}