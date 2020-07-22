import React from 'react';

import './input-field.styles.scss';

const InputField = ({handleChange, label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>)
                : null
            }
        </div>
    );
}

/*const InputField = () => (
    <div className='input-field'>
        <input type="text" name="name" placeholder="Display Name" />
        <input type="text" name="e-mail" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password" name="confirm-password" placeholder="Confirm password" />
    </div>
)*/

export default InputField;