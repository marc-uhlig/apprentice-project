# Create initial Vue3 Frontend

## Description

Create a fresh Vue3 app with Vite. Vite is a bundling-tool & Dev Server for Frontend development and currently the
recommended way of creating Vue3 projects.

## Prerequisites

- [Create GitHub Repository](https://klosebrothers.atlassian.net/wiki/spaces/KB/pages/2328199195)

## Acceptance Criteria

- #AC1: Vue3 App exist in its own directory with latest NodeJs LTS
  _(have a look
  at[ nvm](https://github.com/nvm-sh/nvm) /[ nvm for windows](https://github.com/coreybutler/nvm-windows))_

- #AC2: Following tooling is added (select during install):
  _(not all tooling will be used for our todo-app)_

  - Typescript
  - Vue Router
  - Pinia
  - Vitest
  - End-to-End Testing: Cypress
  - EsLint
  - Prettier

- #AC3: Code is formatted correctly

  - Generate reasonable config with[ Prettier Config Generator](https://michelelarson.com/prettier-config/)

  - replace `.prettier.json` with own config
  - enable Prettier for project in IntelliJ
  - reformat whole Frontend code

- #AC4: `.gitignore` exists which ignores the build directory of Vite

- #AC5: Commit messages have format: _(this commit will)_ `add initial frontend` , where part in brackets is omitted

## Resources

- [Vue.js](https://vuejs.org/guide/scaling-up/tooling.html#vite)

- [Why Vite](https://vitejs.dev/guide/why.html)

- [GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)

- [GitHub - coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go.](https://github.com/coreybutler/nvm-windows)
