import "./MainPage.css";
import "./SideBar.js";
import AddFriends from "./sidebar_sections/AddFriends";
import FindFriends from "./sidebar_sections/FindFriends";
import FriendRequests from "./sidebar_sections/FriendRequests";
import Map from "./Map.js"
import React, { useState } from "react";

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState("addFriends");

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
        return <AddFriends />;
      case "findFriends":
        return <FindFriends />;
      case "friendRequests":
        return <FriendRequests />;
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
          <a href="#"  onClick={() => handleIconClick("addFriends")}>👥</a>
          <a href="#" onClick={() => handleIconClick("findFriends")} >🔍</a>
          <a href="#" onClick={() => handleIconClick("friendRequests")} >📩</a>
          <a href="settings">🔧</a>
        </ul>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`} id="mySidenav">
        {renderSidebarContent()}
      </div>
      
      <div class="map">
        <Map />
      </div>
    </div>
  );
};
export default MainPage;
