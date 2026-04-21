// 5 quiz questions — each answer maps to a Pokemon type weight
// Types: fire, water, grass, psychic, electric

export const questions = [
  {
    id: 1,
    question: "You're in Pallet Town with your newly selected starter Pokémon. What do you do next?",
    answers: [
      { text: "Head straight into the tall grass — growth only comes from challenges.", weights: { fire: 3, water: 0, grass: 0, psychic: 0, electric: 1 } },
      { text: "Study the town's layout and plan the most efficient route first.", weights: { fire: 0, water: 0, grass: 1, psychic: 3, electric: 0 } },
      { text: "Talk to everyone until someone gives me a useful tip.", weights: { fire: 0, water: 1, grass: 0, psychic: 0, electric: 3 } },
      { text: "Find a quiet spot to bond with my starter before anything else.", weights: { fire: 0, water: 2, grass: 3, psychic: 0, electric: 0 } },
    ],
  },
  {
    id: 2,
    question: "Gary , your childhood rival, challenges you to a battle right before a big Gym fight. How do you handle it?",
    answers: [
      { text: "Accept without hesitation — competition brings out the best in us both.", weights: { fire: 3, water: 0, grass: 0, psychic: 0, electric: 1 } },
      { text: "Politely decline; I won't risk my team's energy on drama right now.", weights: { fire: 0, water: 0, grass: 3, psychic: 2, electric: 0 } },
      { text: "Battle them, then offer to heal together at the Pokémon Center after.", weights: { fire: 0, water: 3, grass: 1, psychic: 0, electric: 0 } },
      { text: "Size up their team first and decide based on what I observe.", weights: { fire: 0, water: 0, grass: 1, psychic: 3, electric: 0 } },
    ],
  },
  {
    id: 3,
    question: "What do you aspire to achieve as a Pokémon Trainer?",
    answers: [
      { text: "To be the very best that no one ever was.", weights: { fire: 3, water: 0, grass: 0, psychic: 0, electric: 1 } },
      { text: "To understand every Pokémon species and document them all.", weights: { fire: 0, water: 0, grass: 1, psychic: 3, electric: 0 } },
      { text: "To build a team so in-sync we move like one — pure mastery.", weights: { fire: 1, water: 0, grass: 3, psychic: 1, electric: 0 } },
      { text: "To open a Pokémon sanctuary where every injured Pokémon finds safety.", weights: { fire: 0, water: 3, grass: 2, psychic: 0, electric: 0 } },
    ],
  },
  {
    id: 4,
    question: "After a tough loss to Gym Leader Brock, what do you do next?",
    answers: [
      { text: "Retreat to Lavender Town and sit with the feeling for a while.", weights: { fire: 0, water: 2, grass: 3, psychic: 0, electric: 0 } },
      { text: "Immediately start a new training plan — action is my healing.", weights: { fire: 3, water: 0, grass: 0, psychic: 0, electric: 1 } },
      { text: "Write it all out in a long journal entry in my PokéDex notes.", weights: { fire: 0, water: 1, grass: 0, psychic: 3, electric: 0 } },
      { text: "Hang out with my Pokémon team. Their comfort is enough.", weights: { fire: 0, water: 3, grass: 1, psychic: 0, electric: 0 } },
    ],
  },
  {
    id: 5,
    question: "Team Rocket is threatening a town but you're exhausted and low on supplies. What do you do?",
    answers: [
      { text: "Step up — protecting others always comes before personal comfort.", weights: { fire: 3, water: 1, grass: 0, psychic: 0, electric: 0 } },
      { text: "Form a coalition with nearby trainers; no one should face this alone.", weights: { fire: 0, water: 2, grass: 0, psychic: 0, electric: 3 } },
      { text: "Scout the situation carefully before committing to action.", weights: { fire: 0, water: 0, grass: 1, psychic: 3, electric: 0 } },
      { text: "Trust that someone stronger will handle it — I know my limits.", weights: { fire: 0, water: 0, grass: 3, psychic: 1, electric: 0 } },
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
