# Ensure Green Tests and Code Quality

## Description

We want to enforce that new code does not break existing tests and complies to our formatting rules. To do this we need
Continuous Integration (CI). In detail, we want to create a pipeline which automatically validates our tests and code.

## Instructions

- Create a new GitHub Action Workflow that gets triggered on Push\
  _Be aware that the `main` branch would normally be protected and changes can only be made through
  Pull-Requests. In this case the trigger should be Pull-Request. Unfortunately, the GitHub free account does not
  allow branch protection._
- [Checkout](https://github.com/actions/checkout) the code.
- Chose one of the ACs and try to create the workflow for it. You may use GitHub’s workflow templates during creation.
- Validate both cases: Passing and Failing.
  - e.g.: Push changes which violate EsLint rules (e.g. `const bla;` → const declaration without
    assignment) and check if Pipeline fails.
- Continue with the other ACs.
- **Tipp:** ChatGPT is pretty good in creating simple Workflows.

## Prerequisites

- [Frontend Testing with Cypress](https://klosebrothers.atlassian.net/wiki/spaces/KB/pages/2328494120)

## Acceptance Criteria

- #AC1: GitHub Actions Workflow exists and gets triggered on every push to the `main` branch

- #AC2: Workflow executes all Cypress tests

- #AC3: Workflow checks EsLint rules

- #AC4: Workflow checks Prettier formatting

## Resources

- [What is Continuous Integration?](https://aws.amazon.com/devops/continuous-integration)

* [Understanding GitHub Actions - GitHub Docs](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)

- Check Formatting:[ ](https://prettier.io/docs/en/cli.html#--check)
  [CLI · Prettier](https://prettier.io/docs/en/cli.html#--check)
