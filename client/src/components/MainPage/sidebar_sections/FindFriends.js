// FindFriends.js
import React, { useState } from "react";
import henry from "../../../img/Henry.png"
import joshi from "../../../img/Joshi.png"

const FindFriends = () => {
  const [friendStatus, setFriendStatus] = useState({});

  const [friends, setFriends] = useState([
    { id: 1, name: "Henry Guo", bio: "i love lunch 😋" },
    { id: 2, name: "Joshi Ha", bio: "bio" },
    { id: 3, name: "Anna", bio: "i live for lunch" },
    { id: 4, name: "Bella", bio: "i LOVE lunch" },
    { id: 5, name: "Annabella", bio: "i munch on lunch" }
  ]);

  // Filtering friend requests based on what's in the search bar
  const [filteredFriends, setFilteredFriends] = useState([]);
  const handleOnLoad = () => {
    setFilteredFriends(friends);
  }
  const handleChange = (e) => {

    let searchInput = e.target.value;

    if (searchInput.length === 0) {
      setFilteredFriends(friends);
      return;
    }
    let filteredArr = [];
    friends.forEach((user) => {
      
      let userName = user.name.toLowerCase();
      let inputName = searchInput.toLowerCase();

      if (userName.includes(inputName)) {
        filteredArr.push(user);
      }
    });
    setFilteredFriends(filteredArr);  }

  const toggleFriendStatus = (name) => {
    setFriendStatus({
      ...friendStatus,
      [name]: !friendStatus[name],
    });
  };

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
            <img src={person.pfp} className="dot"/>
            <div className="personDetails">
              <h3>{person.name}</h3>
              <p>{person.bio}</p>
            </div>
            <button
              className={`addButton ${friendStatus[person.name] ? "removeColor" : ""}`}
              onClick={() => toggleFriendStatus(person.name)}
            >
              {friendStatus[person.name] ? "✖" : "+"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindFriends;
