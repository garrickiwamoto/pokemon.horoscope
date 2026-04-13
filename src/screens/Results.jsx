import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { personalHoroscopes, getRelationshipHoroscope } from '../data/horoscopes'
import { saveUserResult, notifyInviter } from '../services/firebaseService'
import TypeBadge from '../components/TypeBadge'
import PixelButton from '../components/PixelButton'
import DialogBox from '../components/DialogBox'
import OakSprite from '../components/OakSprite'
import RelationshipHoroscope from '../components/RelationshipHoroscope'

const OAK_LINES = (type) => [
  `Well, well, well... I've never seen readings like this.`,
  `You are... a ${type.toUpperCase()} TYPE.`,
  `I've studied Pokemon for 40 years and somehow you still surprised me.`,
  `Read your horoscope carefully. And maybe call your mother.`,
]

export default function Results() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const type = state?.type || 'fire'
  const inviterRef = state?.inviterRef || null
  const inviterType = state?.inviterType || null
  const horoscope = personalHoroscopes[type]

  const [phase, setPhase] = useState('oak') // 'oak' | 'reveal' | 'horoscope' | 'relationship'
  const [oakIndex, setOakIndex] = useState(0)
  const oakLines = OAK_LINES(type)

  // If this is a friend completing via invite, save their result and notify inviter
  useEffect(() => {
    if (inviterRef && type) {
      saveUserResult({ type, inviterRef }).catch(console.error)
      notifyInviter({ inviterRef, friendType: type }).catch(console.error)
    }
  }, [inviterRef, type])

  function advanceOak() {
    if (oakIndex < oakLines.length - 1) {
      setOakIndex(i => i + 1)
    } else {
      setPhase('reveal')
    }
  }

  if (phase === 'oak') {
    return (
      <div className="screen-container">
        <div className="oak-scene">
          <OakSprite excited />
        </div>
        <DialogBox
          speaker="Prof. Oak"
          text={oakLines[oakIndex]}
          onNext={advanceOak}
          buttonLabel={oakIndex < oakLines.length - 1 ? 'Next ▶' : 'Show me! ▶'}
        />
      </div>
    )
  }

  if (phase === 'reveal') {
    return (
      <div className="screen-container">
        <div className="type-reveal">
          <p className="reveal-label">You are a...</p>
          <TypeBadge type={type} horoscope={horoscope} large />
          <p className="reveal-tagline">"{horoscope.tagline}"</p>
          <PixelButton onClick={() => setPhase('horoscope')}>
            Read Your Horoscope ▶
          </PixelButton>
        </div>
      </div>
    )
  }

  if (phase === 'horoscope') {
    return (
      <div className="screen-container horoscope-screen">
        <div className="horoscope-header">
          <TypeBadge type={type} horoscope={horoscope} />
          <h2 className="horoscope-title">Your Pokemon Horoscope</h2>
        </div>
        <div className="horoscope-scroll">
          <pre className="horoscope-text">{horoscope.horoscope}</pre>
        </div>
        <div className="horoscope-cta">
          {inviterType ? (
            <>
              <p className="oak-prompt">— Prof. Oak —</p>
              <p className="oak-cta-text">
                And now... shall we see what the stars say about you and your friend?
              </p>
              <PixelButton onClick={() => setPhase('relationship')}>
                See Compatibility ▶
              </PixelButton>
            </>
          ) : (
            <>
              <p className="oak-prompt">— Prof. Oak —</p>
              <p className="oak-cta-text">
                Want to discover your compatibility horoscope with a friend?
              </p>
              <PixelButton onClick={() => navigate('/invite', { state: { type } })}>
                Invite a Friend ▶
              </PixelButton>
            </>
          )}
          <button className="skip-link" onClick={() => navigate('/')}>
            {inviterType ? 'Skip for now' : 'No thanks, restart'}
          </button>
        </div>
      </div>
    )
  }

  // Relationship horoscope phase (friend flow only)
  const relationship = getRelationshipHoroscope(type, inviterType)
  return (
    <div className="screen-container horoscope-screen">
      <RelationshipHoroscope
        myType={type}
        friendType={inviterType}
        relationship={relationship}
        onDone={() => navigate('/')}
      />
    </div>
  )
}
