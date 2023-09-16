// import logo from "./logo.svg";

import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
import "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const [loggedInUsers, setLoggedInUsers] = useState([{}, {}])
// const [users, setUsers] = useState([
//   {
//     "name": "Henry Guo",
//     "status": "online",
//     "lat": -33.9173,
//     "lng": 151.2313,
// }
// ])

// const [friends, setFriends] = useState([])

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
