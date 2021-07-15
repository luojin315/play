import { createStore } from 'redux'

function countReducer(state = false, action) {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case 1: return true;

        case 0: return false;

        default: return state;
    }
}


export const countState = createStore(countReducer);
