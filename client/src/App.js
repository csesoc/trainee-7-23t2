// import logo from "./logo.svg";

import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
import "react-router-dom";
import { useState } from "react";
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

  const [activeUser, setActiveUser] = useState({});
  const [users, setUsers] = useState([]);

  const updateActiveUser = (name, password, status, lat, lng) => { 
    setActiveUser({
      "name": name,
      "password": password,
      "status": status,
      "lat": lat,
      "lng": lng
    });
  }

  const updateUsers = (userArray) => { 
    setUsers(userArray);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage updateActiveUser={updateActiveUser} updateUsers={updateUsers} />}></Route>
        <Route path="/map" element={<MainPage activeUser={activeUser} users={users} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
