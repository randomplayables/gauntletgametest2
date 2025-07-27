# Number Guessing Gauntlet

A two-player number guessing game where the challenger picks a secret number and the opponent tries to guess it. After each guess, feedback is provided—too high, too low, or correct—and all previous guesses are recorded and displayed.

## How to Play

1. Challenger sets a secret number within the allowed range.
2. Opponent enters a guess.
3. The game responds with feedback:
   - “Too high” if the guess is above the secret number.
   - “Too low” if the guess is below the secret number.
   - “Correct” when the guess matches the secret number.
4. Opponent repeats guesses until the correct number is found.
5. All past guesses and feedback are shown for reference.

## Getting Started

Install dependencies:

npm install

Start the development server:

npm run dev