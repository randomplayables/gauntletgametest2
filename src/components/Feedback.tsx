import React from 'react'
import { Feedback as FeedbackType } from '@/types'

interface FeedbackProps {
  feedback?: FeedbackType
}

const Feedback: React.FC<FeedbackProps> = ({ feedback }) => {
  if (!feedback) return null

  let message: string
  switch (feedback) {
    case 'high':
      message = 'Too high!'
      break
    case 'low':
      message = 'Too low!'
      break
    case 'correct':
      message = 'Correct!'
      break
    default:
      return null
  }

  return <p className={`feedback ${feedback}`}>{message}</p>
}

export default Feedback