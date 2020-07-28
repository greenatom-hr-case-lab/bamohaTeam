import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { loginUser } from "../../redux/user/user.actions";
import './sign-in-form.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import {connect} from 'react-redux';
import InputField from '../input-field/input-field.component';


//const dispatch = useDispatch()

class SignInForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

 
    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        loginUser(email,password)
            //.then(response => { console.log("success")
              //if (response.payload.loginSuccess) {
                //window.localStorage.setItem('userId', response.payload.userId);
               // props.history.push("/");
              
        this.setState({email: '', password: ''});
        //}) 
     }
        

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    // /*submitHandler =  (values, { setSubmitting }) => {
    //     setTimeout(() => {
    //       let dataToSubmit = {
    //         email: values.email,
    //         password: values.password
    //       };

    //       dispatch(loginUser(dataToSubmit))
    //         .then(response => {
    //           if (response.payload.loginSuccess) {
    //             window.localStorage.setItem('userId', response.payload.userId);
    //             props.history.push("/");
    //           } /*else {
    //             setFormErrorMessage('Check out your Account or Password again')
    //           }*/
    //         })
    //         .catch(err => {
    //           //setFormErrorMessage('Check out your Account or Password again')
    //           setTimeout(() => {
    //            // setFormErrorMessage("")
    //           }, 3000);
    //         });
    //       setSubmitting(false);
    //     }, 500);
    //   }


 
      render() {
        return (           

            <div className='sign-in-form'>
                <h2 className='title'>Вход</h2>
                <span className='subtitle'>Войдите с помощью своего email и пароля</span>

                <form onSubmit={this.handleSubmit}>
                    <InputField 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required/>
                    <InputField 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Пароль'
                        required/>
                    <button className='form-button' type="submit">Войти</button>
                </form>
            </div>
        );
      }
}


export default SignInForm;