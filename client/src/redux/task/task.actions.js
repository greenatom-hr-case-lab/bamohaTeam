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

export const editTask = async (_id) => {
    const request = axios.put(`${apiUrl}/editTask&id=${_id}`)
      .then(response => {


        return response.data;
      })

      return {
        type: TaskActionTypes.EDIT_TASK,
        payload: request
      }
};

export const createTask = async () => {
    const request = axios.post(`${apiUrl}/createTask`)
      .then(response => {


        return response.data;
      })

      return {
        type: TaskActionTypes.ADD_TASK,
        payload: request
      }
};

export const deleteTask = async (_id) => {
    const request = axios.delete(`${apiUrl}/removeTask${_id}`)
      .then(response => {


        return response.data;
      })

      return {
        type: TaskActionTypes.REMOVE_TASK,
        payload: request
      }
};

