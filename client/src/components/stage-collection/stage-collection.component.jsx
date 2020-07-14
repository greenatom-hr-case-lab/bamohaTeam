import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './stage-collection.styles.scss';

const StageCollection = () => (
    
    <div className='stage-collection'>
        <span className='stage-title'>Title</span>
        <CollectionItem />
        <CollectionItem />
    </div>
)

export default StageCollection;