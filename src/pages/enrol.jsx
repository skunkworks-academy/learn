import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Enrol() {
  const course = useDocusaurusContext().siteConfig.customFields.course;
  return (
    <Layout title={`Enrol | ${course.courseCode}`} description={`Enrol in ${course.title}.`}>
      <main className="pageShell narrowPage">
        <p className="eyebrow">Course enrolment</p>
        <h1>Enrol in {course.courseCode}</h1>
        <p className="lead">Course access is issued through the Academy Portal. This public site does not create learner accounts or store personal data.</p>
        <ol className="journey">
          <li><strong>Create or confirm your Academy account.</strong><span>Use the central registration flow rather than creating a separate password for each course site.</span></li>
          <li><strong>Submit the course enrolment request.</strong><span>The Portal associates your learner identity with {course.courseCode}.</span></li>
          <li><strong>Complete approval or payment where applicable.</strong><span>Some courses require prerequisites, cohort approval, a purchase or a voucher.</span></li>
          <li><strong>Open protected learning content.</strong><span>Lessons, labs, assessments and progress records are delivered after access is approved.</span></li>
        </ol>
        <div className="actions"><a className="button primary" href={course.enrolmentUrl}>Continue to enrolment</a><Link className="button" to="/register">Create an account</Link><Link className="button ghost" to="/">Back to course</Link></div>
      </main>
    </Layout>
  );
}
