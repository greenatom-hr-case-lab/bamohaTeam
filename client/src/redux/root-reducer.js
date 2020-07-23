import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import planReducer from './plan/plan.reducer';
import taskReducer from './task/task.reducer';
import commentReducer from './comment/comment.reducer';

export default combineReducers({
    user: userReducer,
    plan: planReducer,
    task: taskReducer,
    comment: commentReducer
})