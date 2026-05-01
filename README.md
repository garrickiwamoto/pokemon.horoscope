# Pokehoroscope

A personality quiz app styled like the original Game Boy Pokémon games. Answer 5 questions, get sorted into a Pokémon type, and receive your weekly horoscope — with Prof. Oak delivering the results.

## About

A personal project built to practice owning a full stack end-to-end — frontend UI, data modeling, and backend persistence (Firebase/Firestore) — all in one small, self-contained app.

## Features

- **Personality quiz** — 5 questions with a weighted scoring system that determines your type (Fire, Water, Grass, Psychic, or Electric)
- **Prof. Oak reveal** — results are delivered via a Game Boy-style dialog with pixel art sprites
- **Personal horoscope** — a multi-page horoscope for your type, paginated through a dialog box
- **Friend invite flow** — share a link with a friend; after they complete the quiz, you both see a relationship compatibility horoscope
- **Pixel art aesthetic** — Press Start 2P font, pixel grid background, sprite rendering with white-background removal via canvas

## Tech Stack

- React 18 + React Router v6
- Vite
- Firebase (Firestore) — stores user results and friend invite state
- CSS custom properties — no UI library, all hand-written pixel art styles

## Getting Started

```bash
npm install
npm run dev
```

### Firebase Setup

Create a Firebase project, enable Firestore, and add your config to `src/firebase.js`.

## Project Structure

```
src/
├── screens/
│   ├── Welcome.jsx          # Name + email entry
│   ├── Onboarding.jsx       # Prof. Oak intro
│   ├── Quiz.jsx             # 5-question personality quiz
│   ├── Results.jsx          # Type reveal + horoscope display
│   ├── InviteFriend.jsx     # Send invite to a friend
│   └── FriendLanding.jsx    # Friend join flow
├── components/
│   ├── DialogBox.jsx
│   ├── OakSprite.jsx
│   ├── PokemonSprite.jsx    # Canvas-based sprite with white-bg removal
│   ├── TypeBadge.jsx
│   ├── PixelButton.jsx
│   └── RelationshipHoroscope.jsx
├── data/
│   ├── quizData.js          # Questions, answers, and type weights
│   └── horoscopes.js        # Personal + relationship horoscope text and type colors
└── services/
    └── firebaseService.js
```

## Adding / Editing Content

- **Quiz questions** — edit `src/data/quizData.js`. Each answer has a `weights` object assigning points to each type.
- **Horoscope text** — edit `src/data/horoscopes.js`. Personal horoscopes are keyed by type; relationship horoscopes are keyed by sorted type pair (e.g. `fire_water`).
- **Sprites** — drop PNGs into `public/sprites/` named `fire.png`, `water.png`, `grass.png`, `psychic.png`, `electric.png`.

## Build

```bash
npm run build
```

Output goes to `dist/`.
