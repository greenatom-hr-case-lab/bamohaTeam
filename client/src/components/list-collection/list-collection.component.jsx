import React from 'react';

import StageCollection from '../stage-collection/stage-collection.component';

import './list-collection.styles.scss'

const ListCollection = () => (
    <div className='list-collection'>
        <StageCollection />
        <StageCollection />
        <StageCollection />
        <StageCollection />
        <StageCollection />
        <StageCollection />
    </div>
)

export default ListCollection;