# Tennis

## Description

This Kata is about implementing a simple tennis game like Wii tennis.

### Requirements

#### Scoring system

The scoring system is quite simple:

- Each player can have one of the following points during a game: **'love'**, **'15'**, **'30'**, or **'40'**.
- If a player reaches **40** and wins the next point, they win the game!

##### Alternate description of the scoring system:

- A game is won by the first player to have won at least four points in total and
  at least two points more that the opponent.
- The running score of each game is described in a manner peculiar to tennis:
  scores from zero to three points are described as "love","15","30", and "40" respectively.
- If at least three points have been scored by each player, and the scores are equal, the score
  is "deuce".
- If at least three points have been scored by each side and a player has one more point that his opponent,
  the score of the game is "advantage" for the player in the lead.

#### Special rules

- If both players reach **40**, it is called **'deuce'**.
- At **deuce**, the player who wins the next point gains the **advantage**.
- If the player with the **advantage** wins the following point, they win the game.
- If the opposing player wins instead, the score returns to **deuce**.

Simple, yet so thrilling!

### Prerequisites

- Create Kata Repository

## Acceptance Criteria

- **#AC1:** Code is covered with tests.
- **#AC2:** All tests are green.
- **#AC3:** Kata is commited & pushed to your own kata repository.

### Helpful Resources

tbd
