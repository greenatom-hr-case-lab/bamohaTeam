import React from 'react';

import {Link} from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = (props) => {

    return(

        <Link 
            className='collection-item'
            to={{
                pathname: '/c/plan/1',
                state: { modal: true }
            }}
        >
            <span className='name'>Name Surname</span>
        </Link>   
    )
}

export default CollectionItem;