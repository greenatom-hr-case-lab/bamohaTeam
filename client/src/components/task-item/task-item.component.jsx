import React from 'react';

import CommentCollection from '../../components/comment-collection/comment-collection.component';

import { RadioGroup, RadioButton } from 'react-radio-buttons';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import './task-item.styles.scss';

const TaskItem = (props) => {

    return (
        <form className='task-item'>
            <textarea className='caption' placeholder='Название задачи'></textarea>
            <div className='dates'>
                <p className='title'> Начало </p>
                <DatePicker selected={new Date()}  />   
                <p className='title'> Конец </p>  
                <DatePicker selected={new Date()} />
            </div>
            <textarea className='description' placeholder='Описание'></textarea>

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
                <RadioButton pointColor='aqua' value="Done">Задача выполнена</RadioButton>
                <RadioButton pointColor='aqua' value="Not_done">Задача не выполнена</RadioButton>
            </RadioGroup>

            <button type='submit' className='form-button'>Сохранить задачу</button>

            <p className='title'>Комментарии</p>
            <CommentCollection/>
        </form>
    )
}

export default TaskItem;