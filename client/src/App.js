// import logo from "./logo.svg";

import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
import "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [activeUser, setActiveUser] = useState({});
  const [users, setUsers] = useState([]);

  const updateActiveUser = (name,
    password = activeUser.password,
    status = activeUser.status, lat = activeUser.lat, lng = activeUser.lng) => { 
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
        <Route path="/" element={<LandingPage activeUser={activeUser} updateActiveUser={updateActiveUser} updateUsers={updateUsers} />}></Route>
        <Route path="/map" element={<MainPage activeUser={activeUser} users={users} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
