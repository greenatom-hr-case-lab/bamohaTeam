import React from 'react';
import './sign-in-form.styles.scss';

import InputField from '../input-field/input-field.component';

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

        try {
            //await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log();
        }
        
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

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