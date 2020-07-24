import React from 'react';

import TaskCollection from '../task-collection/task-collection.component';
import CommentCollection from '../../components/comment-collection/comment-collection.component';

import './plan.styles.scss';

const Plan = (props) => {

    return(
        <div className='plan'>
            <div className='info'>
                <textarea className='title'>Фамилия Имя Отчетсво</textarea>
                <textarea className='position'>Должность - janitor</textarea>
                <span className='hr'>HR - dmitry</span>
                <span className='boss'>Руководитель - delafroer</span>
                <span className='grade'>Оценка</span>
                <span className='result'>Выполнено</span>
                <CommentCollection/>
            </div>
            <div className='tasks'>
                <h2>Задачи</h2>
                <TaskCollection />
            </div>
        </div>
    );
}

export default Plan;