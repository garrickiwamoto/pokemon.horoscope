import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { saveUserResult, sendInviteEmail } from '../services/firebaseService'
import PixelButton from '../components/PixelButton'
import OakSprite from '../components/OakSprite'

export default function InviteFriend() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const type = state?.type || 'fire'

  const [yourEmail, setYourEmail] = useState('')
  const [friendEmails, setFriendEmails] = useState(['', ''])
  const [step, setStep] = useState('email') // 'email' | 'friends' | 'sent'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [userId, setUserId] = useState(null)

  function addEmailField() {
    if (friendEmails.length < 5) {
      setFriendEmails(e => [...e, ''])
    }
  }

  function updateFriendEmail(index, value) {
    const updated = [...friendEmails]
    updated[index] = value
    setFriendEmails(updated)
  }

  async function handleSaveEmail() {
    if (!yourEmail || !yourEmail.includes('@')) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setLoading(true)
    try {
      const id = await saveUserResult({ email: yourEmail, type })
      setUserId(id)
      setStep('friends')
    } catch (e) {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleSendInvites() {
    const validEmails = friendEmails.filter(e => e && e.includes('@'))
    if (validEmails.length === 0) {
      setError('Add at least one valid friend email.')
      return
    }
    setError('')
    setLoading(true)
    try {
      await sendInviteEmail({ fromUserId: userId, fromType: type, friendEmails: validEmails })
      setStep('sent')
    } catch (e) {
      setError('Failed to send invites. Try again.')
    } finally {
      setLoading(false)
    }
  }

  if (step === 'email') {
    return (
      <div className="screen-container">
        <div className="oak-scene small">
          <OakSprite />
        </div>
        <div className="dialog-box">
          <p className="dialog-speaker">Prof. Oak</p>
          <p className="dialog-text">
            Before we send your friends their destiny... I'll need your email address.
            For science. Definitely not because I'm lonely in this lab.
          </p>
        </div>
        <div className="invite-form">
          <label className="pixel-label">Your email:</label>
          <input
            className="pixel-input"
            type="email"
            placeholder="you@example.com"
            value={yourEmail}
            onChange={e => setYourEmail(e.target.value)}
          />
          {error && <p className="error-text">{error}</p>}
          <PixelButton onClick={handleSaveEmail} disabled={loading}>
            {loading ? 'Saving...' : 'Continue ▶'}
          </PixelButton>
        </div>
      </div>
    )
  }

  if (step === 'friends') {
    return (
      <div className="screen-container">
        <div className="dialog-box">
          <p className="dialog-speaker">Prof. Oak</p>
          <p className="dialog-text">
            Excellent. Now — who are your unsuspecting friends?
            Enter their emails and I'll personally summon them to the academy.
          </p>
        </div>
        <div className="invite-form">
          <label className="pixel-label">Friend emails:</label>
          {friendEmails.map((email, i) => (
            <input
              key={i}
              className="pixel-input"
              type="email"
              placeholder={`friend${i + 1}@example.com`}
              value={email}
              onChange={e => updateFriendEmail(i, e.target.value)}
            />
          ))}
          {friendEmails.length < 5 && (
            <button className="add-email-btn" onClick={addEmailField}>
              + Add another friend
            </button>
          )}
          {error && <p className="error-text">{error}</p>}
          <PixelButton onClick={handleSendInvites} disabled={loading}>
            {loading ? 'Sending...' : 'Send Invites ▶'}
          </PixelButton>
          <button className="skip-link" onClick={() => navigate('/')}>
            Skip for now
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen-container">
      <div className="oak-scene">
        <OakSprite excited />
      </div>
      <div className="dialog-box">
        <p className="dialog-speaker">Prof. Oak</p>
        <p className="dialog-text">
          Invites sent! Your friends have been summoned.
          When they complete the quiz, you'll both receive your compatibility horoscope by email.
          The fate of your friendship... is now in the stars.
        </p>
      </div>
      <div className="invite-form">
        <PixelButton onClick={() => navigate('/')}>
          Back to Start ▶
        </PixelButton>
      </div>
    </div>
  )
}
