// FindFriends.js
import React from "react";

const FindFriends = () => {
  return (
    <div>
      <div className="pageType">
        <h3>Find Friends</h3>
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
            <p>Description/Bio</p>

          </div>
          <button className="addButton" onClick={() => {}}>+</button>

          
        </li>
        <li className="person">
          <span className="dot"></span>
          <div className="personDetails">
            <h3>Name</h3>
            <p>Description/Bio</p>

          </div>
          <button className="addButton" onClick={() => {}}>+</button>

          
        </li>
        
      </ul>
    </div>
  );
};

export default FindFriends;
