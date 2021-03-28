import axios from 'axios';
import Storage from '../helpers/localStorage';

import {
  measureLoading, measureOk, measureBad, newMeasure,
  statisticsMeasurements, statisticsLoadingMeasurements, statisticsMeasurementsBad,
  myMeasurementsOk, myMeasurementsBad, myMeasurementsLoading,
} from '../actions';

export const deleteMeasureThunk = ({ id, subjectId }) => dispatch => {
  dispatch(measureLoading());
  return axios
    .delete(
      `/api/v1/courses/${subjectId}/measurements/${id}`,
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(newMeasure());
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(measureBad());
    });
};

export const updateMeasureThunk = ({
  id, units, subjectId, dateM,
}) => dispatch => {
  dispatch(measureLoading());
  return axios
    .patch(
      `/api/v1/courses/${subjectId}/measurements/${id}`,
      {
        units,
        date_m: dateM,
      },
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(measureOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(measureBad());
    });
};

export const fetchMeasureThunk = ({ id, subjectId }) => dispatch => {
  dispatch(measureLoading());
  return axios
    .get(
      `/api/v1/courses/${subjectId}/measurements/${id}`,
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(measureOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(measureBad());
    });
};

export const measureThunk = ({ units, subjectId, dateM }) => dispatch => {
  dispatch(measureLoading());
  return axios
    .post(
      `/api/v1/courses/${subjectId}/measurements`,
      {
        units,
        date_m: dateM,
      },
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(measureOk(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(measureBad());
    });
};

export const measurementsThunk = subjectId => dispatch => {
  dispatch(myMeasurementsLoading());
  dispatch(statisticsLoadingMeasurements());
  axios
    .get(
      `/api/v1/courses/${subjectId}/measurements`,
      {
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(myMeasurementsOk(response.data));
        dispatch(statisticsMeasurements(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(myMeasurementsBad(error.response.data));
      dispatch(statisticsMeasurementsBad());
    });
};

export const myMeasurementsThunk = date => dispatch => {
  dispatch(myMeasurementsLoading());
  dispatch(statisticsLoadingMeasurements());
  axios
    .get(
      '/api/v1/measurements',
      {
        params: {
          date,
        },
        headers: {
          Authorization: `Bearer ${Storage.getToken()}`,
        },
      },
      { withCredentials: true },
    )
    .then(response => {
      if (response.status === 200) {
        dispatch(myMeasurementsOk(response.data));
        dispatch(statisticsMeasurements(response.data));
      }
      return response.data;
    })
    .catch(error => {
      Storage.checkToken(error);
      dispatch(myMeasurementsBad(error.response.data));
      dispatch(statisticsMeasurementsBad());
    });
};