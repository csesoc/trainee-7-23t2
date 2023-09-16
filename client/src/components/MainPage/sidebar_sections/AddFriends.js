// AddFriends.js
import React, { useState } from "react";

const AddFriends = () => {
  const [friends, setFriends] = useState([]);

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
        {friends.map((friend, index) => (
          <li className="person" key={index}>
            <img src={friend.pfp} className="dot"/>
            <div className="personDetails">
              <h3>{friend.name}</h3>
              <p>Status: {friend.status}</p>
            </div>
          </li>
        ))}
        {/* Additional list items for friends */}
      </ul>
    </div>
  );
};

export default AddFriends;
