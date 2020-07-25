import React from 'react';

import TaskCollection from '../task-collection/task-collection.component';
import CommentCollection from '../../components/comment-collection/comment-collection.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './plan.styles.scss';

const Plan = (props) => {

    return(
      <div className='plan'>
        <div className='info'>
          <textarea className='title' placeholder='Имя Фамилия Отчество'></textarea>
          <textarea className='position' placeholder='Должность'></textarea>
          <textarea className='hr' placeholder='Кадровый сотрудник'></textarea>
          <textarea className='boss' placeholder='Руководитель'></textarea>
          <span className='grade'>Оценка</span>
          <span className='result'>Выполнено</span>
          <h2>Комментарии</h2>
          <CommentCollection/>
        </div>
          <div className='tasks-and-nav'>
            <div className='nav'>
              <CustomButton text='Скачать в PDF'/>
              <CustomButton text='Передвинуть на следующий этап'/>
            </div>
              <h2>Задачи</h2>
              <TaskCollection />
          </div>
      </div>
    );
}

export default Plan;