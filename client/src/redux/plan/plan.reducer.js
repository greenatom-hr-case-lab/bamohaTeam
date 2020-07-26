import PlanActionTypes from './plan.types';

const INITIAL_STATE = {
    
}

const planReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PlanActionTypes.ADD_ITEM:
            return [
                ...state,
                action.payload
            ]
        case PlanActionTypes.DELETE_ITEM:
            return state.filter(plan => plan._id !== action.payload.id);
        case PlanActionTypes.EDIT_ITEM:
            return {
                ...state,
                
            }
        case PlanActionTypes.FETCH_PLANS:
            return action.plans;
        case PlanActionTypes.MOVE_STAGE:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default planReducer;