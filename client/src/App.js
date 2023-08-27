// import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
import "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Account from "./components/SettingsPage/Account";
import Friends from "./components/SettingsPage/Friends";
import Status from "./components/SettingsPage/Status";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/map" element={<MainPage />}></Route>
        <Route path="/settings" element={<MainPage />}></Route>

        <SideBar>
          <Routes>
            <Route path="/" element={<Account/>}></Route>
            <Route path="/status" element={<Status/>}></Route>
            <Route path="/account" element={<Account/>}></Route>
            <Route path="/friends" element={<Friends/>}></Route>
          </Routes>
        </SideBar>
      </Routes>

      

    </Router>
  );
}

export default App;
