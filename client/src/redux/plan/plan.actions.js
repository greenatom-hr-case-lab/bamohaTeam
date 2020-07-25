import PlanActionTypes from './plan.types';
import axios from 'axios';

const apiUrl = 'http://localhost:9000/plans';

export const createPlan = ({ employee, boss, hr, position, created_at, 
                                start_date, end_date, stage, grade, result }) => {
    return (dispatch) => {
      return axios.post(`${apiUrl}/create`, {employee, boss, hr, position, created_at, 
                                                start_date, end_date, stage, grade, result})
        .then(response => {
          dispatch(createPostSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const createPlanSuccess = (data) => {
    return {
      type: PlanActionTypes.ADD_ITEM,
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
  
  export const deletePlanSuccess = id => {
    return {
      type: PlanActionTypes.DELETE_ITEM,
      payload: {
        id
      }
    }
  }
  
  export const deletePlan = id => {
    return (dispatch) => {
      return axios.get(`${apiUrl}/delete/${id}`)
        .then(response => {
          dispatch(deletePlanSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
  
  export const fetchPlans = (plans) => {
    return {
      type: PlanActionTypes.FETCH_PLANS,
      plans
    }
  };
  
  export const fetchAllPosts = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchPlans(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };