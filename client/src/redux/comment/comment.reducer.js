import CommentActionTypes from './comment.types';

const INITIAL_STATE = {
    
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CommentActionTypes.q:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}

export default commentReducer;