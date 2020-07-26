import CommentActionTypes from './comment.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/comments';

export const getPlansComments = async (_id) => {
    const request = axios.get(`${apiUrl}/getPlansComments?id=${_id}`)
        .then(response => {

            return response.data;
        })

        return {
            type: CommentActionTypes.GET_PLANS_COMMENTS,
            payload: request
          } 
};

export const getTasksComments = async (_id) => {
    const request = axios.get(`${apiUrl}/getTasksComments?id=${_id}`)
        .then(response => {

            return response.data;
        })

        return {
            type: CommentActionTypes.GET_TASKS_COMMENTS,
            payload: request
          } 
};

export const createComment = async () => {
    const request = axios.post(`${apiUrl}/createComment`)
      .then(response => {


        return response.data;
      })

      return {
        type: CommentActionTypes.ADD_COMMENT,
        payload: request
      }
};

export const deleteComment = async (_id) => {
    const request = axios.delete(`${apiUrl}/removeComment${_id}`)
      .then(response => {


        return response.data;
      })

      return {
        type: CommentActionTypes.REMOVE_COMMENT,
        payload: request
      }
};