import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DialogBox from '../components/DialogBox'
import OakSprite from '../components/OakSprite'
import PixelButton from '../components/PixelButton'

const DIALOGUE = [
  "Hello there! Welcome to POKEMON ACADEMY!",
  "My name is OAK. People call me the Pokemon Professor.",
  "This world is inhabited by creatures called Pokemon...",
  "...and also by people like you, who are basically just Pokemon with anxiety.",
  "Today, I will help you discover which Pokemon TYPE you truly are.",
  "But first — I need to ask you a few questions.",
  "Don't worry. There are no wrong answers.",
  "...Actually there might be. Let's find out.",
]

export default function Onboarding() {
  const [dialogIndex, setDialogIndex] = useState(0)
  const navigate = useNavigate()
  const isLast = dialogIndex === DIALOGUE.length - 1

  function advance() {
    if (isLast) {
      navigate('/quiz')
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
