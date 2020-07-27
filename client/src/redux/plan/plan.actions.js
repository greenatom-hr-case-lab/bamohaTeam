import PlanActionTypes from './plan.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/plans';

export const createPlan = async ({ employee, boss, hr, position, created_at, 
                                start_date, end_date, stage, grade, result }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/createPlan`, {employee, boss, hr, position, created_at, 
                                                start_date, end_date, stage, grade, result})
        .then(response => {
          dispatch(createPostSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
   
  export const createPlan = async (data) => {
    return {
      type: PlanActionTypes.ADD_PLAN,
      payload: {
        _id: data._id,
        employee: data.employee,
        boss: data.boss,
        hr: data.hr,
        position: data.position,
        created_at: data.created_at,
        start_date: data.start_date,
        end_date: data.end_date,
        stage: data.stage,
        grade: data.grade,
        result: data.result
      }
    }

    
  };
  

  export const getUsersPlans = async (_id) => {
    const request = axios.get(`${apiUrl}/getPlans`)
      .then(response => {
        console.log(response);

        return response.data;
      })
    
    return {
      type: PlanActionTypes.GET_PLANS,
      payload: request
    }
  };


  export const editPlan = async (_id) => {
    const request = axios.put(`${apiUrl}/editPlan&id=${_id}`)
      .then(response => {


        return response.data;
      })

      return {
        type: PlanActionTypes.EDIT_PLAN,
        payload: request
      }
  };

  export const moveStage = async (_id) => {
    const request = axios.put(`${apiUrl}/moveStage&id=${_id}`)
      .then(response => {


        return response.data;
      })

      return {
        type: PlanActionTypes.MOVE_STAGE,
        payload: request
      }
  }