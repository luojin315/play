import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUserInfo } from '../store/user'
import { Redirect } from 'react-router-dom'


function Home(props) {
    useEffect(() => {
        if (!props.userInfo.name) {

            //客户端获取    如果不是直接访问首页 通过路由访问首页list没数据需要重新获取
            props.getUserInfo()

        }
    }, []);
    return <Redirect to="/login"></Redirect>

    // (
    //     <div>
    //         <h1>你好{props.userInfo.name}</h1>
    //     </div>
    // )
}
Home.loadData = (store) => {
    return store.dispatch(getUserInfo())
}

export default connect(
    state => ({ userInfo: state.user.info }),
    { getUserInfo }
)(Home)