//存储入口
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
import userReducer from './user'
import { serverAxios, clientAxios } from '../request'


const reducer = combineReducers({
    index: indexReducer,
    user: userReducer
})

//创建store
// const store = createStore(reducer, applyMiddleware(thunk))

// export default store

export const getServerStore = () => {
    //服务端
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
}
export const getClientStore = () => {
    // 通过window__context传递
    const defaultState = window.__context ? window.__context : {};

    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))

}