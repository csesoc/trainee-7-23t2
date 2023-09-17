import "./MainPage.css";
import "./SideBar.js";
import AddFriends from "./sidebar_sections/AddFriends";
import FindFriends from "./sidebar_sections/FindFriends";
import FriendRequests from "./sidebar_sections/FriendRequests";
import Map from "./Map.js";
import React, { useState } from "react";
import Modal from "./Modal";
import calley from "../../img/Calley.png"
import luke from "../../img/Luke.png"
import andrew from "../../img/Andrew.png"
const MainPage = ({ activeUser, users }) => {
  
  console.log("hello, " + activeUser.name + "!");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("addFriends");
  const [openModal, setOpenModal] = useState(false);
  const [friendsList, setFriendsList] = useState([
    { id: 11, name: "Calley", bio: "hi", lat: -33.9182245, lng: 151.2308635, pfp: calley },
    { id: 21, name: "Luke", bio: "any baddies?", lat: -33.9170  , lng: 151.235, pfp: luke  },
    { id: 31, name: "Andrew", bio: "my name is Andrew ;)",lat: -33.9189  , lng: 151.228, pfp: andrew  },
  ]);

  /*
    {
      name: "Henry Guo",
      password: "123jkl",
      status: "online",
      lat: -33.9173,
      lng: 151.2313
    }
  */

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleIconClick = (content) => {
    setSelectedContent(content);
    setIsSidebarOpen(true);
  };

  const renderSidebarContent = () => {
    switch (selectedContent) {
      case "addFriends":
        return <AddFriends friendsList={friendsList}/>;
      case "findFriends":
        return <FindFriends />;
      case "friendRequests":
        return <FriendRequests friendsList={friendsList}/>;
      default:
        return null;
    }
  };

  return (
    <div className={`wrapper ${isSidebarOpen ? "" : "collapsed"}`}>
      <div class="iconBar">
        <button onClick={toggleSidebar} class="close">
          ☰
        </button>
        <ul class="icons">
          <a href="#" onClick={() => handleIconClick("addFriends")}>
            👥
          </a>
          <a href="#" onClick={() => handleIconClick("findFriends")}>
            🔍
          </a>
          <a href="#" onClick={() => handleIconClick("friendRequests")}>
            📩
          </a>
          <a href="#" onClick={() => setOpenModal(!openModal)}>
            🔧
          </a>
        </ul>
      </div>

      <div
        className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}
        id="mySidenav"
      >
        {renderSidebarContent()}
      </div>

      <div class="map">
        <Map friendsList={friendsList}/>
        {openModal && <Modal closeModal={setOpenModal} activeUser={activeUser} />}
      </div>
    </div>
  );
};
export default MainPage;
