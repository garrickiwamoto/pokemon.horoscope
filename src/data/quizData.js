// 5 quiz questions — each answer maps to a Pokemon type weight
// Types: fire, water, grass, psychic, electric

export const questions = [
  {
    id: 1,
    question: "Professor Oak is staring at you. What do you do?",
    answers: [
      { text: "Stare back. Dominance established.", weights: { fire: 3, water: 0, grass: 0, psychic: 1, electric: 1 } },
      { text: "Offer him a snack. Conflict avoided.", weights: { fire: 0, water: 3, grass: 1, psychic: 0, electric: 1 } },
      { text: "Ask him what he's researching. Curiosity wins.", weights: { fire: 0, water: 1, grass: 2, psychic: 3, electric: 0 } },
      { text: "Wave awkwardly and speed-walk away.", weights: { fire: 0, water: 1, grass: 1, psychic: 0, electric: 3 } },
    ],
  },
  {
    id: 2,
    question: "Your ideal Friday night is:",
    answers: [
      { text: "Hosting a chaotic house party that the neighbors hate.", weights: { fire: 3, water: 0, grass: 0, psychic: 0, electric: 2 } },
      { text: "Cozy night in, blanket, snacks, zero people.", weights: { fire: 0, water: 3, grass: 2, psychic: 1, electric: 0 } },
      { text: "Reading something weird at 2am and spiraling.", weights: { fire: 0, water: 0, grass: 1, psychic: 3, electric: 1 } },
      { text: "Spontaneously driving somewhere with no plan.", weights: { fire: 1, water: 0, grass: 0, psychic: 0, electric: 3 } },
    ],
  },
  {
    id: 3,
    question: "A Rattata steals your lunch. You:",
    answers: [
      { text: "Chase it. You will not be disrespected.", weights: { fire: 3, water: 0, grass: 1, psychic: 0, electric: 1 } },
      { text: "Let it go. That Rattata needed it more.", weights: { fire: 0, water: 2, grass: 3, psychic: 1, electric: 0 } },
      { text: "Immediately begin plotting your revenge.", weights: { fire: 1, water: 0, grass: 0, psychic: 3, electric: 0 } },
      { text: "Post about it online before doing anything.", weights: { fire: 0, water: 0, grass: 0, psychic: 0, electric: 3 } },
    ],
  },
  {
    id: 4,
    question: "Pick your vibe:",
    answers: [
      { text: "Chaos gremlin with good intentions.", weights: { fire: 2, water: 0, grass: 0, psychic: 0, electric: 3 } },
      { text: "Mysterious and occasionally unsettling.", weights: { fire: 0, water: 0, grass: 0, psychic: 3, electric: 1 } },
      { text: "Chill until extremely not chill.", weights: { fire: 3, water: 0, grass: 1, psychic: 0, electric: 0 } },
      { text: "Reliable, soft, and weirdly into plants.", weights: { fire: 0, water: 2, grass: 3, psychic: 0, electric: 0 } },
    ],
  },
  {
    id: 5,
    question: "In a group project, you are:",
    answers: [
      { text: "The one who does everything and will never let anyone forget it.", weights: { fire: 3, water: 0, grass: 0, psychic: 1, electric: 1 } },
      { text: "The peacekeeper holding this disaster together.", weights: { fire: 0, water: 3, grass: 2, psychic: 0, electric: 0 } },
      { text: "The ideas person who disappears after the first meeting.", weights: { fire: 0, water: 0, grass: 0, psychic: 2, electric: 3 } },
      { text: "Quietly doing the actual work while nobody notices.", weights: { fire: 0, water: 1, grass: 3, psychic: 2, electric: 0 } },
    ],
  },
]

// Tally weights and return the winning type
export function calculateType(answers) {
  const totals = { fire: 0, water: 0, grass: 0, psychic: 0, electric: 0 }
  answers.forEach(({ weights }) => {
    Object.entries(weights).forEach(([type, val]) => {
      totals[type] += val
    })
  })
  return Object.entries(totals).sort((a, b) => b[1] - a[1])[0][0]
}
