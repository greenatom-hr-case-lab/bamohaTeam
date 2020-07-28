import React, { useEffect, useState } from 'react';
import { loginUser } from "../../redux/user/user.actions";
import './sign-in-form.styles.scss';
//import { useSelector, useDispatch } from 'react-redux';
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
        //const dispatch = useDispatch()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        
        if (email && password) {
            console.log(email,password)
            this.props.loginUser(email, password);
        }
     }
        

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
 
      render() {
       // const { loggingIn } = this.props;
        const {email, password} = this.state;
        return (           

            <div className='sign-in-form'>
                <h2 className='title'>Вход</h2>
                <span className='subtitle'>Войдите с помощью своего email и пароля</span>

                <form onSubmit={this.handleSubmit}>
                    <InputField 
                        name="email" 
                        type="email" 
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required/>
                    <InputField 
                        name="password" 
                        type="password" 
                        value={password} 
                        onChange={this.handleChange}
                        label='Пароль'
                        required/>
                    <button className='form-button' type="submit">Войти</button>
                </form>
            </div>
        );
      }

}

const actionsCr = {
    loginUser: loginUser 
}

export default connect(null, actionsCr)(SignInForm);