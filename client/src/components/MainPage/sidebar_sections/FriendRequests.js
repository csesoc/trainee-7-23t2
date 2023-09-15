// Inbox.js
import React from "react";

const Inbox = () => {
  return (
    <div className="inbox">
      <div className="pageType">
        <h3>Friend Requests</h3>
      </div>
      <div className="search">
        <form action="#">
          <input
            type="text"
            placeholder="Search..."
            name="search"
          />
          {/* <button>
            🔍
          </button> */}
        </form>
      </div>

      <ul className="listPeople">
        <li className="person">
          <span className="dot"></span>
          <div className="personDetails">
            <h3>Name</h3> 
            <div className="personRequestButtons">
              <button onClick={() => {}} className="acceptRequest">Accept</button>
              <button onClick={() => {}} className="declineRequest">Decline</button>
            </div>
          </div>
        </li>
        <li className="person">
          <span className="dot"></span>
          <div className="personDetails">
            <h3>Name</h3> 
            <div className="personRequestButtons">
              <button onClick={() => {}} className="acceptRequest">Accept</button>
              <button onClick={() => {}} className="declineRequest">Decline</button>
            </div>
          </div>
        </li>
        {/* Additional list items for friends */}
      </ul>
    </div>
  );
};

export default Inbox;
