import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {logoutUser} from '../../redux/user/user.actions'
import './header.styles.scss';
import { render } from 'react-dom';



const Header = ({logoutUser}) => {

    const handleClick = async event => {
        event.preventDefault();
        this.props.logoutUser();
    }

    
    return(
    <div className='header'>
        <Link 
            className='logo-container'
            to='/plans'>
                ADAPTATION
        </Link>
        
        <div className='navigation'>
        	<Link to='/grades' className='nav-option'>Оценки</Link>
        	<button onClick={logoutUser} className='nav-option'>
                Профиль
                <img className='profile-pic' 
                    src={require('../../assets/users/christian.jpg')} 
                    alt='userpic'
                />
            </button>
        </div>
    </div>
        )
    }


    const mapDispatchToProps = dispatch => ({
        logoutUser:  dispatch(logoutUser())
    })

export default connect(null, mapDispatchToProps)(Header);