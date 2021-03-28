import {
  MY_COURSES_OK, MY_COURSES_BAD, MY_COURSES_LOADING, COURSES_OK, COURSES_BAD, COURSES_LOADING
  
} from '../actions/actionTypes';

const subjectReducer = (subject = {}, { type, payload }) => {
  switch (type) {
    case MY_COURSES_OK:
      return { ...subject, mySubjects: payload, myLoading: false };
    case MY_COURSES_BAD:
      return { ...subject, myMessage: payload.message, myLoading: false };
    case MY_COURSES_LOADING:
      return { ...subject, myLoading: true };
    case COURSES_OK:
      return { ...subject, subjects: payload, loading: false };
    case COURSES_BAD:
      return { ...subject, message: payload.message, loading: false };
    case COURSES_LOADING:
      return { ...subject, loading: true };
    default:
      return subject;
  }
};
export default subjectReducer;