import React from 'react';

import TaskItem from '../task-item/task-item.component';

import './task-collection.styles.scss';

const TaskCollection = () => {

    return(
        <div className='task-collection'>
            <textarea className='new-task' placeholder='Добавить задачу'></textarea>
            <TaskItem />
            <TaskItem />
        </div>
    )
}

export default TaskCollection;