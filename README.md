# Skunkworks Academy Learning Content Template

Reusable Docusaurus starter for Skunkworks Academy courses, learning paths, labs, workshops and certification-aligned content.

## What this template standardises

- Canonical Skunkworks Academy global top navigation
- Theme-aware logo, light/dark colour modes and responsive layouts
- Public course landing page, curriculum preview and learning outcomes
- Registration, enrolment and learner sign-in routes
- Central Portal access for protected learning content
- Sitemap, robots directives, metadata and Course structured data
- Accessibility, mobile responsiveness and keyboard focus states
- Content governance, security guidance and intellectual-property separation
- GitHub Actions quality gates and GitHub Pages deployment
- Automated checks for required course metadata and restricted brand terminology

## Security boundary

This repository is intended for public discovery content only. Do not commit lesson bodies, answer keys, assessment banks, paid downloads, learner data, credentials, API keys or lab secrets. Protected materials must be delivered through the Skunkworks Academy Portal or another authenticated learning service.

See [docs/ACCESS-CONTROL.md](docs/ACCESS-CONTROL.md).

## Create a new course

1. Use this repository as the source for a new GitHub repository.
2. Update `course.config.json` with the course code, title, URLs, outcomes, modules and access requirements.
3. Replace the sample copy in `src/pages/index.jsx` only where course-specific presentation is required.
4. Set the new repository's custom domain and copy `static/CNAME.example` to `static/CNAME`.
5. Run:

```bash
npm install
npm run validate
npm start
```

6. Configure GitHub Pages to use **GitHub Actions**.
7. Configure the central Portal registration, enrolment and login URLs before publication.

## Required learner journey

1. Discover the course on the public landing page.
2. Register or sign in through the central Academy identity flow.
3. Enrol in the specific course.
4. Complete payment, approval or prerequisite verification where applicable.
5. Access lessons, labs, assessments and learner records through the authenticated Portal.
6. Receive completion evidence, certificates or badge eligibility through governed Academy processes.

## Core configuration

All reusable course data is stored in `course.config.json`. The build fails when required fields, valid URLs, module previews or access-control declarations are missing.

## Canonical navigation

Public pages load the central navigation runtime:

```html
<script defer src="https://skunkworksacademy.com/assets/academy-navigation.js?v=2026.07.07.1" data-skunkworks-global-nav="v6"></script>
```

Do not build a second public top menu. Course-local navigation belongs inside the page body or authenticated workspace.

## Repository governance

- `main` must remain deployable.
- Use pull requests for content and design changes.
- Keep exact package versions until they are tested centrally.
- Run `npm run validate` before merging.
- Store code and course content under their separate licence files.
- Report security issues using `SECURITY.md`.

## Marking this repository as a GitHub template

In GitHub, open **Settings → General → Template repository** and enable the checkbox. New course repositories can then be created through **Use this template**.

© Skunkworks Academy. Dream. Design. Deliver.
