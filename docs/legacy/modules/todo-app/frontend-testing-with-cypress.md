# Frontend Testing with Cypress

## Description

To ensure that our Frontend works as expected even after future changes we want to
add[ Cypress](https://www.cypress.io/). Cypress is testing tool for Component and End-to-End tests.

## Instructions

- Cypress should already be[ installed](https://docs.cypress.io/guides/getting-started/installing-cypress) during Vite
  installation, if not do it now.
- Add new test which:
  - navigates to your App
  - validates all static text
  - adds multiple tasks and validates their creation
  - edits one task and validates change
  - deletes another task and validates deletion

## Prerequisites

- [Implement UI Design](https://klosebrothers.atlassian.net/wiki/spaces/KB/pages/2328330313)

## Acceptance Criteria

- #AC1: Test exists which validates creation, editing and deletion of task

- #AC2: NPM run script exists to execute cypress in headless mode from console

## Resources

- [Effective E2E: Cypress App Testing | Cypress Documentation](https://docs.cypress.io/guides/end-to-end-testing/testing-your-app)
- [Command Line | Cypress Documentation](https://docs.cypress.io/guides/guides/command-line)
- [ Creating "Tiny" Tests With A Single Assertion](https://docs.cypress.io/guides/references/best-practices#Creating-Tiny-Tests-With-A-Single-Assertion)
