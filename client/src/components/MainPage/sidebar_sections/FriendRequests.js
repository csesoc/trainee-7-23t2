// Inbox.js
import React, { useState } from "react";

const Inbox = ({ friendsList, updateFriendsList, requestList, updateRequestList }) => {
  
  const [render, force] = useState(0);

  let tempRequestList = requestList;
  let tempFriendList = friendsList;

  const acceptRequest = (user) => {
    tempFriendList.push(user);
    tempRequestList.splice(tempRequestList.indexOf(user), 1);
    updateRequestList(tempRequestList);
    updateFriendsList(tempFriendList);
    force(render + 1);
  };

  const declineRequest = (user) => {
    tempRequestList.splice(tempRequestList.indexOf(user), 1);
    updateRequestList(tempRequestList);
    updateFriendsList(tempFriendList);
    force(render + 1);
  };

  // Filtering friend requests based on what's in the search bar
  const [filteredRequests, setFilteredRequests] = useState([]);
  const handleOnLoad = () => {
    setFilteredRequests(requestList);
    force(render + 1);
  }
  const handleChange = (e) => { 
    let searchInput = e.target.value;
    if (searchInput.length === 0) { 
      setFilteredRequests(requestList);
      return;
    }
    let filteredArr = [];
    requestList.forEach((user) => {

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
            <img src={request.pfp} className="dot"/>
            <div className="personDetails">
              <h3>{request.name}</h3>
              <div className="personRequestButtons">
                <button
                  onClick={() => { acceptRequest(request); handleOnLoad(); }}
                  className="acceptRequest"
                >
                  Accept
                </button>
                <button
                  onClick={() => { declineRequest(request); handleOnLoad(); }}
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
