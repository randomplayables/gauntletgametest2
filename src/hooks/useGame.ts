import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { initGameSession, saveGameData, getGauntletChallenge, resolveGauntletChallenge } from '../services/apiService'

export type Feedback = 'high' | 'low' | 'correct'

export interface Guess {
  value: number
  feedback: Feedback
}

export type GameStatus = 'setting' | 'playing' | 'won'

export interface UseGameResult {
  secretNumber: number | null
  setSecretNumber: Dispatch<SetStateAction<number | null>>
  guesses: Guess[]
  gameStatus: GameStatus
  initializeGameSession: () => Promise<void>
  initializeGauntletGame: () => Promise<void>
  makeGuess: (guess: number) => void
  resetGame: () => void
  resolveChallenge: (winner: 'A' | 'B') => Promise<void>
}

export function useGame(): UseGameResult {
  const [secretNumber, setSecretNumber] = useState<number | null>(null)
  const [guesses, setGuesses] = useState<Guess[]>([])
  const [gameStatus, setGameStatus] = useState<GameStatus>('setting')
  const [sessionId, setSessionId] = useState<string>('')
  const [gauntletMode, setGauntletMode] = useState<boolean>(false)
  const [gauntletId, setGauntletId] = useState<string | null>(null)

  useEffect(() => {
    // Placeholder: detect game mode (single-player or gauntlet) and initialize session
  }, [])

  async function initializeGameSession(): Promise<void> {
    // Placeholder: call initGameSession and set sessionId
  }

  async function initializeGauntletGame(): Promise<void> {
    // Placeholder: call getGauntletChallenge using gauntletId and set secretNumber
  }

  function makeGuess(guess: number): void {
    // Placeholder: update guesses, feedback, saveGameData, and handle win condition
  }

  async function resolveChallenge(winner: 'A' | 'B'): Promise<void> {
    // Placeholder: call resolveGauntletChallenge with gauntletId and winner
  }

  function resetGame(): void {
    // Placeholder: reset all state to initial values
  }

  return {
    secretNumber,
    setSecretNumber,
    guesses,
    gameStatus,
    initializeGameSession,
    initializeGauntletGame,
    makeGuess,
    resetGame,
    resolveChallenge,
  }
}