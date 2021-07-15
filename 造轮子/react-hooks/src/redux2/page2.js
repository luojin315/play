import React, { Component } from 'react'
import { connect } from 'react-redux'


export default connect(
    // mapStateToProps  映射给state
    state => ({ num: state })
)(class page2 extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                2
            </div>
        )
    }
}
)

