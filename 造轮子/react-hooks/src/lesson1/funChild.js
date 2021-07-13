import React from 'react'
import { NameContext, AgeContext } from './creatContext'

export default function FunChild() {

    return (
        <div>
            <NameContext.Consumer>
                {name => { return <p>函数组件中的name: {name}</p> }}
            </NameContext.Consumer>
            <AgeContext.Consumer>
                {age => { return <p>函数组件中的age: {age}</p> }}
            </AgeContext.Consumer>

            <h1>函数组件中的嵌套尝试↓</h1>
            
            <NameContext.Consumer>
                {name => {
                    return <div>
                        我的名字叫{name}
                        <AgeContext.Consumer>
                            {age => { return <p>我的年龄是{age}</p> }}
                        </AgeContext.Consumer>
                    </div>
                }}

            </NameContext.Consumer>
        </div>
    )
}
