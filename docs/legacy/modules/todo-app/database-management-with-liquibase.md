# Database Management with Liquibase

## Description

It is likely that the data we want to persist will change in future. We may want to add additional columns in our tables
or save user information. We may also want to change our database from lets say MySQL to PostgreSQL. Executing these
changes via scripts of SQL statements is hard to track and reproduce. Also, the syntax differ between databases.

Liquibase provides a solution to this problem and is widely used in Java Applications.

## Instructions

- Add Liquibase Core as maven dependency
- Enable Liquibase in your `application.properties` and set the path to a change-log file
- Fill your tasks table with test data via Liquibase.
  - Create a new changeset which inserts test data into the tasks table
  - This changeset shall only be executed with the dev profile. We do not want test data on production

## Prerequisites

- [Persist Data with In-Memory Database](/legacy/modules/todo-app/persist-data-with-in-memory-database.md)

## Acceptance Criteria

- #AC1: Backend uses Liquibase
- #AC2: Test data exists for task and only for dev profile

## Resources

- [Use Liquibase to Safely Evolve Your Database Schema | Baeldung](https://www.baeldung.com/liquibase-refactor-schema-of-java-app)
