import PlanActionTypes from './plan.types';

const INITIAL_STATE = {
    plans: []
}

const planReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case PlanActionTypes.ADD_PLAN:
            return {
                ...state,
                plans: [...state.plans, action.payload]
            }            

        case PlanActionTypes.EDIT_PLAN:
            return {
                ...state,
                 
            }

        case PlanActionTypes.GET_PLANS:
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