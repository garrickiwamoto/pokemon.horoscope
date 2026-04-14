import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { saveUserResult, sendInviteEmail } from '../services/firebaseService'
import PixelButton from '../components/PixelButton'
import OakSprite from '../components/OakSprite'

export default function InviteFriend() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const type = state?.type || 'fire'
  const email = state?.email || ''
  const name = state?.name || ''

  const [friendEmails, setFriendEmails] = useState(['', ''])
  const [step, setStep] = useState('friends') // 'friends' | 'sent'
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    saveUserResult({ email, name, type })
      .then(id => setUserId(id))
      .catch(() => setError('Something went wrong. Try again.'))
      .finally(() => setLoading(false))
  }, [])

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

  if (step === 'friends') {
    return (
      <div className="screen-container">
        <div className="oak-scene small">
          <OakSprite />
        </div>
        <div className="dialog-box">
          <p className="dialog-speaker">Prof. Oak</p>
          <p className="dialog-text">
            Excellent. Now — who are your unsuspecting friends?
            Enter their emails and I'll personally summon them to the academy.
          </p>
        </div>
        <div className="invite-form">
          <label className="pixel-label">Friend emails:</label>
          {friendEmails.map((e, i) => (
            <input
              key={i}
              className="pixel-input"
              type="email"
              placeholder={`friend${i + 1}@example.com`}
              value={e}
              onChange={ev => updateFriendEmail(i, ev.target.value)}
            />
          ))}
          {friendEmails.length < 5 && (
            <button className="add-email-btn" onClick={addEmailField}>
              + Add another friend
            </button>
          )}
          {error && <p className="error-text">{error}</p>}
          <PixelButton onClick={handleSendInvites} disabled={loading}>
            {loading ? 'Saving...' : 'Send Invites ▶'}
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
