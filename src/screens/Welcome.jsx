import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveUserInfo } from '../services/firebaseService'
import OakSprite from '../components/OakSprite'
import PixelButton from '../components/PixelButton'

export default function Welcome() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleStart() {
    if (!name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const userId = await saveUserInfo({ name: name.trim(), email })
      navigate('/onboarding', { state: { name: name.trim(), email, userId } })
    } catch (e) {
      setError('Something went wrong. Try again.')
      setLoading(false)
    }
  }

  return (
    <div className="screen-container">
      <div className="oak-scene">
        <OakSprite />
      </div>
      <div className="dialog-box">
        <p className="dialog-speaker">Prof. Oak</p>
        <p className="dialog-text">
          Welcome to POKéHOROSCOPES! <br /> <br />
          Before we begin, I need your info for the Pokédex.
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
        <PixelButton onClick={handleStart} disabled={loading}>
          {loading ? 'Saving...' : 'Begin ▶'}
        </PixelButton>
      </div>
    </div>
  )
}
