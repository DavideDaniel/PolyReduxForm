import { createSelector } from 'reselect';

const getForm = state => state.form

export const getForms = createSelector(
  getForm,
  (o) => Object.values(o)
);
