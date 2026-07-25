import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function Section({eyebrow, title, children, id}) {
  return (
    <section className="section" id={id}>
      <div className="sectionHeading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const course = siteConfig.customFields.course;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    courseCode: course.courseCode,
    educationalLevel: course.level,
    inLanguage: course.locale,
    timeRequired: `PT${course.estimatedHours}H`,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Skunkworks Academy',
      url: 'https://skunkworksacademy.com/',
    },
    offers: {
      '@type': 'Offer',
      category: course.deliveryModes.join(', '),
      url: course.enrolmentUrl,
      availability: 'https://schema.org/OnlineOnly',
    },
  };

  return (
    <Layout title={`${course.courseCode} | ${course.title}`} description={course.summary}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className="pageShell" id="main-content">
        <section className="hero">
          <div className="heroCopy">
            <p className="eyebrow">{course.courseCode} · {course.level}</p>
            <h1>{course.title}</h1>
            <p className="lead">{course.summary}</p>
            <div className="actions">
              <Link className="button primary" to="/enrol">Enrol now</Link>
              <Link className="button" to="/register">Create an account</Link>
              <Link className="button ghost" to="/login">Learner sign-in</Link>
            </div>
            <p className="accessNote">Registration and active course enrolment are required before lessons, labs, assessments or downloads can be accessed.</p>
          </div>
          <aside className="heroPanel" aria-label="Course facts">
            <div><strong>{course.estimatedHours}</strong><span>Estimated hours</span></div>
            <div><strong>{course.modules.length}</strong><span>Learning modules</span></div>
            <div><strong>{course.assessment.passMark}%</strong><span>Required pass mark</span></div>
            <div><strong>{course.deliveryModes.join(' + ')}</strong><span>Delivery options</span></div>
          </aside>
        </section>

        <nav className="courseNav" aria-label="Course page navigation">
          <a href="#outcomes">Outcomes</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#assessment">Assessment</a>
          <a href="#access">Access</a>
          <a href="#support">Support</a>
        </nav>

        <Section eyebrow="Capability goals" title="What learners will be able to do" id="outcomes">
          <div className="cardGrid">
            {course.outcomes.map((outcome, index) => (
              <article className="card" key={outcome}>
                <span className="number">{String(index + 1).padStart(2, '0')}</span>
                <p>{outcome}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Learning sequence" title="Curriculum preview" id="curriculum">
          <div className="moduleList">
            {course.modules.map((module) => (
              <article className="module" key={module.id}>
                <span>{module.id}</span>
                <div><h3>{module.title}</h3><p>{module.summary}</p></div>
                <span className="status">Preview</span>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Readiness" title="Audience and prerequisites">
          <div className="twoColumn">
            <article className="panel"><h3>Designed for</h3><ul>{course.audience.map((item) => <li key={item}>{item}</li>)}</ul></article>
            <article className="panel"><h3>Before starting</h3><ul>{course.prerequisites.map((item) => <li key={item}>{item}</li>)}</ul></article>
          </div>
        </Section>

        <Section eyebrow="Evidence of skill" title="Labs, assessment and completion" id="assessment">
          <div className="cardGrid three">
            <article className="card"><h3>Guided practice</h3><p>{course.labs.included ? 'Hands-on activities are included and may require a provisioned Academy lab.' : 'This course does not require a provisioned lab.'}</p></article>
            <article className="card"><h3>Assessment</h3><p>{course.assessment.knowledgeChecks} knowledge checks, a final assessment and {course.assessment.capstone ? 'an applied capstone.' : 'no capstone requirement.'}</p></article>
            <article className="card"><h3>Completion evidence</h3><p>{course.credential.type}{course.credential.badgeEligible ? ' with badge eligibility where completion criteria are met.' : '.'}</p></article>
          </div>
        </Section>

        <Section eyebrow="Protected delivery" title="How course access works" id="access">
          <div className="accessBand">
            <div><h3>Public in this repository</h3><p>{course.accessPolicy.publicContent}.</p></div>
            <div><h3>Available after enrolment</h3><p>{course.accessPolicy.protectedContent}.</p></div>
            <div><h3>Delivery platform</h3><p>{course.accessPolicy.deliveryPlatform}.</p></div>
          </div>
        </Section>

        <section className="cta" id="support">
          <div><p className="eyebrow">Start the learner journey</p><h2>Register, enrol and continue in the Academy Portal.</h2><p>For course support, contact <a href={`mailto:${course.supportEmail}`}>{course.supportEmail}</a>.</p></div>
          <div className="actions"><Link className="button primary" to="/enrol">Enrol now</Link><a className="button" href={course.loginUrl}>Open Portal</a></div>
        </section>
      </main>
      <footer className="siteFooter"><div className="pageShell"><strong>Skunkworks Academy</strong><span>Dream. Design. Deliver.</span></div></footer>
    </Layout>
  );
}
