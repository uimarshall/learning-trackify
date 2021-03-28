import {
   STATISTICS_COURSES, STATISTICS_MEASUREMENTS, STATISTICS_MEASUREMENTS_BAD,
   STATISTICS_LOADING_COURSES, STATISTICS_LOADING_MEASUREMENTS
  
} from '../actions/actionTypes';
const statisticsReducer = (statistics = {}, { type, payload }) => {
  switch (type) {
    case STATISTICS_COURSES:
      return {
        ...statistics,
        subjects: { ...statistics.subjects, total: payload },
        loadingSubjects: false,
      };
    case STATISTICS_MEASUREMENTS:
      return {
        ...statistics,
        measurements: { ...statistics.measurements, total: payload.length },
        minutes: { ...statistics.minutes, total: payload.reduce(((a, b) => a + b.units), 0) },
        loadingMeasurements: false,
      };
    case STATISTICS_MEASUREMENTS_BAD:
      return { ...statistics, loadingMeasurements: false };
    case STATISTICS_LOADING_COURSES:
      return { ...statistics, loadingSubjects: true };
    case STATISTICS_LOADING_MEASUREMENTS:
      return { ...statistics, loadingMeasurements: true };
    default:
      return statistics;
  }
};
export default statisticsReducer;