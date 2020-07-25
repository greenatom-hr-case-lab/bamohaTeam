import React from 'react';

import Modal from '../../components/modal/modal.component';
import {Link} from 'react-router-dom';
import GradedPlan from '../../components/graded-plan/graded-plan.component';

import './show-grades-page.styles.scss';

const ShowGradesPage = () => (
    <div className='show-grades-page'>
        <div className='grades-header'>
            <div className='header-block'>
                <span>Имя</span>
            </div>
            <div className='header-block'>
                <span>Оценка</span>
            </div>
            <div className='header-block'>
                <span>Результат</span>
            </div>
        </div>

        <GradedPlan />
        <GradedPlan />

    </div>
)

export default ShowGradesPage;