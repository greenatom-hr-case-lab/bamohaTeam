import CommentActionTypes from './comment.types';

const INITIAL_STATE = {
    comments: []
}

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CommentActionTypes.ADD_COMMENT:
            return {
                ...state,
                
            }
        case CommentActionTypes.REMOVE_COMMENT:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default commentReducer;