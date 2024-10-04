# Persist Data with In-Memory Database

## Description

Currently, all tasks added to the Backend via the Frontend are removed after restart. For production, we need to persist
this data with a database. A first step to close the gap between our current implementation and production is to use an
in-memory database. We will use [H2](https://www.h2database.com/html/main.html) for that purpose.

## Instructions

- Add following maven dependencies:
  - H2 Database
  - Spring Boot Starter Data JPA
- Create a new Spring profile in `src/main/resources` and call it `application-dev.properties`.
  - Enable the H2 console.
  - Add necessary entries for JPA and H2 to work.
  - Add the newly created `dev` profile to your IntelliJ run configuration under.
- Create a new Entity class for your Task named `TaskEntity` and define necessary fields.
- Use Lombok to avoid Boilerplate code.
- Create a JPA Repository for your Entity and call it `TaskRepository`.
- Create a Service class and call it `TaskService` .
- Adapt your Controller endpoints to use the database.
  - Your endpoint, only calls a method of the Service.
  - The Service calls the Repository to interact with the database. It yields `TaskEntity` objects.
  - If the endpoint shall return a response body, create a POJO called `Task` out of your TaskEntity inside your
    Service. It should be immutable. Return this object to the Controller.
  - Create a DTO object out of your `Task` object called `TaskDto` inside your Controller. It should be immutable.
    Return it to generate a response body.
- This segmentation is obviously overkill for our app, but the whole purpose of creating the ToDo-App is learning. The
  advantage of this separation is flexibility _(with the cost of additional abstraction)_.
- Start your app and test it manually. Validate the changes of your database with the h2-console under
  `http://localhost:8080/h2-console`.

## Prerequisites

- [Connect Frontend with Backend](/legacy/modules/todo-app/connect-frontend-with-backend.md)

## Acceptance Criteria

- #AC1: Backend persists data with In-Memory database

## Resources

- [Spring Boot With H2 Database | Baeldung](https://www.baeldung.com/spring-boot-h2-database)
- [Introduction to Project Lombok | Baeldung](https://www.baeldung.com/intro-to-project-lombok#bd-constructors)
- [DTO Pattern](https://www.baeldung.com/java-dto-pattern)
- [Java Record Keyword | Baeldung](https://www.baeldung.com/java-record-keyword)
