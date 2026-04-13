# PRD: Pokemon Horoscope

## Overview
Pokemon Horoscope is a fun, browser-based web app where users answer 5 questions to discover their Pokemon type and receive a hilarious, unhinged horoscope. Users can then invite friends to take the quiz and unlock a compatibility horoscope between them.

The app solves the need for a shareable, social personality quiz with a nostalgic Pokemon twist — giving 20s–40s Pokemon fans a playful way to compare themselves with friends.

---

## Target Users

**Primary:** Non-technical users in their 20s–early 40s who are casual Pokemon fans or grew up with the franchise. They access the app via desktop or mobile browser.

**Secondary:** Friends invited by primary users — they become primary users themselves once they complete the quiz.

---

## Goals & Success Metrics

| Metric | Target |
|---|---|
| Quiz completion rate | 75%+ of users who start the survey finish it |
| Viral sharing rate | 50%+ of completers invite at least 2 friends |

Success one month post-launch looks like strong word-of-mouth growth driven by friend invites, with most traffic coming from shared links rather than direct visits.

---

## MVP Features

1. **Professor Oak onboarding** — Professor Oak welcomes users to "Pokemon Academy" and introduces the quiz
2. **5-question personality survey** — quiz assigns the user one of 5 Pokemon types: Fire, Water, Grass, Psychic, Electric
3. **Personal Pokemon horoscope** — user receives a funny, sarcastic, and unhinged horoscope based on their assigned type
4. **Friend invite via email** — after receiving their horoscope, Professor Oak prompts the user to invite friends by entering their email addresses
5. **Relationship horoscope** — when a friend completes the quiz, both the original user and the friend receive (1) their personal horoscope and (2) a compatibility horoscope between them

---

## Out of Scope (MVP)

- User login / persistent accounts (beyond email storage for invite flow)
- Mobile native app (web only, but must be mobile-responsive)
- Individual Pokemon assignments — v1 uses 5 types only (Fire, Water, Grass, Psychic, Electric); remaining 13 types deferred to v2
- Leaderboards, badges, or gamification beyond the core quiz
- Social media OAuth or direct sharing integrations

---

## User Stories

**Primary user journey:**

1. User lands on the site
2. Professor Oak appears and welcomes them to Pokemon Academy
3. Professor Oak presents a 5-question survey
4. User answers all 5 questions and submits
5. User is revealed their Pokemon type with fanfare
6. User reads their personal horoscope — funny, sarcastic, and unhinged in tone
7. Professor Oak asks if they want to discover their Pokemon horoscope with friends
8. User enters one or more friend email addresses
9. Friends receive an email with a personalized invite link
10. Friend clicks link, sees Professor Oak intro, and completes the 5-question quiz
11. Friend receives their personal horoscope
12. Friend also receives a compatibility horoscope describing the relationship between their type and the original user's type
13. (Original user also receives the compatibility horoscope)

---

## Data & Integrations

**Data stored:**
- User email address
- Assigned Pokemon type
- Friend pairings (who invited whom, for generating relationship horoscopes)

**External services:**
- **Email delivery:** Transactional email service (e.g., Resend or SendGrid) for sending friend invite links
- **PokeAPI (optional):** For Pokemon type imagery and metadata
- **AI API (optional):** For dynamically generating horoscope copy (e.g., Claude API) — alternatively, horoscopes can be hardcoded per type

---

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | React (responsive, browser-first) |
| Backend / Database | Firebase (Firestore for data, Firebase Functions if needed) |
| Email | Resend or SendGrid |
| Hosting | Firebase Hosting |

Simple solo-developer stack. Minimize moving parts.

---

## Design & Theme

- **Aesthetic:** Retro pixelated Pokemon — think Game Boy / Pokemon Red/Blue era
- **Vibe:** 90s nostalgia, playful, chaotic, unhinged humor
- **Tone of copy:** Funny, sarcastic, and absurdist — horoscopes should feel like they were written by a Pokemon professor who has lost their mind
- **Narrator:** Professor Oak guides the entire experience

---

## Timeline & Milestones

No hard deadline. Suggested build order:

1. Quiz logic + type assignment algorithm
2. Hardcoded horoscope copy for all 18 types
3. Professor Oak UI flow (onboarding → quiz → result)
4. Firebase data storage (email + type)
5. Friend invite email flow
6. Compatibility horoscope logic + copy
7. Polish: pixel art, animations, retro UI details

---

## Open Questions

- **Horoscope generation:** Hardcoded copy per type (simpler, consistent) vs. AI-generated (more variety, requires API)? Recommend starting hardcoded.
- **Relationship horoscopes:** v1 has 5×5 = 25 possible type pairings (15 unique combos). Manageable to write unique copy for each — worth doing for quality, or use templates?
- **Invite expiry:** Should invite links expire after a set time?
- **Notification to original user:** How does the original user find out their friend completed the quiz — email notification, or only if they revisit their link?
