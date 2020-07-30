import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getPlanEmployeeNames } from "../../redux/plan/plan.actions";

import StageCollection from '../stage-collection/stage-collection.component';

import './list-collection.styles.scss'
//= ({plans, user_id}) =>
class ListCollection extends React.Component{

    constructor(props) {
        super(props);
      }

    /* 
        plans_1 = plans, где stage == 1
        2
        3
        4
        5
        
    */

 componentDidMount = async event => {
        this.props.getPlanEmployeeNames(this.props.user_id);
        console.log(this.props.user_id)
    }

render(){
   return (
        
        <div className='list-collection'>
            <StageCollection key='1' title='Создание плана' plans={this.props.plans}/>
            <StageCollection key='2' title='Заполнение сотрудником'/>
            <StageCollection key='3' title='Согласование руководителем'/>
            <StageCollection key='4' title='Выполнение'/>
            <StageCollection key='5' title='Оценка руководителем'/>
        </div>
    )
    }
}


const mapStateToProps = state => {
    return {
      plans: state.plan.plans.plans,
      user_id: state.user.user._id
    }
  }

  const actionsCr = {
    getPlanEmployeeNames: getPlanEmployeeNames 
}

export default connect(mapStateToProps, actionsCr)(ListCollection);