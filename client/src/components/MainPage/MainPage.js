import "./MainPage.css";
import "./SideBar.js";
import "./sidebar_sections/AddFriends";
import "./sidebar_sections/FindFriends";
import "./sidebar_sections/Inbox";
import React, { useState } from "react";
const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`wrapper ${isSidebarOpen ? "" : "collapsed"}`}>       
      <div class="iconBar">
        <button onClick={toggleSidebar} class="close">
          ☰
        </button>
        <ul class="icons">
          <a href="map/addfriends" onClick={toggleSidebar} >👥</a>
          <a href="map/findfriends" onClick={toggleSidebar} >🔍</a>
          <a href="map/inbox" onClick={toggleSidebar} >📩</a>
          <a href="settings">🔧</a>
        </ul>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`} id="mySidenav">
        <div class="pageType">
          <h3>Add Friends</h3>
        </div>
        <div class="search">
          <form action="#">
            <input type="text"
              placeholder=" Search..."
              name="search"/>
            <button>
              🔍
            </button>
          </form>
        </div>

        <ul class="listPeople">
          <li class="person">
            <span class="dot"></span>
            <h3>Name</h3>
            <p>Status</p>
          </li>
        </ul>
      </div>
      <div class="map">
        <p>this is the map</p>
      </div>
    </div>
  );
};
export default MainPage;
