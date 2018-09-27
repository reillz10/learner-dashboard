import 'whatwg-fetch';
import {
  STARTED_FETCHING_ACTIVE_COURSES,
  FINISHED_FETCHING_ACTIVE_COURSES,
  ERROR_FETCHING_ACTIVE_COURSES,
  GET_ACTIVE_COURSES,
} from '../constants/actionTypes/courses';

const startedFetchingActiveCourses = () => ({ type: STARTED_FETCHING_ACTIVE_COURSES });
const finishedFetchingActiveCourses = () => ({ type: FINISHED_FETCHING_ACTIVE_COURSES });
const errorFetchingActiveCourses = () => ({ type: ERROR_FETCHING_ACTIVE_COURSES });
const getActiveCourses = activeCourses => ({ type: GET_ACTIVE_COURSES, activeCourses });
// const fetchActiveCourses = () => (
//   (dispatch) => {
//     dispatch(startedFetchingActiveCourses());
//     return fetch('https://panthro.sandbox.edx.org/api/enrollment/v2/course-enrollments/')
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }

//         throw new Error();
//       })
//       .then((data) => {
//         dispatch(getActiveCourses(data.results));
//         dispatch(finishedFetchingActiveCourses());
//       })
//       .catch(() => dispatch(errorFetchingActiveCourses()));
//   }
// );

const fetchActiveCourses = () => (
  (dispatch) => {
    dispatch(startedFetchingActiveCourses());
    return Promise.resolve({
      count: 10,
      num_pages: 1,
      current_page: 1,
      results: [{
        id: 5, created: '2018-06-01T01:07:32.398280Z', is_active: true, mode: 'audit', user: 4, course: 'Course: course-v1:DemoX+PERF101+course',
      }, {
        id: 1, created: '2018-06-01T01:05:48.409132Z', is_active: true, mode: 'audit', user: 4, course: 'Course: course-v1:edX+DemoX+Demo_Course',
      }, {
        id: 6, created: '2018-06-01T01:07:37.693468Z', is_active: true, mode: 'audit', user: 4, course: 'Course: course-v1:edX+Test101+course',
      }, {
        id: 7, created: '2018-06-01T01:07:48.301257Z', is_active: true, mode: 'audit', user: 5, course: 'Course: course-v1:DemoX+PERF101+course',
      }, {
        id: 2, created: '2018-06-01T01:05:53.720560Z', is_active: true, mode: 'audit', user: 5, course: 'Course: course-v1:edX+DemoX+Demo_Course',
      }, {
        id: 8, created: '2018-06-01T01:07:53.625420Z', is_active: true, mode: 'audit', user: 5, course: 'Course: course-v1:edX+Test101+course',
      }, {
        id: 9, created: '2018-06-01T01:08:04.288434Z', is_active: true, mode: 'audit', user: 6, course: 'Course: course-v1:DemoX+PERF101+course',
      }, {
        id: 3, created: '2018-06-01T01:05:59.036565Z', is_active: true, mode: 'audit', user: 6, course: 'Course: course-v1:edX+DemoX+Demo_Course',
      }, {
        id: 10, created: '2018-06-01T01:08:09.746200Z', is_active: true, mode: 'audit', user: 6, course: 'Course: course-v1:edX+Test101+course',
      }, {
        id: 4, created: '2018-06-01T01:06:04.377307Z', is_active: true, mode: 'audit', user: 7, course: 'Course: course-v1:edX+DemoX+Demo_Course',
      }],
      next: null,
      start: 0,
      previous: null,
    })
      .then((data) => {
        dispatch(finishedFetchingActiveCourses({ hi: 'hi' }));
      })
      .catch(() => dispatch(errorFetchingActiveCourses()));
  }
);

export {
  startedFetchingActiveCourses,
  finishedFetchingActiveCourses,
  errorFetchingActiveCourses,
  getActiveCourses,
  fetchActiveCourses,
};
