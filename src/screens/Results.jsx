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

  const [phase, setPhase] = useState('oak')
  const [oakIndex, setOakIndex] = useState(0)
  const oakLines = OAK_LINES(type)
  const horoscopePages = horoscope.horoscope.split('\n\n').filter(p => p.trim())
  const [horoIndex, setHoroIndex] = useState(0)

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
    const isLastPage = horoIndex === horoscopePages.length - 1
    return (
      <div className="screen-container">
        <div className="oak-scene">
          <PokemonSprite src={TYPE_SPRITE[type]} alt={type} />
        </div>
        <div className="horoscope-header">
          <TypeBadge type={type} horoscope={horoscope} />
        </div>
        <div className="dialog-box">
          <p className="dialog-text">{horoscopePages[horoIndex]}</p>
          <div className="dialog-actions">
            {horoIndex > 0 && (
              <button className="dialog-back-btn" onClick={() => setHoroIndex(i => i - 1)}>◀ Back</button>
            )}
            {!isLastPage ? (
              <button className="dialog-btn" onClick={() => setHoroIndex(i => i + 1)}>Next ▶</button>
            ) : (
              <button className="dialog-btn" onClick={() => {
                if (inviterType) setPhase('relationship')
                else navigate('/invite', { state: { type, name, email } })
              }}>
                {inviterType ? 'See Compatibility ▶' : 'Invite a Friend ▶'}
              </button>
            )}
          </div>
        </div>
        {isLastPage && (
          <button className="skip-link" onClick={() => navigate('/')}>
            {inviterType ? 'Skip for now' : 'No thanks, restart'}
          </button>
        )}
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
