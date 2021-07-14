import React, { Component } from 'react'
import { connect } from 'react-redux'



export default connect(
    // mapStateToProps  映射给state
    state => ({ num: state }),
    //mapDispatchToProps 把dispatch映射到props
    {
        add: () => ({ type: 'ADD' }),
        minus: () => ({ type: 'MINUS' }),
    }

)(class index extends Component {
    render() {
        const { num, add, minus } = this.props;
        console.log(this.props)
        return (
            <div>
                <h2>{num}</h2>
                <button onClick={add}>加法</button>
                <button onClick={minus}>减法</button>
            </div>
        )
    }
})

