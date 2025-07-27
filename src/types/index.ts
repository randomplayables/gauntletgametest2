import { Dispatch, SetStateAction } from 'react'

export type Feedback = 'high' | 'low' | 'correct'

export interface Guess {
  value: number
  feedback: Feedback
}

export type GameStatus = 'setting' | 'playing' | 'won'

export type Winner = 'A' | 'B'

export interface UseGameResult {
  secretNumber: number | null
  setSecretNumber: Dispatch<SetStateAction<number | null>>
  guesses: Guess[]
  gameStatus: GameStatus
  initializeGameSession: () => Promise<void>
  initializeGauntletGame: () => Promise<void>
  makeGuess: (guess: number) => void
  resetGame: () => void
  resolveChallenge: (winner: Winner) => Promise<void>
}