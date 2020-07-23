import React from 'react';
import './sign-in-form.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import InputField from '../input-field/input-field.component';
import Logo from '../logo/logo.component';


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
            <div className='sign-in'>
                <h2>Register:</h2>
                <span>Sign in using email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <InputField 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        //label='Email'
                        placeholder="Your email"
                        required/>
                    <InputField 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        //label='Password'
                        placeholder="Your password"
                        required/>
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="submit">Sign up</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}



/*const SignInForm = () => (
    <div className='sign-in-form'>
        
    </div>
)*/

export default SignInForm;