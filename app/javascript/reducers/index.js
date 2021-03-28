import { combineReducers } from 'redux';
import authReducer from './auth';
import subjectReducer from './course';
import measurementReducer from './measurement';
import statisticsReducer from './stats';
import measureReducer from './measure';

const rootReducer = combineReducers({
  auth: authReducer,
  subject: subjectReducer,
  measurement: measurementReducer,
  statistics: statisticsReducer,
  measure: measureReducer,
});

export default rootReducer;