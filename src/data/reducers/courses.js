import {
  STARTED_FETCHING_ACTIVE_COURSES,
  ERROR_FETCHING_ACTIVE_COURSES,
  GET_ACTIVE_COURSES,
  FINISHED_FETCHING_ACTIVE_COURSES,
} from '../constants/actionTypes/courses';

const initialState = {
  activeCourses: [],
};

const courses = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVE_COURSES:
      return {
        ...state,
        activeCourses: { ...action.activeCourses },
        finishedFetching: true,
        errorFetching: false,
      };
    case STARTED_FETCHING_ACTIVE_COURSES:
      return {
        ...state,
        startedFetching: true,
        finishedFetching: false,
      };
    case FINISHED_FETCHING_ACTIVE_COURSES:
      return {
        ...state,
        activeCourses: { ...action.activeCourses },
        finishedFetching: true,
        errorFetching: false,
      };
    case ERROR_FETCHING_ACTIVE_COURSES:
      return {
        ...state,
        finishedFetching: true,
        errorFetching: true,
      };
    default:
      return state;
  }
};

export default courses;

