import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


export default connect(
    // mapStateToProps  映射给state
    state => ({ num: state }),
    //mapDispatchToProps 把dispatch映射到props
    {
        add: () => ({ type: 1 })
    }

)(class page1 extends Component {
    render() {
        console.log(this.props)

        return (
            <div>
                asdasdasd
                <hr></hr>
                <h2 onClick={this.props.add}>click</h2>
                <Link to="/page2">page2</Link>
                <iframe src="/Page3" title="asd"></iframe>
            </div>
        )
    }
})


