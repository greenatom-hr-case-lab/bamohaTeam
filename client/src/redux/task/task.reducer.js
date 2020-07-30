import TaskActionTypes from './task.types';

const INITIAL_STATE = {
    tasks: []
}

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case TaskActionTypes.EDIT_TASK:
            return {
                ...state,
                task: action.payload
            }
        default:
            return state;
    }
}

export default taskReducer;