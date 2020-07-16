import UserActionTypes from './user.types';

const INITIAL_STATE = {
    
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.q:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default userReducer;