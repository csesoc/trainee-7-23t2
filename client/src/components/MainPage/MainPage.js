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
import henry from "../../img/Henry.png"
import joshi from "../../img/Joshi.png"
import kim from "../../img/kim.png"
import joye from "../../img/Joye.png"
import cat from "../../img/Cat.png"
import emily from "../../img/emily.png"

const MainPage = ({ activeUser, users }) => {
  
  console.log("hello, " + activeUser.name + "!");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("addFriends");
  const [openModal, setOpenModal] = useState(false);
  const [friendsList, setFriendsList] = useState([
    { name: "Calley", status: "Available", bio: "¯\\_(ツ)_/¯", lat: -33.9182245, lng: 151.2308635, pfp: calley },
    { name: "Luke", status: "In Class", bio: "any baddies?", lat: -33.9170  , lng: 151.235, pfp: luke  },
    { name: "Andrew", status: "Do not disturb", bio: "Fight me cuz",lat: -33.9189  , lng: 151.228, pfp: andrew  },
    { name: "Emily", status: "Do not disturb", bio: "[disintegrating emoji gif]",lat: -33.9190  , lng: 151.230, pfp: emily  },
  ]);
  const [userList, setUserList] = useState([
    { name: "Henry Guo", status: "pending request..", bio: "lts study tgt uwu 😋", pfp: henry},
    { name: "Joshi Ha", status: "pending request..", bio: "I smoke protein on the daily", pfp: joshi },
    
    { name: "Anna", status: "pending request..", bio: "Have you seen my sister?", pfp: cat },
    { name: "Bella", status: "pending request..", bio: "I hate my sister", pfp: cat },
    { name: "Annabella", status: "pending request..", bio: "I'm adopted.", pfp: cat }
  ]);
  const [requestList, setRequestList] = useState([
    { name: "Joye", status: "💀 Doomed", bio: "rapid braincell loss", lat: -33.918, lng: 151.229 , pfp: joye },
    { name: "I'm", status: "💀 Doomed", bio: "i am a pipe", lat: -33.91823, lng: 151.233, pfp: kim },
    { name: "losing", status: "In Class", bio: "i am a pipe", lat: -33.9187, lng: 151.233, pfp: kim},
    { name: "my", status: "Available", bio: "i am a pipe", lat: -33.92, lng: 151.229 , pfp: kim },
    { name: "brain cells", status: "Available", bio: "i am a pipe", lat: -33.9170, lng: 151.228, pfp: kim },
  ]);

  const updateFriendsList = (newList) => {
    setFriendsList(newList);
  };

  const updateUserList = (newList) => {
    setUserList(newList);
  };

  const updateRequestList = (newList) => {
    setRequestList(newList);
  };

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
        return <AddFriends
          friendsList={friendsList}
        />;
      case "findFriends":
        return <FindFriends
          friendsList={friendsList}
          updateFriendsList={updateFriendsList}
          userList={userList}
          updateUserList={updateUserList}
        />;
      case "friendRequests":
        return <FriendRequests
          friendsList={friendsList}
          updateFriendsList={updateFriendsList}
          requestList={requestList}
          updateRequestList={updateRequestList}
        />;
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
