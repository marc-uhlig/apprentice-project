# Dockerize the App

## Description

We are getting closer to deploying our app. You may noticed that it has multiple dependencies. We need the Frontend to
build and then place into the correct directory. We then need our backend built and packaged. In future, the app might
have additional dependencies like global libraries or other services.

Create a multi-stage Docker file for our app which handles the complete build process. If you satisfy the prerequisites
you should have a basic understanding of Docker.

## Instructions

- Create a docker file.
- Add a stage for the maven build.
  - Depending on how you build the Frontend, you may want to add another stage for the Vite build with its
    dependencies.
- Copy the build result into the final stage.
- Choose fitting base images for each stage.
- The Docker file must not rely on previously build targets in your output directories.
- Test your file by building and running it. Expose the internal port.

## Prerequisites

- [Introduction to Docker](/legacy/modules/essentials/introduction-to-docker.md)
- [Database Management with Liquibase](/legacy/modules/todo-app/database-management-with-liquibase.md)

## Acceptance Criteria

- #AC1: Docker file exists which successfully builds app in a freshly cloned repository
