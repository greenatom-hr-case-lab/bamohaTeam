import axios from 'axios';

export default () => {
  return {
    getPlans: () => axios.get('/plan'),
    deletePlan: ({ id }) => axios.delete(`/plan/${id}`),
    updatePlan: ({ id, data }) => axios.put(`/plan/${id}`, data),
    createPlan: ({ id, data }) => axios.post(`/plan/${id}`, data),
  };
};