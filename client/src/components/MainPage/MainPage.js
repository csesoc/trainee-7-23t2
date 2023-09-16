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
    { name: "Peter piper", status: "online", bio: "i am a piper" },
    { name: "Pete", status: "online", bio: "i am a pipe" }
  ]);
  const [userList, setUserList] = useState([
    { name: "Henry Guo", status: "pending request..", bio: "i love lunch 😋" },
    { name: "Joshi Ha", status: "pending request..", bio: "bio" },
    { name: "Anna", status: "pending request..", bio: "i live for lunch" },
    { name: "Bella", status: "pending request..", bio: "i LOVE lunch" },
    { name: "Annabella", status: "pending request..", bio: "i munch on lunch" }
  ]);
  const [requestList, setRequestList] = useState([
    { name: "I'm", status: "online", bio: "i am a pipe" },
    { name: "losing", status: "online", bio: "i am a pipe" },
    { name: "my", status: "online", bio: "i am a pipe" },
    { name: "brain cells", status: "online", bio: "i am a pipe" },
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
