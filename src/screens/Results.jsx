import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { personalHoroscopes, getRelationshipHoroscope } from '../data/horoscopes'
import { saveUserResult, notifyInviter } from '../services/firebaseService'
import TypeBadge from '../components/TypeBadge'
import PixelButton from '../components/PixelButton'
import DialogBox from '../components/DialogBox'
import OakSprite from '../components/OakSprite'
import PokemonSprite from '../components/PokemonSprite'
import RelationshipHoroscope from '../components/RelationshipHoroscope'

const TYPE_SPRITE = {
  fire: '/sprites/fire.png',
  water: '/sprites/water.png',
  grass: '/sprites/grass.png',
  psychic: '/sprites/psychic.png',
  electric: '/sprites/electric.png',
}

const OAK_LINES = (type) => [
  `Well, well, well...I have never seen POKéHOROSCOPES like this.`,
  `You are... a ${type.toUpperCase()} TYPE.\n\nI have prepared your Pokehoroscope`,
]

export default function Results() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const type = state?.type || 'fire'
  const inviterRef = state?.inviterRef || null
  const inviterType = state?.inviterType || null
  const name = state?.name || null
  const email = state?.email || null
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
      setPhase('horoscope')
    }
  }

  if (phase === 'oak') {
    return (
      <div className="screen-container">
        <div className="oak-scene">
          {oakIndex === oakLines.length - 1
            ? <PokemonSprite src={TYPE_SPRITE[type]} alt={type} />
            : <OakSprite />
          }
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
          <PokemonSprite src={TYPE_SPRITE[type]} alt={type} />
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
              <PixelButton onClick={() => navigate('/invite', { state: { type, name, email } })}>
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
