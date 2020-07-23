import PlanActionTypes from './plan.types';

const INITIAL_STATE = {
    
}

const planReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PlanActionTypes.q:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default planReducer;