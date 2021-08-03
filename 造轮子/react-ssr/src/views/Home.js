import React from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'


function Home(props) {
    console.log(props)
    return (
        <div>
            <h1>你好{props.userInfo.name}</h1>
        </div>
    )
}
Home.loadData = (store) => {
    return store.dispatch(getUserInfo())
}

export default connect(
    state => ({ userInfo: state.user.info }), 
    // { getUserInfo }
)(Home)