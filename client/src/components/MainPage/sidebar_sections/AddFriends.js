// AddFriends.js
import React, { useState } from "react";

const AddFriends = () => {
  const [friends, setFriends] = useState([]);

  // Filtering friend requests based on what's in the search bar
  const [filteredFriends, setFilteredFriends] = useState([]);
  const handleOnLoad = () => {
    setFilteredFriends(friends);
  }
  const handleChange = (e) => {
    // add later
  }

  return (
    <div>
      <div className="pageType" onLoad={handleOnLoad}>
        <h3>Friends List</h3>
      </div>
      <div className="search">
        <form action="#">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            onChange={handleChange}
          />
        </form>
        <img src="https://img.icons8.com/ios/250/FFFFFF/search--v1.png" alt="Search button"></img>
      </div>

      <ul className="listPeople">
        {filteredFriends.map((friend, index) => (
          <li className="person" key={index}>
            <span className="dot"></span>
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
