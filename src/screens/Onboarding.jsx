import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DialogBox from '../components/DialogBox'
import OakSprite from '../components/OakSprite'
import PixelButton from '../components/PixelButton'

const DIALOGUE = (name) => [
  `Hello there PokéTrainer ${name}!\n \nHave you ever wondered if...`,
  "...you are Charmander or Jigglypuff?",
  "POKéHOROSCOPES will answer which Pokémon type you are.",
  "My name is OAK, the Pokemon Professor.\n\nI will guide you through this discovery.",
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

  return (
    <div className="screen-container">
      <div className="oak-scene">
        <OakSprite />
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
