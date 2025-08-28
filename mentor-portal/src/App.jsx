import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import StudentsPage from './pages/StudentsPage'
import MentorsPage from './pages/MentorsPage'
import ProfilePage from './pages/ProfilePage'
import ChatPage from './pages/ChatPage'
import VideoCallPage from './pages/VideoCallPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="students" element={<StudentsPage />} />
          <Route path="mentors" element={<MentorsPage />} />
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="call" element={<VideoCallPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
