// Inbox.js
import React, { useState } from "react";

const Inbox = () => {
  const [pendingRequests, setPendingRequests] = useState([
    { id: 1, name: "Person 1" },
    { id: 2, name: "Person 2" },
    { id: 3, name: "Person 3" },
  ]);

  const acceptRequest = (id) => {
    const updatedRequests = pendingRequests.filter((request) => request.id !== id);
    setPendingRequests(updatedRequests);
  };

  const declineRequest = (id) => {
    const updatedRequests = pendingRequests.filter((request) => request.id !== id);
    setPendingRequests(updatedRequests);
  };

  // Filtering friend requests based on what's in the search bar
  const [filteredRequests, setFilteredRequests] = useState([]);
  const handleOnLoad = () => {
    setFilteredRequests(pendingRequests);
  }
  const handleChange = (e) => { 
    let searchInput = e.target.value;
    if (searchInput.length === 0) { 
      setFilteredRequests(pendingRequests);
      return;
    }
    let filteredArr = [];
    pendingRequests.forEach((user) => {

      let userName = user.name.toLowerCase();
      let inputName = searchInput.toLowerCase();

      if (userName.includes(inputName)) {
        filteredArr.push(user);
      }
    });
    setFilteredRequests(filteredArr);
  }

  return (
    <div className="inbox" onLoad={handleOnLoad}>
      <div className="pageType">
        <h3 className="pageType-header">FRIEND REQUESTS</h3>
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
        {filteredRequests.map((request) => (
          <li className="person" key={request.id}>
            <span className="dot"></span>
            <div className="personDetails">
              <h3>{request.name}</h3>
              <div className="personRequestButtons">
                <button
                  onClick={() => acceptRequest(request.id)}
                  className="acceptRequest"
                >
                  Accept
                </button>
                <button
                  onClick={() => declineRequest(request.id)}
                  className="declineRequest"
                >
                  Decline
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
