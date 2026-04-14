import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import OakSprite from '../components/OakSprite'
import PixelButton from '../components/PixelButton'

export default function Welcome() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function handleStart() {
    if (!name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email.')
      return
    }
    navigate('/onboarding', { state: { name: name.trim(), email } })
  }

  return (
    <div className="screen-container">
      <div className="oak-scene">
        <OakSprite />
      </div>
      <div className="dialog-box">
        <p className="dialog-speaker">Prof. Oak</p>
        <p className="dialog-text">
          Welcome! <br /> <br />
          Before we begin, I'll need a few details...for science, of course.
        </p>
      </div>
      <div className="invite-form">
        <label className="pixel-label">Your name:</label>
        <input
          className="pixel-input"
          type="text"
          placeholder="Trainer name..."
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label className="pixel-label">Your email:</label>
        <input
          className="pixel-input"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleStart()}
        />
        {error && <p className="error-text">{error}</p>}
        <PixelButton onClick={handleStart}>
          Begin ▶
        </PixelButton>
      </div>
    </div>
  )
}
