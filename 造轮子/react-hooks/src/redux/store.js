import { createStore } from 'redux'

function countReducer(state = 0, action) {
    switch (action.type) {
        case "ADD": return state + 1;

        case "MINUS": return state - 1;

        default: return state;
    }
}

function count2Reducer(state = 0, action) {
    switch (action.type) {
        case "ADD": return state + 1;

        case "MINUS": return state - 1;

        default: return state;
    }
}



export const countState = createStore(countReducer);
export const countState2 = createStore(count2Reducer);
