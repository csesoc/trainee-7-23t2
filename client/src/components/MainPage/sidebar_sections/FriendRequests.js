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

  return (
    <div className="inbox">
      <div className="pageType">
        <h3>Friend Requests</h3>
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
        {pendingRequests.map((request) => (
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
