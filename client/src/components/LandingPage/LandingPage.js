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

    // todo: check whether the user's signed in
    // if user's signed in before, take them to map
    // if not, chuck in setActiveModal(Modals.SignUp)

    navigate("/map");
  }

  // Making the pop ups appear/disappear
  function handleLogInClick() {
    setActiveModal(Modals.Login);
  }
  function handleSignUpClick() {
    setActiveModal(Modals.SignUp);
  }
  function handleGreyOutClick() {
    setActiveModal(Modals.None);
  }

  return (
    <>
      <nav>
        <button id="nav-log-in" onClick={handleLogInClick}>Log in</button>
        <button id="nav-sign-up" onClick={handleSignUpClick}>Sign up</button>
      </nav>
      <div id="title">
        <h1>find your friends</h1>
        <button className="title-button" onClick={handleSearchClick}>Start searching!</button>
      </div>
      <LoginForm activeModal={activeModal} />
      <SignUpForm activeModal={activeModal} />
      <GreyOut activeModal={activeModal} onGreyClick={handleGreyOutClick} />
    </>
  );
};

export default LandingPage;