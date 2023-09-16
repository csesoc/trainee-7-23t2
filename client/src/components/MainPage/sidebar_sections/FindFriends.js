// FindFriends.js
import React, { useState } from "react";

const FindFriends = ({ friendsList, updateFriendsList, userList, updateUserList }) => {

  let friendsTempArr = friendsList;
  let findFriendsArr = [];

  // Filtering friend requests based on what's in the search bar
  const [filteredFriends, setFilteredFriends] = useState([]);
  const handleOnLoad = () => {

    setFilteredFriends(userList);
  }
  const handleChange = (e) => {

    let searchInput = e.target.value;

    if (searchInput.length === 0) {
      setFilteredFriends(userList);
      return;
    }
    let filteredArr = [];
    userList.forEach((user) => {
      
      let userName = user.name.toLowerCase();
      let inputName = searchInput.toLowerCase();

      if (userName.includes(inputName)) {
        filteredArr.push(user);
      }
    });
    setFilteredFriends(filteredArr);
  }

  const addFriend = (e) => {

    let name = e.target.name;

    userList.forEach((user) => {
      if (name === user.name && friendsTempArr.indexOf(user) === -1) {
        friendsTempArr.push(user);
      } else if (findFriendsArr.indexOf(user) === -1) {
        findFriendsArr.push(user);
      }
    });

    updateUserList(findFriendsArr);
    setFilteredFriends(userList);
    updateFriendsList(friendsTempArr);
  }

  return (
    <div onLoad={handleOnLoad}>
      <div className="pageType">
        <h3>Find Friends</h3>
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
        {filteredFriends.map((person) => (
          <li className="person" key={person.id}>
            <span className="dot"></span>
            <div className="personDetails">
              <h3>{person.name}</h3>
              <p>{person.bio}</p>
            </div>
            <button
              className="addButton"
              onClick={addFriend}
              name={person.name}
            >+
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindFriends;
