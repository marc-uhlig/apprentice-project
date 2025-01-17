# Initial Spring Boot Backend

## Description

To offer customers a way to persist & access their tasks we need a backend. Create a fresh Spring Boot Application.

## Instructions

- Create a fresh Spring Boot Application either with IntelliJ or [Spring Initilizr](https://start.spring.io/).
  - Select current Java LTS version
  - Select following Spring Dependencies
    - Spring Web (allows to create web-server)
    - _(we will need more, but for now, that’s sufficient)_
- Explicitly set the port to `8080` in `src/main/resources/application.properties`.
- Start the backend. You should see console output without errors.
- By default, Spring serves everything in its `src/main/resources/static` directory.
  - Manually build your Frontend (_look into your_ `package.json`) and copy the output into Springs `static` directory.
  - Stop every npm script and start your backend. You should now be able to access your Frontend via port `8080`.
- Now find a way to skip this ‘manually copy’ step by automatically copy the Frontend into the static directory in an easy to use way.
- It is correct that requests resolve in 404 error, because currently no endpoint exists in the backend.

## Prerequisites

- [Add JSON Mock-Server for Frontend](https://klosebrothers.atlassian.net/wiki/spaces/KB/pages/2328756229)

## Acceptance Criteria

- [ ] #AC1: Backend as Spring Boot Application with current Java LTS exists
- [ ] #AC2: Backend serves Frontend

## Resources

- [What is Spring Framework? | Definition from TechTarget](https://www.techtarget.com/searchapparchitecture/definition/Spring-Framework)
- [What Is Java Spring Boot? | IBM](https://www.ibm.com/topics/java-spring-boot)

- Copy Frontend into static directory. Ideas:
  - [Apache Maven Resources Plugin – Introduction](https://maven.apache.org/plugins/maven-resources-plugin/)
  - [Vite build.outDir](https://vitejs.dev/config/build-options.html#build-outdir)
