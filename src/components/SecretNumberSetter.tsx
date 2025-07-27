import React, { useState, Dispatch, SetStateAction, FormEvent } from 'react'
import { MIN_NUMBER, MAX_NUMBER } from '@/constants'

interface SecretNumberSetterProps {
  setSecretNumber: Dispatch<SetStateAction<number | null>>
}

const SecretNumberSetter: React.FC<SecretNumberSetterProps> = ({ setSecretNumber }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const num = parseInt(inputValue, 10)
    if (isNaN(num)) {
      setError('Please enter a valid number')
      return
    }
    if (num < MIN_NUMBER || num > MAX_NUMBER) {
      setError(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}`)
      return
    }
    setError('')
    setSecretNumber(num)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Secret Number</h2>
      <input
        type="number"
        min={MIN_NUMBER}
        max={MAX_NUMBER}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={`Enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}`}
      />
      <button type="submit" disabled={inputValue === ''}>
        Confirm
      </button>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
    </form>
  )
}

export default SecretNumberSetter