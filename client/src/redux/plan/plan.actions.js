import PlanActionTypes from './plan.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/plans';


export const createPlan = ( employee, boss, hr, position, created_at, 
    start_date, end_date, stage, grade, result ) => {
    return (dispatch) => {
      axios.post(`${apiUrl}/createPlan`, {employee: employee, boss: boss, hr: hr, position: position, created_at: created_at, 
        start_date: start_date, end_date: end_date, stage: stage, grade: grade, result: result})
      .then(response => {dispatch({type: PlanActionTypes.CREATE_PLAN, payload: response.data});
      })
    }
}
  
  
  export const getPlanInfo = (  plan_id ) => {
    return (dispatch) => {
      axios.post(`${apiUrl}/getPlanInfo`, {_id : plan_id})
      .then(response => {dispatch({type: PlanActionTypes.GET_PLAN_INFO, payload: response.data});
      })
    }
}


export const getPlanEmployeeNames = (  user_id ) => {
  return (dispatch) => {
    axios.post(`${apiUrl}/getPlansEmployeeNames`, {_id : user_id })
    .then(response => {dispatch({type: PlanActionTypes.GET_EMPLOYEE_NAMES, payload: response.data});
    })
  }
}


  export const editPlan = (  plan_id, employee, boss, hr, position, created_at, 
    start_date, end_date, stage, grade, result ) => {
    return (dispatch) => {
      axios.post(`${apiUrl}/editPlan`, {_id : plan_id, employee: employee, boss: boss, hr: hr, position: position, created_at: created_at, 
        start_date: start_date, end_date: end_date, stage: stage, grade: grade, result: result })
      .then(response => {dispatch({type: PlanActionTypes.EDIT_PLAN, payload: response.data});
      })
    }
}

export const moveStage = (  plan_id, stage ) => {
  return (dispatch) => {
    axios.post(`${apiUrl}/moveStage`, {_id : plan_id, stage: stage })
    .then(response => {dispatch({type: PlanActionTypes.MOVE_STAGE, payload: response.data});
    })
  }
}