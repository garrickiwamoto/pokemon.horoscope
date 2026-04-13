import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { getUserResult } from '../services/firebaseService'
import { personalHoroscopes } from '../data/horoscopes'
import OakSprite from '../components/OakSprite'
import DialogBox from '../components/DialogBox'
import PixelButton from '../components/PixelButton'

const DIALOGUE = (inviterType) => [
  "Hello there! Welcome to POKEMON ACADEMY!",
  "A friend of yours has already discovered their Pokemon type...",
  `They are a ${inviterType ? inviterType.toUpperCase() + ' TYPE' : 'mysterious type'}. Interesting.`,
  "Now it's YOUR turn to discover yours.",
  "Answer 5 questions and we'll reveal both your type AND your compatibility horoscope.",
  "The stars are watching. No pressure.",
]

export default function FriendLanding() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const ref = searchParams.get('ref') // the inviter's userId

  const [inviterType, setInviterType] = useState(null)
  const [dialogIndex, setDialogIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!ref) {
      setLoading(false)
      return
    }
    getUserResult(ref)
      .then(data => {
        if (data?.type) setInviterType(data.type)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [ref])

  const dialogue = DIALOGUE(inviterType)
  const isLast = dialogIndex === dialogue.length - 1

  function advance() {
    if (isLast) {
      // Pass the ref (inviter ID) through to quiz → results
      navigate('/quiz', { state: { inviterRef: ref, inviterType } })
    } else {
      setDialogIndex(i => i + 1)
    }
  }

  if (loading) {
    return (
      <div className="screen-container">
        <p className="loading-text">Loading...</p>
      </div>
    )
  }

  return (
    <div className="screen-container">
      <div className="oak-scene">
        <OakSprite />
      </div>
      <DialogBox
        speaker="Prof. Oak"
        text={dialogue[dialogIndex]}
        onNext={advance}
        buttonLabel={isLast ? "Take the Quiz ▶" : "Next ▶"}
      />
      {inviterType && (
        <div className="inviter-badge">
          <span>Your friend is: </span>
          <span
            className="type-pill"
            style={{ background: personalHoroscopes[inviterType]?.color }}
          >
            {personalHoroscopes[inviterType]?.emoji} {inviterType.toUpperCase()}
          </span>
        </div>
      )}
    </div>
  )
}
