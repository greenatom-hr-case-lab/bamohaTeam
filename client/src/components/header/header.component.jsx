import React from 'react';

import {Link} from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link 
            className='logo-container'
            to='/plans'>
                ADAPTATION
        </Link>
        
        <div className='navigation'>
        	<Link to='/grades' className='nav-option'>Оценки</Link>
        	<Link to='/register' className='nav-option'>
                Профиль
                <img className='profile-pic' 
                    src={require('../../assets/users/christian.jpg')} 
                    alt='userpic'
                />
            </Link>
        </div>
    </div>
)

export default Header;