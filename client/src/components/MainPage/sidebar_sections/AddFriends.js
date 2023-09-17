// AddFriends.js
import React, { useState } from "react";

const AddFriends = ({friendsList}) => {
  
  // Filtering friend requests based on what's in the search bar
  const [filteredFriends, setFilteredFriends] = useState([]);
  const handleOnLoad = () => {
    console.log(friendsList);
    setFilteredFriends(friendsList);
  }
  const handleChange = (e) => {

    let searchInput = e.target.value;

    if (searchInput.length === 0) {
      setFilteredFriends(friendsList);
      return;
    }
    let filteredArr = [];
    friendsList.forEach((user) => {

      let userName = user.name.toLowerCase();
      let inputName = searchInput.toLowerCase();

      if (userName.includes(inputName)) {
        filteredArr.push(user);
      }
    });
    setFilteredFriends(filteredArr);
  }

  return (
    <div onLoad={handleOnLoad}>
      <div className="pageType">
        <h3 className="pageType-header">FRIENDS LIST</h3>
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
