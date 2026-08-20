# Access-control standard

## Principle

A public GitHub repository and GitHub Pages site cannot provide reliable access control for paid or enrolled learning content. Hiding links, minifying JavaScript or checking browser storage does not protect files that are committed publicly.

## Public repository content

The public repository may contain:

- course title, overview and outcomes
- audience and prerequisites
- curriculum summaries
- instructor and delivery information
- public samples explicitly approved for distribution
- registration, enrolment and sign-in routes
- technical code required to render the public landing page

## Protected content

The public repository must not contain:

- complete lesson bodies intended for enrolled learners
- assessment banks, answer keys or grading logic
- paid manuals, workbooks or downloadable packages
- learner identities, contact details, progress or submissions
- API keys, access tokens, passwords or lab credentials
- private instructor notes or commercially restricted source material

## Required flow

1. The public site sends the learner to the central registration service.
2. The learner authenticates through the Academy identity layer.
3. The Portal verifies course enrolment and applicable commercial or prerequisite conditions.
4. Protected content is served only after authorisation.
5. Access, progress, assessment and completion events are recorded by the learning platform.

## Integration contract

Update these fields in `course.config.json`:

- `registrationUrl`
- `enrolmentUrl`
- `loginUrl`
- `accessPolicy`

Do not implement local password storage or collect personal data in a static site.
