import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DialogBox from '../components/DialogBox'
import OakSprite from '../components/OakSprite'
import PokemonSprite from '../components/PokemonSprite'
import PixelButton from '../components/PixelButton'

const DIALOGUE = (name) => [
  `Hello there PokéTrainer ${name}!\n \nHave you ever wondered...`,
  <>...if you are a <span style={{ fontSize: '24px' }}>🔥</span> fire or <span style={{ fontSize: '24px' }}>🧚</span> fairy type?</>,
  "POKéHOROSCOPES will answer which Pokémon type you are.",
  "I am the Pokemon Professor.\n\nI will guide you through this discovery.",
  "First — I need to ask you a few questions.",
]

export default function Onboarding() {
  const [dialogIndex, setDialogIndex] = useState(0)
  const navigate = useNavigate()
  const { state } = useLocation()
  const oakLines = DIALOGUE(state?.name || 'Trainer')
  const isLast = dialogIndex === oakLines.length - 1

  function advance() {
    if (isLast) {
      navigate('/quiz', { state: { name: state?.name, email: state?.email } })
    } else {
      setDialogIndex(i => i + 1)
    }
  }

  function goBack() {
    if (dialogIndex > 0) {
      setDialogIndex(i => i - 1)
    } else {
      navigate('/', { state: { name: state?.name, email: state?.email } })
    }
  }

  const showPokemon = dialogIndex === 1
  const [showCharmander, setShowCharmander] = useState(true)

  useEffect(() => {
    if (!showPokemon) return
    const interval = setInterval(() => setShowCharmander(v => !v), 2000)
    return () => clearInterval(interval)
  }, [showPokemon])

  return (
    <div className="screen-container">
      <div className="oak-scene">
        {showPokemon ? (
          <div className="pokemon-pair">
            {showCharmander
              ? <PokemonSprite src="/sprites/charmander.png" alt="Charmander" />
              : <PokemonSprite src="/sprites/fairy.png" alt="Jigglypuff" />
            }
          </div>
        ) : (
          <OakSprite />
        )}
      </div>
      <DialogBox
        speaker="Prof. Oak"
        text={oakLines[dialogIndex]}
        onNext={advance}
        onBack={goBack}
        buttonLabel={isLast ? "Let's go! ▶" : "Next ▶"}
      />
    </div>
  )
}
