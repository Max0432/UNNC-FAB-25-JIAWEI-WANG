import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlayPage from './components/PlayPage';
import StudyPage from './components/StudyPage';
import AssessmentPage from './components/AssessmentPage';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/study" element={<StudyPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
      </Routes>
    </Router>
  );
}
