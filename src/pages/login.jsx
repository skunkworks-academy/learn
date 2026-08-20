import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Login() {
  const course = useDocusaurusContext().siteConfig.customFields.course;
  return (
    <Layout title={`Sign in | ${course.courseCode}`} description="Open the Skunkworks Academy learner portal.">
      <main className="pageShell narrowPage">
        <p className="eyebrow">Learner sign-in</p>
        <h1>Continue in the Academy Portal</h1>
        <p className="lead">The public course site contains discovery information only. Sign in to access approved lessons, labs, assessments, downloads and progress records.</p>
        <div className="actions"><a className="button primary" href={course.loginUrl}>Open learner sign-in</a><Link className="button" to="/enrol">Check enrolment</Link><Link className="button ghost" to="/">Back to course</Link></div>
        <p className="accessNote">Never enter an Academy password into a course repository, GitHub issue, public form or static page.</p>
      </main>
    </Layout>
  );
}
