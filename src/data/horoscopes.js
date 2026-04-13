// ─── Personal Horoscopes ────────────────────────────────────────────────────

export const personalHoroscopes = {
  fire: {
    type: 'Fire',
    emoji: '🔥',
    color: '#FF6B35',
    secondaryColor: '#FF4500',
    tagline: 'You are a walking red flag and people love you for it.',
    horoscope: `Congratulations, you raging dumpster fire. You are a FIRE TYPE.

The stars have spoken, and they are mildly afraid of you.

This week, Mercury is in retrograde, which means absolutely nothing to you because you don't read the room anyway. You will make at least three impulsive decisions before Thursday. Two of them will work out spectacularly. One will require a formal apology.

Your energy is: a candle left unattended. People are drawn to your warmth right up until you burn their eyebrows off.

Love forecast: Someone is absolutely obsessed with you. Whether that's admiration or a restraining order depends on the week.

Career forecast: You will either get promoted or fired. The stars cannot tell which because your chaos energy is scrambling the signal.

Lucky item this week: A fire extinguisher. Not for you — for the people around you.

Professor Oak's notes: "This one set my lab on fire. Twice. I gave them an A."`,
  },

  water: {
    type: 'Water',
    emoji: '💧',
    color: '#4A90D9',
    secondaryColor: '#2171B5',
    tagline: 'Emotionally deep. Possibly too deep. Are you okay?',
    horoscope: `Well, well, well. A WATER TYPE. How refreshingly predictable.

You are a vast ocean of feelings and your friends are exhausted.

The moon — your ruler, your icon, your personal life-ruiner — is waxing this week, which means your emotions will also wax. And wax. And KEEP WAXING until you cry at a commercial for paper towels.

Your energy is: a gentle stream that is actually a riptide. People think you're chill until you've already swept them three miles downstream.

Love forecast: You will fall deeply in love with someone's "potential." The stars beg you not to. You will anyway.

Career forecast: Your boss will say something mildly passive-aggressive and you will replay it in the shower for fourteen days.

Lucky item this week: A journal. Fill it with feelings. Lock it. Throw it in the actual ocean.

Professor Oak's notes: "Incredibly empathetic. Cried when I told them Pokémon don't have real feelings. I may have been wrong about that."`,
  },

  grass: {
    type: 'Grass',
    emoji: '🌿',
    color: '#4CAF50',
    secondaryColor: '#2E7D32',
    tagline: 'You are a plant parent who is also, spiritually, a plant.',
    horoscope: `Take a deep breath. You are a GRASS TYPE. The most patient, most nurturing, most quietly unhinged type of all.

You are the person who remembers everyone's birthday, keeps a succulent alive for seven years, and then has a complete existential breakdown at a farmer's market.

Venus is doing something this week — honestly the details don't matter — but it means you will spend significant time tending to everyone else's needs while your own wilt gently in the corner.

Your energy is: a greenhouse. Warm, humid, full of life, and slightly overwhelming if you're in there too long.

Love forecast: You will give someone the most thoughtful gift they've ever received and they will say "oh cool, thanks." This will haunt you.

Career forecast: You will quietly fix a problem no one knew existed. No one will thank you. You will fix another one anyway.

Lucky item this week: A plant. You don't need more plants. Get the plant.

Professor Oak's notes: "Brought me homemade soup when I had a cold. I don't deserve them. None of us do."`,
  },

  psychic: {
    type: 'Psychic',
    emoji: '🔮',
    color: '#9C27B0',
    secondaryColor: '#6A1B9A',
    tagline: 'You know things. Unsettling things. Please stop.',
    horoscope: `Ah. You already knew you were a PSYCHIC TYPE, didn't you.

Of course you did. You've been watching people too carefully for too long.

Pluto — the planet of transformation, death, and extremely uncomfortable self-awareness — is making direct eye contact with your chart this week. This means you will have at least one conversation where you accidentally reveal you know something you shouldn't, and the vibe will never fully recover.

Your energy is: a fortune cookie that's weirdly accurate. People laugh it off and then lie awake at 3am thinking about it.

Love forecast: You will correctly predict how a relationship ends before it begins. You will date them anyway, out of curiosity. The stars respect this.

Career forecast: You will have a brilliant idea in the shower, fail to write it down, and spend the rest of the week trying to remember it. It was really good. It's gone.

Lucky item this week: A notebook by your bed. Also maybe a therapist. The stars are not licensed to say more.

Professor Oak's notes: "Told me what I was going to say before I said it. I haven't made eye contact with them since. Remarkable."`,
  },

  electric: {
    type: 'Electric',
    emoji: '⚡',
    color: '#FFD700',
    secondaryColor: '#FFA500',
    tagline: 'ADHD or destiny? The stars say: yes.',
    horoscope: `SURPRISE! You are an ELECTRIC TYPE! Which you probably already forgot because you started reading this and then checked your phone!

Welcome back.

Jupiter — the planet of expansion, excess, and doing too much — is basically your best friend this week, which means you will start five new projects, finish none of them, and have the absolute time of your life doing it.

Your energy is: a phone charger that also keeps shocking people. Useful. Essential. Slightly dangerous if handled carelessly.

Love forecast: You will send someone a meme instead of saying "I like you." They will understand. This is your love language and it works.

Career forecast: You will have a meeting about having a meeting. You will suggest something chaotic in said meeting. It will somehow be the right call.

Lucky item this week: Headphones. You need them. Your brain needs them. Society needs you to have them.

Professor Oak's notes: "Incredible potential. Attention span of a Goldeen. Sent me eleven texts in a row and then apologized for the twelfth."`,
  },
}

// ─── Relationship Horoscopes ─────────────────────────────────────────────────
// Keys are sorted alphabetically: e.g., "fire_water" not "water_fire"

function pairKey(a, b) {
  return [a, b].sort().join('_')
}

export const relationshipHoroscopes = {
  [pairKey('fire', 'fire')]: {
    title: 'Double Fire: A Beautiful Disaster',
    emoji: '🔥🔥',
    horoscope: `Two Fire types walk into a room and immediately begin competing over who got there first.

Congratulations. You have found your match. Your soulmate. Your greatest enemy. Possibly all three simultaneously.

This pairing is electric, chaotic, and statistically likely to end with someone dramatically storming out only to come back five minutes later because they forgot their jacket. The stars predict at least one screaming match that turns into laughing. The neighbors will be confused.

You will push each other to greatness or total ruin. The stars are placing bets on both.

Compatibility rating: 🔥🔥🔥🔥🔥 — off the charts, possibly literally.`,
  },

  [pairKey('water', 'water')]: {
    title: 'Double Water: The Support Group',
    emoji: '💧💧',
    horoscope: `Two Water types meet and immediately begin exchanging childhood traumas over iced coffee.

You will understand each other so deeply it becomes its own problem. There will be no conflict because you'll both sense the other's feelings and preemptively apologize for things that haven't happened yet. Therapy will be involved. Multiple therapists, actually. Possibly group therapy together.

The good news: this is one of the most emotionally supportive pairings in the known universe. The bad news: you will both spiral at the same time and nobody will be the designated stable one.

Compatibility rating: 💧💧💧💧 — deeply loving, occasionally a flood.`,
  },

  [pairKey('grass', 'grass')]: {
    title: 'Double Grass: The Plant People',
    emoji: '🌿🌿',
    horoscope: `You have found someone who also names their houseplants and takes it personally when a succulent dies.

This is a relationship built on patience, quiet acts of service, and a shared spreadsheet for watering schedules. You will make sourdough together. You will go to bed at 10pm voluntarily. You will be disgustingly happy in ways that confuse and unsettle your friends.

The challenge: neither of you will say when something is wrong until it has been quietly festering for three weeks. The stars recommend speaking words out loud occasionally.

Compatibility rating: 🌿🌿🌿🌿🌿 — disturbingly wholesome.`,
  },

  [pairKey('psychic', 'psychic')]: {
    title: 'Double Psychic: A Timeline Collapses',
    emoji: '🔮🔮',
    horoscope: `Two Psychic types enter a relationship and immediately begin analyzing it to death.

You both know exactly what the other is thinking. This sounds romantic. It is actually terrifying. There are no surprises. There are only confirmed hypotheses and the occasional debate about whether free will exists.

You will have the most intellectually stimulating relationship of anyone in your social circle. You will also overthink your way out of it at least once and get back together after a conversation so profound your friends can't even follow it.

Compatibility rating: 🔮🔮🔮🔮 — cosmically intertwined, occasionally insufferable.`,
  },

  [pairKey('electric', 'electric')]: {
    title: 'Double Electric: Send Help',
    emoji: '⚡⚡',
    horoscope: `Two Electric types in the same space is essentially a controlled explosion. "Controlled" being used loosely here.

You will have the most fun of anyone in this entire horoscope system. You will also never finish a sentence, lose track of plans, start seventeen inside jokes, and forget what you were originally arguing about mid-argument.

Sleep is optional. Plans are suggestions. Every hangout turns into an event. The stars are exhausted just looking at this pairing and also deeply jealous.

Compatibility rating: ⚡⚡⚡⚡⚡ — chaotic neutral icon duo.`,
  },

  [pairKey('fire', 'water')]: {
    title: 'Fire & Water: The Classic Catastrophe',
    emoji: '🔥💧',
    horoscope: `Ah. Fire and Water. The universe's favorite "will they won't they" energy.

One of you runs hot. One of you runs deep. Together you create either steam — which is powerful and useful — or a lot of hissing and a mess on the floor.

Fire thinks Water is being dramatic. Water thinks Fire needs to calm down. They are both correct. The attraction is undeniable. The arguments are legendary. The makeup is worth it.

This pairing works when Fire learns to listen and Water learns to say the thing out loud instead of hoping Fire somehow psychically knows.

Compatibility rating: 🔥💧🔥💧 — volatile, magnetic, genuinely iconic.`,
  },

  [pairKey('fire', 'grass')]: {
    title: 'Fire & Grass: The Protective Disaster',
    emoji: '🔥🌿',
    horoscope: `Fire and Grass. One of you is the chaos. One of you is quietly holding the chaos together with homemade granola and sheer willpower.

Grass genuinely believes they can fix Fire. Fire genuinely believes Grass doesn't need fixing. They are both half right. What actually happens is Grass becomes Fire's unofficial life manager and Fire makes Grass feel more alive than they've felt in years.

The danger: Grass burns out trying to maintain this. Fire must occasionally ask "how are YOU doing" and actually wait for the answer.

Compatibility rating: 🔥🌿🔥🌿 — transformative, if handled with care.`,
  },

  [pairKey('fire', 'psychic')]: {
    title: 'Fire & Psychic: The Power Couple Nobody Asked For',
    emoji: '🔥🔮',
    horoscope: `Fire acts. Psychic plans three steps ahead. Together, nothing can stop them. Including common sense.

This is the pairing that starts a business together, or a revolution, or both. Fire has the drive; Psychic has the strategy. Fire will do the impossible thing; Psychic already knew it would work.

The challenge: Fire thinks Psychic is being cold. Psychic thinks Fire is being reckless. They are each exactly right about each other. This is the source of both their conflict and their unstoppable momentum.

Compatibility rating: 🔥🔮🔥🔮 — genuinely dangerous. In the cool way.`,
  },

  [pairKey('fire', 'electric')]: {
    title: 'Fire & Electric: A Noise Complaint Waiting to Happen',
    emoji: '🔥⚡',
    horoscope: `Fire and Electric walk into every room like they own it and immediately redecorate without asking.

This is the loudest pairing in the zodiac. Not in a bad way — in a "everyone at this party is gathered around these two" way. You share energy, intensity, and a mutual inability to sit still.

The problem is neither of you is the calm one. In a crisis, you will both be incredibly useful and also making everything slightly worse simultaneously. You need a Grass or Water person on speed dial. For emergencies.

Compatibility rating: 🔥⚡🔥⚡ — absolutely feral. A five-star experience.`,
  },

  [pairKey('water', 'grass')]: {
    title: 'Water & Grass: The Wellness Couple',
    emoji: '💧🌿',
    horoscope: `Water and Grass. The universe's most wholesome pairing, and somehow also the most passive-aggressive.

You are both givers. This is beautiful. It is also a problem because you will spend years each trying to out-nurture the other until someone finally cracks and admits they need something for themselves.

You make each other feel safe in a way that's almost suspicious. Friends will ask "are you guys okay?" and you'll look at them confused because you've never been better. It's weird. Keep going.

Compatibility rating: 💧🌿💧🌿 — emotionally rich, occasionally in denial.`,
  },

  [pairKey('water', 'psychic')]: {
    title: 'Water & Psychic: The Deep End',
    emoji: '💧🔮',
    horoscope: `Water feels everything. Psychic understands everything. Together, they have conversations that last six hours and solve nothing while still being deeply satisfying.

This pairing operates entirely below the surface. To outside observers, you seem quiet. Inside, you are running a constant high-bandwidth emotional data exchange that would crash lesser humans.

The danger: you can both spiral independently and then spiral together in a kind of synchronized despair. Set a 2am cutoff for existential conversations. This is non-negotiable.

Compatibility rating: 💧🔮💧🔮 — profoundly deep, occasionally a void.`,
  },

  [pairKey('water', 'electric')]: {
    title: 'Water & Electric: The Odd Couple That Works',
    emoji: '💧⚡',
    horoscope: `Water wants depth. Electric wants to start a new project and has fourteen tabs open. This sounds like a disaster and honestly it kind of is but they're both fine with it.

Electric drags Water out of their emotional cave and into the world. Water grounds Electric long enough to actually finish something. It is an extremely functional accidental codependency.

The stars note that in real life, water and electricity are a terrible combination. In this case, somehow, it sparks. (Professor Oak made that joke. It was not well received in the lab.)

Compatibility rating: 💧⚡💧⚡ — unlikely, unstoppable, oddly charming.`,
  },

  [pairKey('grass', 'psychic')]: {
    title: 'Grass & Psychic: The Quiet Intellectuals',
    emoji: '🌿🔮',
    horoscope: `Grass tends. Psychic observes. Together they create the most quietly intense relationship at any dinner party.

You both notice things others miss. You just respond to those things differently — Grass makes someone tea; Psychic adds them to their mental model of humanity. Both are valid. One is warmer.

This pairing is built on respect, curiosity, and a shared appreciation for silence that isn't awkward. You can sit together doing completely separate things and feel completely connected. It's the dream.

Compatibility rating: 🌿🔮🌿🔮 — slow burn, profound, grows with time.`,
  },

  [pairKey('grass', 'electric')]: {
    title: 'Grass & Electric: The Handler and the Chaos',
    emoji: '🌿⚡',
    horoscope: `Electric is a lot. Grass is the person who signed up to handle a lot, and is surprisingly okay with it.

Grass gives Electric a home base — somewhere to land, decompress, and eat a real meal. Electric gives Grass permission to be spontaneous, which they secretly desperately needed.

The deal: Grass gets to be the responsible one (they love this). Electric promises to occasionally slow down (they try). Somehow this works. Nobody is more surprised than them.

Compatibility rating: 🌿⚡🌿⚡ — chaotic good. Genuinely good for each other.`,
  },

  [pairKey('psychic', 'electric')]: {
    title: 'Psychic & Electric: The Visionaries',
    emoji: '🔮⚡',
    horoscope: `Psychic has the vision. Electric has the energy to actually execute it at 11pm on a Tuesday.

This is a pairing of big ideas and zero chill. You will either build something remarkable together or talk about building something remarkable for a very long time while eating takeout. Both are valid timelines.

Psychic occasionally wishes Electric would think before acting. Electric occasionally wishes Psychic would stop thinking and just act. The sweet spot is somewhere in the middle and you'll find it together, probably by accident.

Compatibility rating: 🔮⚡🔮⚡ — visionary, frenetic, genuinely exciting.`,
  },
}

export function getRelationshipHoroscope(typeA, typeB) {
  const key = pairKey(typeA, typeB)
  return relationshipHoroscopes[key] || null
}

export { pairKey }
