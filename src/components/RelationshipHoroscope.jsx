import { personalHoroscopes } from '../data/horoscopes'
import PixelButton from './PixelButton'

export default function RelationshipHoroscope({ myType, friendType, relationship, onDone }) {
  const myHoro = personalHoroscopes[myType]
  const friendHoro = personalHoroscopes[friendType]

  return (
    <div className="relationship-screen">
      <div className="relationship-header">
        <div className="type-badge" style={{ '--type-color': myHoro?.color }}>
          <span>{myHoro?.emoji}</span>
          <span>{myType?.toUpperCase()}</span>
        </div>
        <span className="vs-text">✦</span>
        <div className="type-badge" style={{ '--type-color': friendHoro?.color }}>
          <span>{friendHoro?.emoji}</span>
          <span>{friendType?.toUpperCase()}</span>
        </div>
      </div>

      <h2 className="relationship-title">{relationship?.title}</h2>
      <p className="relationship-emoji">{relationship?.emoji}</p>

      <div className="horoscope-scroll">
        <p className="horoscope-text relationship-text">{relationship?.horoscope}</p>
      </div>

      <div className="horoscope-cta">
        <p className="oak-prompt">— Prof. Oak —</p>
        <p className="oak-cta-text">The stars have spoken. Godspeed.</p>
        <PixelButton onClick={onDone}>Back to Start ▶</PixelButton>
      </div>
    </div>
  )
}
