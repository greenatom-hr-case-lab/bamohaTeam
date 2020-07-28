import React from 'react';

import TaskItem from '../task-item/task-item.component';

import './task-collection.styles.scss';

const TaskCollection = (props) => {

    {/* 
        const {tasks} = 

        tasks
            .map((task) => (
                <TaskItem key={task.id} task={task} />
            ))
    */}

    return(
        <div className='task-collection'>
            <form action="">
                <textarea className='new-task' placeholder='Добавить задачу'></textarea>
                <button className='task-button'>Добавить</button>
            </form>

           <TaskItem />
            <TaskItem />
        </div>
    )
}

export default TaskCollection;