import UserActionTypes from './user.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/users';


 export function  loginUser(dataToSubmit) {
    const request = axios.post(`${apiUrl}/login`, (dataToSubmit))
    .then(response => response.data)

    return {
        type: UserActionTypes.LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {

}