import React from 'react';

import StageCollection from '../stage-collection/stage-collection.component';

import './list-collection.styles.scss'

const ListCollection = ({items}) => (
    <div className='list-collection'>
        <StageCollection key='1' title='Создание плана'/>
        <StageCollection key='2' title='Заполнение сотрудником'/>
        <StageCollection key='3' title='Согласование руководителем'/>
        <StageCollection key='4' title='Выполнение'/>
        <StageCollection key='5' title='Оценка руководителем'/>
    </div>
)

export default ListCollection;