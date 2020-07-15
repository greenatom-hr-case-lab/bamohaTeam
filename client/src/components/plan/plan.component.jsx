import React from 'react';

import TaskCollection from '../task-collection/task-collection.component';
import CommentCollection from '../../components/comment-collection/comment-collection.component';

import './plan.styles.scss';

const Plan = (props) => {

    return(
        <div className='plan'>
            <span className='title'>Фамилия Имя Отчетсво</span>
            <p>Руководитель - delafroer</p>
            <p>HR - dmitry</p>
            <p>Должность - janitor</p>
            <p>Оценка</p>
            <TaskCollection />
            <CommentCollection/>
        </div>
    );
}

export default Plan;