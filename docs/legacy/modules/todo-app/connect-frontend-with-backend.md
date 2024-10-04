# Connect Frontend with Backend

## Description

Now the wedding can happen. Create an endpoint for every request of your Frontend. At the end of this story, you should
be able to use your application with all its features…although the data isn’t persisted between application restarts.

## Instructions

- Create a new WebMVC Controller class.
- Add endpoints for every Frontend request.
- For now, return hard-coded response data. Soon we will persist tasks in a database.
- Adapt your Vite config to work with real backend and JSON mock-server

## Prerequisites

- [Initial Spring Boot Backend](https://klosebrothers.atlassian.net/wiki/spaces/KB/pages/2329018373)

## Acceptance Criteria

- #AC1: Endpoint exists for `GET` , `PUT` , `POST` and `DELETE`

- #AC2: Frontend still works independently from backend in conjunction with JSON mock-server

- #AC3: Frontend works when served with backend

## Resources

- [Spring Boot CRUD Application with Thymeleaf | Baeldung](https://www.baeldung.com/spring-boot-crud-thymeleaf#bd-the-controllers-layer)
