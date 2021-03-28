import defaultProps from '../dataStore/defaultProps';
import {
   MEASURE_OK, MEASURE_BAD, NEW_MEASURE, MEASURE_LOADING 
  
} from '../actions/actionTypes';


const measureReducer = (measure = {}, { type, payload }) => {
  switch (type) {
    case MEASURE_OK:
      return { ...measure, item: payload, loading: false };
    case NEW_MEASURE:
      return { ...measure, item: defaultProps.measure.item, loading: false };
    case MEASURE_BAD:
      return { ...measure, message: payload.message, loading: false };
    case MEASURE_LOADING:
      return { ...measure, loading: true };
    default:
      return measure;
  }
};
export default measureReducer;