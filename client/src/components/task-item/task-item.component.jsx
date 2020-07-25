import React from 'react';

import CommentCollection from '../../components/comment-collection/comment-collection.component';

import './task-item.styles.scss';

const TaskItem = () => (
    <div className='task-item'>
        <span className='caption'>Название задачи</span>
        <textarea className='description'>Описание</textarea>
        <div className='dates'>
            <span> Начало - </span>   
            <span> Конец - </span>  
        </div>
        <span className='grade'>Оценка</span>
        <span className='result'>Выполнено</span>
        <CommentCollection/>
    </div>
    
)

export default TaskItem;