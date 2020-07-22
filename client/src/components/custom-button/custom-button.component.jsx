import React from 'react';

//import './custom-button.styles.scss';


const CustomButton = ({inverted, ...otherProps}) => {
    return (
        <button className={`
            ${inverted ? 'inverted' : '' } 
            custom-button`} {...otherProps}>
        </button>
    );
}

/*const CustomButton = () => (
    <div className='custom-button'>
        <Button onClick={} variant="outlined" name="sign in">SIGN IN</Button>
        <Button onClick={} variant="outlined" name="sign up">SIGN UP</Button>
    </div>
)*/

export default CustomButton;