import React from 'react';

import {Link} from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = () => {

    return(
      //  <div className='collection-item'>
            
            <Link 
                className='collection-item'
                to={{
                    pathname: '/modal/1',
                    state: { modal: true }
                }}
            >
                <span className='name'>Name Surname</span>
            </Link>
      //  </div>      
    )
}

export default CollectionItem;