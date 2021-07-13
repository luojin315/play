import React, { Component } from 'react'


const divStyle = {
    width: '100%',
    height: '100px',
    textAlign: 'center',
    lineHeight: '100px'
}
export default class Layout extends Component {
    componentDidMount() {
        document.title = this.props.title || "未设置"
    }
    render() {
        const { children, top, bottom } = this.props
        console.log(this.props)
        return (
            <>
                {top && <header style={divStyle}>header</header>}
                {children[0].content}
                <button onClick={children[0].btnClick}>click me!</button>
                {bottom && <footer style={divStyle}>footer</footer>}
            </>
        )
    }
}
