import UserActionTypes from './user.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/users';


export const loginUser = (email, password) => {
    console.log(email,password)
    return (dispatch) =>{
    axios.post(`${apiUrl}/login`, {email: email, password: password})
    .then(response => {dispatch({type: UserActionTypes.LOGIN_USER, payload: response.data});
    })
    }
}



 export const registerUser = ( name, email, password ) => {
    console.log(email,password)
    return (dispatch) => {
      axios.post(`${apiUrl}/register`, {name: name, email: email, password: password})
      .then(response => {dispatch({type: UserActionTypes.REGISTER_USER, payload: response.data});
      })
    }
}

export const logoutUser = () => ({

  type: UserActionTypes.LOGOUT_USER
});
