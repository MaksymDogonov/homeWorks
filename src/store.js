import {createStore} from "redux";

export const TaskType = {
    ADD_TASK: 'ADD_TASK',
    REMOVE_TASK: 'REMOVE_TASK',
    REMOVE_ALL_TASKS: 'REMOVE_ALL_TASKS'
}

const defaultState = {
    tasks: [],
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case TaskType.ADD_TASK:
            return {...state, tasks: [action.payload, ...state.tasks]};
        case TaskType.REMOVE_TASK:
            return {...state, tasks: state.tasks.filter((task) => task.uuid !== action.payload)};
        case TaskType.REMOVE_ALL_TASKS:
            return {...state, tasks: []};
        default:
            return state
    }
}

const store = createStore(reducer);

export default store
