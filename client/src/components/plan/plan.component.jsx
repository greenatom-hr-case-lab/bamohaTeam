import React from 'react';

import TaskCollection from '../task-collection/task-collection.component';
import CommentCollection from '../../components/comment-collection/comment-collection.component';

import Dropdown from 'react-dropdown';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

import 'react-dropdown/style.css';
import './plan.styles.scss';

const Plan = (props) => {

  const employeeOptions = [
    'Biram', 'Taty'
  ]
  const hrOptions = [
    'Dmitry', 'Kate'
  ]
  const bossOptions = [
    'Max', 'De La Floer'
  ]

  const onSubmit = (event) => {
    event.preventDefault();

 
  }



    return(
      <form className='plan' onSubmit={onSubmit}>
        <div className='info'>

          <p className='title'>Сотрудник</p>
          <Dropdown controlClassName='employee' options={employeeOptions}  value={employeeOptions} placeholder="Выберите сотрудника" />
          
          <textarea className='position' placeholder='Укажите должность'></textarea>

          <p className='title'>Сотрудник отдела кадров</p>
          <Dropdown controlClassName='hr' options={hrOptions}  value={hrOptions} placeholder="Выберите сотрудника отдела кадров" />

          <p className='title'>Руководитель</p>
          <Dropdown controlClassName='boss' options={bossOptions}  value={bossOptions} placeholder="Выберите руководителя" />

          <p className='title'>Оценка</p>
          <RadioGroup horizontal>
            <RadioButton pointColor='aqua' value="A">A</RadioButton>
            <RadioButton pointColor='aqua' value="B">B</RadioButton>
            <RadioButton pointColor='aqua' value="C">C</RadioButton>
            <RadioButton pointColor='aqua' value="D">D</RadioButton>
            <RadioButton pointColor='aqua' value="E">E</RadioButton>
          </RadioGroup>

          <p className='title'>Результат</p>
          <RadioGroup >
            <RadioButton pointColor='aqua' value="Done">Адаптация пройдена</RadioButton>
            <RadioButton pointColor='aqua' value="Not_done">Адаптация не пройдена</RadioButton>
          </RadioGroup>

          <div className='nav'>
              <button className='form-button'>Сохранить план</button>
              <button className='form-button'>Скачать в PDF</button>
              <button className='form-button'>Передвинуть на следующий этап</button>
            </div>
            
          <p className='title'>Комментарии</p>
          <CommentCollection/>
        </div>

          <div className='tasks'>

              <p className='title'>Задачи</p>
              <TaskCollection />
          </div>
      </form>
    );
}

export default Plan;