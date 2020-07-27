import React from 'react';

import {Link} from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = (props) => {

    {/* 
        plans

        {
        plans
            .map((plan) => (
                <Link key={plan.id} name={plan.name} />
            ))
        }

    */}

    return(
        <Link 
            className='collection-item'
            to={{
                pathname: `/c/plan/${//plan.id
                1}`,
                state: { modal: true }
            }}
        >
            <span className='name'>Name Surname</span>
        </Link>   
    )
}

export default CollectionItem;