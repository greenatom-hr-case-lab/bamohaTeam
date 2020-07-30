import TaskActionTypes from './task.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/tasks';

export const getPlansTasks = async (_id) => {
    const request = axios.get(`${apiUrl}/getTasks?id=${_id}`)
        .then(response => {

            return response.data;
        })

        return {
            type: TaskActionTypes.GET_TASKS,
            payload: request
          } 
};
 
export const editTask = (_id, title, description, start_date, end_date, result, comments, grade) => {
  return (dispatch) => {
    axios.patch(`${apiUrl}/createTask`, {
        title: title, 
        description: description, 
        start_date: start_date, 
        end_date: end_date, 
        result: result, 
        comments: comments,
        grade: grade})
    .then(response => {dispatch({type: TaskActionTypes.EDIT_TASK, payload: response.data});
    })
  }
};

export const createTask = (_id, title, description, start_date, end_date, result, comments, grade) => {
  return (dispatch) => {
    axios.post(`${apiUrl}/createTask`, {
        _id: _id,  //plan._id
        title: title, 
        description: description, 
        start_date: start_date, 
        end_date: end_date, 
        result: result, 
        comments: comments,
        grade: grade})
    .then(response => {dispatch({type: TaskActionTypes.ADD_TASK, payload: response.data});
    })
  }
};

