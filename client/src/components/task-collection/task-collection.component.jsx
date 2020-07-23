import React from 'react';

import TaskItem from '../task-item/task-item.component';

import './task-collection.styles.scss';

const TaskCollection = () => {

    return(
        <div className='task-collection'>
            <TaskItem />
            <TaskItem />
            <button>Добавить задачу</button>
        </div>
    )
}

export default TaskCollection;