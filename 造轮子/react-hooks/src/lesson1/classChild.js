
import React, { Component } from 'react'
import { NameContext, AgeContext } from './creatContext'
export default class child extends Component {

    render() {
        return (
            <div>
                <NameContext.Consumer>
                    {data => { return <p>类组件接收的name：{data}</p> }}

                </NameContext.Consumer>

                <AgeContext.Consumer>
                    {data => { return <p>类组件接收的age：{data}</p> }}
                </AgeContext.Consumer>
                <h3>下方是类组件中嵌套尝试</h3>

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
}