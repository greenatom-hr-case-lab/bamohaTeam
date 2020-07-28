import UserActionTypes from './user.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/users';


 export function loginUser2(email, password) {
    //console.log(email,password)
    const request = axios.post(`${apiUrl}/login`, {email: email, password: password})
    .then(response => response.data)

    return {
        type: UserActionTypes.LOGIN_USER,
        payload: request
    }
}

export const loginUser = (email, password) => {
    console.log(email,password)
    return (dispatch) =>{
    axios.post(`${apiUrl}/login`, {email: email, password: password})
    .then(response => {dispatch({type: UserActionTypes.LOGIN_USER, payload: response.data});
    })
    }
}

const login = user => ({
    type: UserActionTypes.LOGIN_USER,
    payload: {
      ...user
    }
  });

export function registerUser(dataToSubmit) {

}