import { combineReducers } from 'redux';

import reports from '@reducers/Reports';

const appReducers = combineReducers({
  reports
});

export default appReducers;
