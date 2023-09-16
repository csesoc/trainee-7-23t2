import "./MainPage.css";
import "./SideBar.js";
import AddFriends from "./sidebar_sections/AddFriends";
import FindFriends from "./sidebar_sections/FindFriends";
import FriendRequests from "./sidebar_sections/FriendRequests";
import Map from "./Map.js";
import React, { useState } from "react";
import Modal from "./Modal";

const MainPage = ({ activeUser, users }) => {
  
  console.log("hello, " + activeUser.name + "!");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("addFriends");
  const [openModal, setOpenModal] = useState(false);
  const [friendsList, setFriendsList] = useState([
    { id: 1, name: "Peter", status: "online", bio: "i am a piper" },
    { id: 2, name: "Pete", status: "online", bio: "i am a pipe" }
  ]);
  const [userList, setUserList] = useState([
    { id: 1, name: "Henry Guo", status: "online", bio: "i love lunch 😋" },
    { id: 2, name: "Joshi Ha", status: "online", bio: "bio" },
    { id: 3, name: "Anna", status: "online", bio: "i live for lunch" },
    { id: 4, name: "Bella", status: "online", bio: "i LOVE lunch" },
    { id: 5, name: "Annabella", status: "online", bio: "i munch on lunch" }
  ]);

  const updateFriendsList = (newList) => {
    setFriendsList(newList);
  };

  const updateUserList = (newList) => {
    setUserList(newList);
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
          userList={userList}
          updateUserList={updateUserList}
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
          <a href="#" onClick={() => setOpenModal(true)}>
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
        <Map />
        {openModal && <Modal closeModal={setOpenModal} />}
      </div>
    </div>
  );
};
export default MainPage;
