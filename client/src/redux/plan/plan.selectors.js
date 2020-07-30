import {createSelector} from 'reselect';

const selectPlans = state => state.plans;

export const selectPlan = createSelector(
    [selectPlans],
    (plans) => plans
)