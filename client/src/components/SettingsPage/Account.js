import profilePic from "./profile.jpeg";

const Account = () => {
    return (
      <>
        <div className="change-field">
          <label for="profile-pic"></label>
          <input type="file" id="profile-pic" accept="image/*"></input>
          <img src={profilePic} width="200" alt="default profile"></img>
        </div>

        <div className="change-field">
          <label for="name">Username</label>
          <input type="text" id="name"></input>
        </div>

        <div className="change-field">
          <label for="password">Password</label>
          <input type="password" id="password"></input>
        </div>
      </>
    );
  };
  export default Account;
  