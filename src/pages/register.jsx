import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Register() {
  const course = useDocusaurusContext().siteConfig.customFields.course;
  return (
    <Layout title={`Register | ${course.courseCode}`} description="Create a Skunkworks Academy learner account.">
      <main className="pageShell narrowPage">
        <p className="eyebrow">Academy identity</p>
        <h1>Create your learner account</h1>
        <p className="lead">Registration is handled centrally so one account can be used across course sites, labs, assessments, credentials and learner services.</p>
        <div className="panel"><h2>Before continuing</h2><ul><li>Use an email address you can access.</li><li>Provide accurate learner details.</li><li>Review the privacy and consent information in the Portal.</li><li>Return to {course.courseCode} enrolment after account creation.</li></ul></div>
        <div className="actions"><a className="button primary" href={course.registrationUrl}>Open registration</a><Link className="button" to="/enrol">Course enrolment</Link><Link className="button ghost" to="/">Back to course</Link></div>
      </main>
    </Layout>
  );
}
