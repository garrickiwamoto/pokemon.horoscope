import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import DialogBox from '../components/DialogBox'
import OakSprite from '../components/OakSprite'
import PixelButton from '../components/PixelButton'

const DIALOGUE = [
  "Hello there Poké Trainer! \n Have you ever wondered if you more like Charmander or Jigglypuff?", 
  "POKéHOROSCOPES will answer which Pokémon TYPE you are.",
  "My name is OAK, the Pokemon Professor.\n I will guide you through this discovery.",
  "First — I need to ask you a few questions.",
]

export default function Onboarding() {
  const [dialogIndex, setDialogIndex] = useState(0)
  const navigate = useNavigate()
  const { state } = useLocation()
  const isLast = dialogIndex === DIALOGUE.length - 1

  function advance() {
    if (isLast) {
      navigate('/quiz', { state: { name: state?.name, email: state?.email } })
    } else {
      setDialogIndex(i => i + 1)
    }
  }

  return (
    <div className="screen-container">
      <div className="oak-scene">
        <OakSprite />
      </div>
      <DialogBox
        speaker="Prof. Oak"
        text={DIALOGUE[dialogIndex]}
        onNext={advance}
        buttonLabel={isLast ? "Let's go! ▶" : "Next ▶"}
      />
    </div>
  )
}
