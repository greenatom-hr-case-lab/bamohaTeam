import UserActionTypes from './user.types';

const INITIAL_STATE = {
    user: null
}

/*const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.q:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}*/

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.REGISTER_USER:
            return { ...state, user: action.payload }
        case UserActionTypes.LOGIN_USER:
            return { ...state, user: action.payload }
        case UserActionTypes.AUTH_USER:
            return { ...state, userData: action.payload }
        case UserActionTypes.LOGOUT_USER:
            return { ...state, user: null }
        default: 
            return state;
        }
}

export default userReducer;