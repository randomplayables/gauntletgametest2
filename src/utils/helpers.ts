import { MIN_NUMBER, MAX_NUMBER, MAX_ATTEMPTS } from '@/constants'
import { Guess } from '@/types'

export function getRandomNumber(min: number = MIN_NUMBER, max: number = MAX_NUMBER): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function isNumberInRange(value: number, min: number = MIN_NUMBER, max: number = MAX_NUMBER): boolean {
  return Number.isInteger(value) && value >= min && value <= max
}

export function validateNumber(value: number, min: number = MIN_NUMBER, max: number = MAX_NUMBER): string | null {
  if (isNaN(value)) {
    return 'Please enter a valid number'
  }
  if (!Number.isInteger(value)) {
    return 'Number must be an integer'
  }
  if (value < min || value > max) {
    return `Number must be between ${min} and ${max}`
  }
  return null
}

export function isMaxAttemptsReached(guesses: Guess[]): boolean {
  return guesses.length >= MAX_ATTEMPTS
}

export function hasAttemptsRemaining(guesses: Guess[]): boolean {
  return guesses.length < MAX_ATTEMPTS
}