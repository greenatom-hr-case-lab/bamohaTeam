import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getPlanEmployeeNames } from "../../redux/plan/plan.actions";

import StageCollection from '../stage-collection/stage-collection.component';

import './list-collection.styles.scss'

const ListCollection = ({plans, user_id}) => {

    {/* 
        plans_1 = plans, где stage == 1
        2
        3
        4
        5
        
    */}

    useEffect(() => {
        this.props.getPlanEmployeeNames(user_id);
    })

console.log(plans)
    return (
        
        <div className='list-collection'>
            <StageCollection key='1' title='Создание плана' plans={plans}/>
            <StageCollection key='2' title='Заполнение сотрудником'/>
            <StageCollection key='3' title='Согласование руководителем'/>
            <StageCollection key='4' title='Выполнение'/>
            <StageCollection key='5' title='Оценка руководителем'/>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      plans: state.plan.plans,
      user_id: state.user.user._id
    }
  }

  const actionsCr = {
    getPlanEmployeeNames: getPlanEmployeeNames 
}

export default connect(mapStateToProps, actionsCr)(ListCollection);