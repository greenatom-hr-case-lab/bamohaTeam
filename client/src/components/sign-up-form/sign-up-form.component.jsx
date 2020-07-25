import React from 'react';
import './sign-up-form.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import InputField from '../input-field/input-field.component';
import Logo from '../logo/logo.component';

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
            alert('Passwords don\'t match');
            return;
        }

        try {
            //const {user} = await auth.createUserWithEmailAndPassword(email, password);
           
            //await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error();
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }
    
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>Register:</h2>
                <span className='subtitle'>Sign up using email and password</span>

                <form className='sign-in-form' onClick={this.handleSubmit}>
                    <InputField 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        //label='Display Name'
                        placeholder="Your name"
                        required
                    />
                    <InputField 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        //label='Email'
                        placeholder="Your email"
                        required
                    />
                    <InputField 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        //label='Password'
                        placeholder="Your password"
                        required
                    />
                    <InputField 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        //label='Confirm password'
                        placeholder="Your confirm password"
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                </form>
            </div>
        )
    }

}


/*const SignUpForm = () => (
    <div className='sign-up-form'>
        
    </div>
)*/

export default SignUpForm;