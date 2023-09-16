import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LandingPage.css";
import { LoginForm } from "./Forms";
import { SignUpForm } from "./Forms";
import { GreyOut } from "./Forms";

const Modals = {
  SignUp: "signUp",
  Login: "logIn",
  None: "None"
}

const LandingPage = () => {

  const [activeModal, setActiveModal] = useState(0); 
  let navigate = useNavigate();

  // Clicking on the "start searching!" button
  function handleSearchClick() {
    let currentUser = localStorage.getItem("current user");
    if (currentUser !== null) {
      navigate("/map");
      console.log("hello, " + currentUser);
    } else {
      setActiveModal(Modals.SignUp);
    }
  }

  // Making the pop ups appear/disappear
  function handleLogInClick() {
    setActiveModal(Modals.Login);
  }
  function handleSignUpClick() {
    setActiveModal(Modals.SignUp);
  }
  function handleGreyOutClick() {
    let errorText = document.getElementsByClassName("error-message");
    for (let i = 0; i < errorText.length; i++) {
      errorText[i].className = "error-message invisible";
    }
    setActiveModal(Modals.None);
  }

  return (
    <>
      <nav id="nav">
        <button id="nav-log-in" onClick={handleLogInClick}>Log in</button>
        <button id="nav-sign-up" onClick={handleSignUpClick}>Sign up</button>
      </nav>
      <div id="title">
        <h1>Find your friends</h1>
        <button className="title-button" onClick={handleSearchClick}>Start searching!</button>
      </div>
      <LoginForm activeModal={activeModal} />
      <SignUpForm activeModal={activeModal} />
      <GreyOut activeModal={activeModal} onGreyClick={handleGreyOutClick} />
      <img src={require("../../img/front1.png")} alt="" id="left-img" />
      <img src={require("../../img/front2.png")} alt="" id="right-img" />
    </>
  );
};

export default LandingPage;