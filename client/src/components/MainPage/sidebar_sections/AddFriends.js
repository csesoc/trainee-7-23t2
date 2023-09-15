// AddFriends.js
import React from "react";

const AddFriends = () => {
  return (
    <div>
      <div className="pageType">
        <h3>Friends List</h3>
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
            <p>Status</p>

          </div>
          
        </li>
        <li className="person">
          <span className="dot"></span>
          <div className="personDetails">
            <h3>Name</h3>
            <p>Status</p>

          </div>
          
        </li>
        {/* Additional list items for friends */}
      </ul>
    </div>
  );
};

export default AddFriends;
