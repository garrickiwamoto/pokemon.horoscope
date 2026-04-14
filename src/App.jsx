import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './screens/Welcome'
import Onboarding from './screens/Onboarding'
import Quiz from './screens/Quiz'
import Results from './screens/Results'
import InviteFriend from './screens/InviteFriend'
import FriendLanding from './screens/FriendLanding'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/invite" element={<InviteFriend />} />
        {/* Friend invite link: /join?ref=<userId> */}
        <Route path="/join" element={<FriendLanding />} />
      </Routes>
    </BrowserRouter>
  )
}
