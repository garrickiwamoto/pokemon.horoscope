import PokemonSprite from './PokemonSprite'

export default function OakSprite({ excited = false }) {
  return (
    <div className={`oak-sprite ${excited ? 'excited' : ''}`}>
      <div className="oak-pixel-art">
        <div className="pixel-face">
          <PokemonSprite
            src="/sprites/profoak.png"
            alt="Professor Oak"
            className={excited ? 'excited' : ''}
          />
        </div>
      </div>
    </div>
  )
}
