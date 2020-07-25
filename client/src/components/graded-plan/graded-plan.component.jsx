import React from 'react';

import {Link} from 'react-router-dom';

import './graded-plan.styles.scss';

const GradedPlan = () => (
    
        <Link 
            className='graded-plan'
            to={{
                pathname: '/c/plan/1',
                state: { modal: true }
            }}
        >
            <span className='name'>Имя Фамилия Отчетво</span>
            <span className='grade'>A</span>
            <span className='result'>Выполнено</span>
        </Link>   

)

export default GradedPlan;