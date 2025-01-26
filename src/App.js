import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login" 
import Home from "./pages/applicants/Home"
import Search from "./pages/applicants/Search"
import Track from "./pages/applicants/Track"
import Saved from "./pages/applicants/Saved"
import Resources from "./pages/applicants/Resources"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/track" element={<Track />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
