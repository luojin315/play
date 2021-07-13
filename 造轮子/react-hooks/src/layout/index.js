import React, { Component } from 'react'
import Layout from './Layout'
export default class index extends Component {
    render() {
        return (
            <Layout bottom={true} top={true} title={"首页"}>
                {{
                    content: <div>内容</div>,
                    btnClick: () => {console.log("click me!")}
                }}
                <div>中间显示的文字</div>
            </Layout>
        )
    }
}
