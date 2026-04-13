export default function TypeBadge({ type, horoscope, large = false }) {
  if (!horoscope) return null
  return (
    <div className={`type-badge ${large ? 'large' : ''}`} style={{ '--type-color': horoscope.color }}>
      <span className="type-emoji">{horoscope.emoji}</span>
      <span className="type-name">{horoscope.type.toUpperCase()} TYPE</span>
    </div>
  )
}
