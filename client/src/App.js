// import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
// import "react-router-dom";
// import SideBar from "./components/MainPage/SideBar";
// import AddFriends from "./components/MainPage/sidebar_sections/AddFriends";
// import FindFriends from "./components/MainPage/sidebar_sections/FindFriends";
// import Inbox from "./components/MainPage/sidebar_sections/Inbox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/map" element={<MainPage />}></Route>

        {/* <SideBar>
          <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/addfriends" element={<AddFriends/>}></Route>
            <Route path="/findfriends" element={<FindFriends/>}></Route>
            <Route path="/inbox" element={<Inbox/>}></Route>
          </Routes>
        </SideBar> */}

      </Routes>
    </Router>
  );
}

export default App;
