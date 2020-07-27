import TaskActionTypes from './task.types';

const INITIAL_STATE = {
    tasks: []
}

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TaskActionTypes.q:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default taskReducer;