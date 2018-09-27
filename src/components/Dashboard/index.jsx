import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

class Dashboard extends React.Component {
  componentDidMount() {
    // this.props = this.props.getActiveCourses();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Learner Dashboard</title>
        </Helmet>

        {this.props.x.map(x => (
          <div className="course-container">
            <div className="course-img-container">
              <img src={`${process.env.LMS_BASE_URL}${x.course_overview.course_image_url}`} alt="course image" height="125" width="225" />
            </div>
            <div className="content-container">
              <a href={`${process.env.LMS_BASE_URL}/courses/${x.course_overview.id}/course/`} >
                <h2 className="course-name">
                  {x.course_overview.display_name}
                </h2>
              </a>
              <p style={{ 'margin-bottom': '1px' }}>{x.course_overview.org}</p>
              <p>Started: {x.course_overview.start}</p>
              <div className="right-container">
                <a href="http://www.google.com" className="items">
                  <span className="fa fa-cog" aria-hidden="true" />
                </a>
                <a href="https://www.twitter.com" className="items">
                  <span className="fa fa-twitter" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com" className="items">
                  <span className="fa fa-facebook" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    );
  }
}


Dashboard.defaultProps = {
  // loading: false,
  // error: null,
  x: [{
    created: '2018-06-01T01:07:32.398280Z',
    course_overview: {
      id: 'course-v1:DemoX+PERF101+course', created: '2018-06-01T01:06:43.017497Z', modified: '2018-06-01T01:06:45.658340Z', version: 6, _location: 'block-v1:DemoX+PERF101+course+type@course+block@course', org: 'DemoX', display_name: 'Performance DemoX Course', display_number_with_default: 'PERF101', display_org_with_default: 'DemoX', start: '2015-09-01T00:00:00Z', end: null, advertised_start: null, announcement: null, course_image_url: '/asset-v1:DemoX+PERF101+course+type@asset+block@clouds-477992_1280.jpg', social_sharing_url: null, end_of_course_survey_url: null, certificates_display_behavior: 'end', certificates_show_before_end: false, cert_html_view_enabled: true, has_any_active_web_certificate: false, cert_name_short: '', cert_name_long: '', certificate_available_date: null, lowest_passing_grade: '0.50', days_early_for_beta: null, mobile_available: false, visible_to_staff_only: false, _pre_requisite_courses_json: '[]', enrollment_start: null, enrollment_end: null, enrollment_domain: null, invitation_only: false, max_student_enrollments_allowed: null, catalog_visibility: 'both', short_description: '', course_video_url: null, effort: null, self_paced: false, marketing_url: null, eligible_for_financial_aid: true, language: 'en',
    },
  }, {
    created: '2018-06-01T01:05:48.409132Z',
    course_overview: {
      id: 'course-v1:edX+DemoX+Demo_Course', created: '2018-06-01T01:05:00.582324Z', modified: '2018-06-01T01:07:23.721695Z', version: 6, _location: 'block-v1:edX+DemoX+Demo_Course+type@course+block@course', org: 'edX', display_name: 'edX Demonstration Course', display_number_with_default: 'DemoX', display_org_with_default: 'edX', start: '2013-02-05T05:00:00Z', end: null, advertised_start: null, announcement: null, course_image_url: '/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg', social_sharing_url: null, end_of_course_survey_url: null, certificates_display_behavior: 'end', certificates_show_before_end: false, cert_html_view_enabled: true, has_any_active_web_certificate: false, cert_name_short: '', cert_name_long: '', certificate_available_date: null, lowest_passing_grade: '0.60', days_early_for_beta: null, mobile_available: false, visible_to_staff_only: false, _pre_requisite_courses_json: '[]', enrollment_start: null, enrollment_end: null, enrollment_domain: null, invitation_only: false, max_student_enrollments_allowed: null, catalog_visibility: 'both', short_description: null, course_video_url: null, effort: null, self_paced: false, marketing_url: null, eligible_for_financial_aid: true, language: null,
    },
  }, {
    created: '2018-06-01T01:07:37.693468Z',
    course_overview: {
      id: 'course-v1:edX+Test101+course', created: '2018-06-01T01:06:57.906500Z', modified: '2018-06-01T01:07:02.584040Z', version: 6, _location: 'block-v1:edX+Test101+course+type@course+block@course', org: 'edX', display_name: 'Testing Course', display_number_with_default: 'Test101', display_org_with_default: 'edX', start: '2015-10-01T00:30:00Z', end: '2030-12-31T23:30:00Z', advertised_start: null, announcement: null, course_image_url: '/asset-v1:edX+Test101+course+type@asset+block@demo_course_image.jpg', social_sharing_url: null, end_of_course_survey_url: null, certificates_display_behavior: 'end', certificates_show_before_end: false, cert_html_view_enabled: true, has_any_active_web_certificate: false, cert_name_short: 'Demo Test', cert_name_long: 'Demonstration Testing Course', certificate_available_date: '2031-01-02T23:30:00Z', lowest_passing_grade: '0.60', days_early_for_beta: null, mobile_available: true, visible_to_staff_only: false, _pre_requisite_courses_json: '[]', enrollment_start: '2015-10-01T00:30:00Z', enrollment_end: '2030-12-31T23:30:00Z', enrollment_domain: null, invitation_only: false, max_student_enrollments_allowed: null, catalog_visibility: 'both', short_description: 'This is the short course description', course_video_url: 'http://www.youtube.com/watch?v=3_yD_cEKoCk', effort: null, self_paced: false, marketing_url: null, eligible_for_financial_aid: true, language: 'en',
    },
  }],

};

Dashboard.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.instanceOf(Error),
  x: PropTypes.array,
};

export default Dashboard;
