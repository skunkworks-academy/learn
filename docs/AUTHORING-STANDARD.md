# Learning-content authoring standard

## Start with measurable outcomes

Each course must define what a learner can demonstrate after completion. Use observable verbs such as configure, analyse, troubleshoot, design, implement, validate and defend. Avoid outcomes that only state understand, know or become familiar with.

## Course structure

Every course should include:

1. orientation and learner expectations
2. prerequisite verification
3. concept explanation
4. guided demonstration
5. hands-on practice
6. formative knowledge checks
7. applied assessment or capstone where appropriate
8. completion criteria and next-step guidance

## Module standard

Each module should document:

- purpose and measurable objectives
- estimated duration
- required tools, accounts and lab resources
- lesson sequence
- guided practice
- assessment evidence
- remediation and extension options
- references and attribution

## Assessment alignment

Every assessment item must map to a published outcome. Define the pass mark, attempt policy, feedback method, evidence requirements and handling of reassessment. Never expose answer keys or live assessment banks in the public repository.

## Technical accuracy

Commands, product behaviour, licensing statements and certification references must be verified against authoritative vendor documentation. Record the relevant product version and review date where procedures may change.

## Accessibility

- Use semantic headings in order.
- Provide descriptive link text.
- Add meaningful alternative text to instructional images.
- Do not communicate meaning through colour alone.
- Ensure keyboard access and visible focus.
- Provide captions or transcripts for video and audio.
- Avoid screenshots as the only source of essential text.

## Language and inclusion

Use direct, professional language suited to the stated learner level. Expand acronyms on first use, avoid unnecessary idioms and provide regional context where it affects implementation.

## Intellectual property

Only include original, licensed or properly attributed material. Vendor diagrams, exam content, manuals and screenshots may have separate restrictions. Record sources and approvals before publication.

## Lifecycle

Use the `status` field in `course.config.json`:

- `draft`: active authoring
- `review`: subject-matter and instructional review
- `approved`: cleared for release
- `published`: available to learners
- `retired`: no longer offered; preserve redirect and archival records
