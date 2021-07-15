import React, { Component } from 'react'
import { connect } from 'react-redux'


export default connect(
    // mapStateToProps  映射给state
    state => ({ num: state })
)(class page3 extends Component {
    click = () => {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                3asdasdsa
                <button onClick={this.click}>click me</button>
            </div>
        )
    }
}
)

