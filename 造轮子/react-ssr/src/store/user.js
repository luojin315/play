//首页的逻辑
import axios from 'axios'

const GET_LIST = 'INDEX/USER_INFO'

//actin
const changeList = data => ({
    type: GET_LIST,
    data
})

export const getUserInfo = server => {
    return (dispatch, getState, axiosInstance) => {
        return axios.get('http://localhost:9094/api/user')
            .then(res => {
                const { data } = res.data;
                console.log('用户信息', data)
                dispatch(changeList(data))
            })
    }
}

const defaultState = {
    info: {}
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case GET_LIST:
            const newState = {
                ...state,
                info: action.data
            }
            return newState;
        default:
            return state
    }
}