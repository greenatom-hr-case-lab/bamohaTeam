import React from 'react';
import './sign-up-form.styles.scss';
import { registerUser } from "../../redux/user/user.actions";
import { connect } from 'react-redux';

import InputField from '../input-field/input-field.component';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        if (email && password && displayName) {
            console.log(email,password)
            this.props.registerUser(displayName, email, password);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up-form'>
                <h2 className='title'>Регистрация</h2>
                <span className='subtitle'>Создайте аккаунт</span>

                <form onSubmit={this.handleSubmit}>
                    <InputField 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Фамилия Имя Отчество'
                        required
                    />
                    <InputField 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <InputField 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Пароль'
                        required
                    />
                    <InputField 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Подтвердите пароль'
                        required
                    />
                    <button className='form-button' type='submit'>Создать аккаунт</button>
                </form>
            </div>
        )
    }

}

const actionsCr = {
    registerUser: registerUser 
}

export default connect(null, actionsCr)(SignUpForm);