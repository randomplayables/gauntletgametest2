import React from 'react'
import { Guess } from '@/types'
import Feedback from './Feedback'

interface GuessListProps {
  guesses: Guess[]
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  if (guesses.length === 0) return null

  return (
    <ul className="guess-list">
      {guesses.map((guess, index) => (
        <li key={index}>
          <span>{guess.value}</span>
          <Feedback feedback={guess.feedback} />
        </li>
      ))}
    </ul>
  )
}

export default GuessList