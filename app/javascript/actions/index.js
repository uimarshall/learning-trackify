import {
    MEASURE_OK, MEASURE_BAD, MEASURE_LOADING, NEW_MEASURE, MY_COURSES_BAD,
    MY_COURSES_LOADING, MY_COURSES_OK, MY_MEASUREMENTS_BAD, MY_MEASUREMENTS_LOADING,
    MY_MEASUREMENTS_OK, COURSES_BAD, COURSES_LOADING, COURSES_OK, CLEAN_AUTH_MESSAGE,
    SIGN_UP_OK, SIGN_UP_BAD, STATISTICS_COURSES, STATISTICS_LOADING_COURSES,
    STATISTICS_LOADING_MEASUREMENTS, STATISTISCS_MEASUREMENTS_BAD, STATISTICS_MEASUREMENTS,
    LOGOUT
  
} from './actionTypes';

export function measureOk(measure) {
  return {
    type: MEASURE_OK,
    payload: measure,
  };
}

export function measureBad(data) {
  return {
    type: MEASURE_BAD,
    payload: data,
  };
}

export function newMeasure() {
  return {
    type: NEW_MEASURE,
  };
}

export function measureLoading() {
  return {
    type: MEASURE_LOADING,
  };
}

export function statisticsSubjects(subjects) {
  return {
    type: STATISTICS_COURSES,
    payload: subjects,
  };
}

export function statisticsMeasurements(measurements) {
  return {
    type: STATISTICS_MEASUREMENTS,
    payload: measurements,
  };
}

export function statisticsMeasurementsBad(measurements) {
  return {
    type: STATISTISCS_MEASUREMENTS_BAD,
    payload: measurements,
  };
}

export function statisticsLoadingSubjects() {
  return {
    type: STATISTICS_LOADING_COURSES,
  };
}

export function statisticsLoadingMeasurements() {
  return {
    type: STATISTICS_LOADING_MEASUREMENTS,
  };
}

export function myMeasurementsOk(subject) {
  return {
    type: MY_MEASUREMENTS_OK,
    payload: subject,
  };
}

export function myMeasurementsBad(error) {
  return {
    type: MY_MEASUREMENTS_BAD,
    payload: error,
  };
}

export function myMeasurementsLoading() {
  return {
    type: MY_MEASUREMENTS_LOADING,
  };
}

export function mySubjectsOk(subject) {
  return {
    type: MY_COURSES_OK,
    payload: subject,
  };
}

export function mySubjectsBad(error) {
  return {
    type: MY_COURSES_BAD,
    payload: error,
  };
}

export function mySubjectsLoading() {
  return {
    type: MY_COURSES_LOADING,
  };
}

export function subjectsOk(subject) {
  return {
    type: COURSES_OK,
    payload: subject,
  };
}

export function subjectsBad(error) {
  return {
    type: COURSES_BAD,
    payload: error,
  };
}

export function subjectsLoading() {
  return {
    type: COURSES_LOADING,
  };
}

export function signUpOk(auth) {
  return {
    type: SIGN_UP_OK,
    payload: auth,
  };
}

export function signUpBad(auth) {
  return {
    type: SIGN_UP_BAD,
    payload: auth,
  };
}

export function cleanAuthMessage() {
  return {
    type: CLEAN_AUTH_MESSAGE,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}