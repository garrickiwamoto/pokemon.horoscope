// Professor Oak pixel art sprite using CSS/emoji
// A placeholder until real sprite assets are added
export default function OakSprite({ excited = false }) {
  return (
    <div className={`oak-sprite ${excited ? 'excited' : ''}`}>
      <div className="oak-pixel-art">
        {/* Pixel art Professor Oak using CSS grid blocks */}
        <div className="pixel-face">
          <span className="oak-emoji" role="img" aria-label="Professor Oak">
            {excited ? '🧑‍🔬✨' : '🧑‍🔬'}
          </span>
        </div>
        <div className="oak-name-tag">Prof. Oak</div>
      </div>
    </div>
  )
}
