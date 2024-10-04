# Add JSON Mock-Server for Frontend

## Description

We are getting to the Point where we can connect our Frontend with a potential Backend. To to so, instead of using
hard-coded data, our tasks must be fetched from a server. To enable parallel development of Frontend & Backend and also
to separate their dependence, a mock-server is used.

This server acts as a dumb Backend and responds with predefined payloads.

## Instructions

- Install[ json-server](https://github.com/typicode/json-server) package as
  a[ dev-dependency](https://github.com/typicode/json-server#simple-example).
- Create a new directory for your mock-data and add a file called `db.json`.
- Define[ routes](https://github.com/typicode/json-server#routes) with meaningful names. You need:
  - `GET` to request all tasks
  - `PUT` to update existing task
  - `POST` to create new task
  - `DELETE` to delete existing task
- Define dummy response data
- Start your mock-server and test all endpoints manually witch `curl` or similar tools
- The `db.json` shall be committed to git. You may observed that calling `PUT`, `POST` or `DELETE` mutates the the file.
  - Find a (simple) way to use all http requests while preventing the `db.json` from changing.
- Create an npm script to make it as easy as possible for colleague developers to work the mock-server.
- Adjust your Vue-App to fetch data
  - You may realize that you tasks need an `id` to be uniquely identifiable. Add an id to your data structure if not
    already happend.
- Adapt you Cypress test to work again. You will have to[ intercept](https://docs.cypress.io/api/commands/intercept)
  requests.

## Prerequisites

- [Ensure Green Tests and Code Quality of Frontend with CI](https://klosebrothers.atlassian.net/wiki/spaces/KB/pages/2328199293)

## Acceptance Criteria

#AC1: Frontend fetches data instead of hard-coding it

#AC2: Mock-Server intercepts all Requests from Frontend

#AC3: App is still usable & Pipeline stays green (obviously)

#AC4: Npm run script exists to easily start the mock-server

## Resources

- [GitHub - typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously)](https://github.com/typicode/json-server)
- [intercept | Cypress Documentation](https://docs.cypress.io/api/commands/intercept)
