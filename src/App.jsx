import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import StudentDashboard from "./components/StudentDashboard";
import StartLearning from "./components/StartLearning";
import CoursePage from "./components/CoursePage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/StudentDashboard" element={<StudentDashboard/>}/>
        <Route path="/start-learning" element={<StartLearning/>}/>
        <Route path="/course/:coursename" element={<CoursePage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
