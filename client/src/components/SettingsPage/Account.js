import profilePic from "./profile.jpeg";
import "./Account.css";

const Account = () => {
    const loadFile = (event) => {
      let image = document.getElementById("pic-output");
      image.src = URL.createObjectURL(event.target.files[0]);
    };

    return (
      <div className="account-container">
        <div className="change-field profile-pic">
          <label className="label" htmlFor="profile-pic">
            <span>Change Image</span>
          </label>
          <input id="profile-pic" type="file" onChange={loadFile}/>
          <img src={profilePic} width="300" alt="default profile" id="pic-output"></img>
        </div>

        <div className="change-field">
          <label htmlFor="name">Username: </label>
          <input type="text" id="name"></input>
        </div>

        <div className="change-field">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password"></input>
        </div>
      </div>
    );
  };

export default Account;
  