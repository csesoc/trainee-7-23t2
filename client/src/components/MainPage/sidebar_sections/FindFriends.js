// FindFriends.js
import React, { useState } from "react";
import henry from "../../../img/Henry.png"
import joshi from "../../../img/Joshi.png"

const FindFriends = () => {
  const [friendStatus, setFriendStatus] = useState({});

  const people = [
    { id: 1, name: "Henry Guo", bio: "i love lunch 😋", pfp: henry},
    { id: 2, name: "Joshi Ha", bio: "bio", pfp: joshi},
  ];

  const toggleFriendStatus = (name) => {
    setFriendStatus({
      ...friendStatus,
      [name]: !friendStatus[name],
    });
  };

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
        {people.map((person) => (
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
