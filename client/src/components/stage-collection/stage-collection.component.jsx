import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import {Link} from 'react-router-dom';

import './stage-collection.styles.scss';

const StageCollection = ({title, items}) => (
    
    <div className='stage-collection'>
        <div className='title-block'>
            <span className='stage-title'>{title}</span>
            {
                title  === 'Создание плана'
                ? 
                <Link 
                    className='add-button'
                        to={{
                            pathname: '/c/plan/new',
                            state: { modal: true }
                        }}
                    >
                    <span>&#10010;</span>
                </Link>     
                : null
            }
        </div>
        <div className='items-block'>
           {/* {
                items.map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            } */}
             <CollectionItem />
             <CollectionItem />
        </div>
    </div>
)

export default StageCollection;