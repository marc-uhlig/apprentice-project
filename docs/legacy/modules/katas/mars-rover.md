# Mars Rover

## Description

You work at Twitter as part of the team that explores Mars by sending
remotely controlled vehicles to the surface of the planet.

### Requirements

- Your Mars Rover gets initialized with a starting Point (x,y) and a
  direction (N, S, E, W).
- You have an unlimited grid... which means you can ignore the
  grid completely.
- Your Mars Rover accepts a String of commands:

  - `L` for turning left.
  - `R` for turning right.
  - `M` for moving forward.

- Multiple Obstacles exist on the grid

  - Obstacles have Points like the Mars Rover.
  - An Obstacle occupies the space of its position.
  - Command `L` and `R` are not effected by obstacles.
  - If the current executed command is `M`, but an obstacle block s
    the way, nothing happens (command gets ignored) until a
    following command (like `L` or `R`) occurs.

- Example 1:

  - Mars Rover starts at Point (0,0) with Direction North (N), no
    obstacles.
  - Input is `MMLMRMRMMR`.
  - After executing command Mars Rover will be at Point (1,3)
    heading South (S).

- Example 2:

  - Mars Rover starts at Point (1,0) with Direction North (N).
  - Two obstacles on (1,2) and (2,3).
  - Input is `MMMMRM`.
  - After executing command Mars Rover will be at Point (2, 1)
    heading East (E).

### Constraints

- besides TDD no constraints, just try to find a solution by yourself

## Acceptance Criteria

- **#AC1:** Code is covered with tests
- **#AC2:** Kata is committed & pushed to your own kata repository.
