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
          <button>
            🔍
          </button>
        </form>
      </div>

      <ul className="listPeople">
        <li className="person">
          <span className="dot"></span>
          <h3>Name</h3>
          <p>Status</p>
        </li>
        {/* Additional list items for friends */}
      </ul>
    </div>
  );
};

export default FindFriends;