import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
// import "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Insert test demo comment for Joye to learn branches

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/map" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
