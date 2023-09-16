import { useNavigate } from "react-router-dom";
import React from "react";

const Modals = {
    SignUp: "signUp",
    Login: "logIn",
    None: "None"
}

// Retreive user info from local storage
if (localStorage.getItem("user info") === null) {
    localStorage.setItem("user info", "[]");
}
let usersArray = JSON.parse(localStorage.getItem("user info"));

const LoginForm = ({ activeModal = Modals.None, updateActiveUser }) => {

    // Initialise constants
    let loginClassName = (activeModal === Modals.Login) ? "modal" : "modal invisible";
    let navigate = useNavigate();
    const loginErrorRef = React.useRef();
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();

    function handleSubmit(e) {

        e.preventDefault();

        let inputUsername = usernameRef.current.value;
        let inputPassword = passwordRef.current.value;
        let loggedIn = false;

        usersArray.forEach(user => {
            if (user.username === inputUsername && user.password === inputPassword) { 
                loggedIn = true;
            }
        });

        // Empty inputs
        if (inputUsername.length === 0) { 
            loginErrorRef.current.textContent = "Error: Please enter your username";
            loginErrorRef.current.className = "error-message";
            return;
        }
        if (inputPassword.length === 0) {
            loginErrorRef.current.textContent = "Error: Please enter your password";
            loginErrorRef.current.className = "error-message";
            return;
        }

        // If the login details don't match any existing user
        if (loggedIn === false) {
            loginErrorRef.current.textContent = "Error: the login details are incorrect";
            loginErrorRef.current.className = "error-message";
            return;
        } 

        // Loggged in successfully!
        localStorage.setItem("current user", inputUsername)
        updateActiveUser(inputUsername);
        navigate("/map");
    }
    
    return (
        <div className={loginClassName}>
            <h2>Login</h2>
            <p className="error-message invisible" ref={loginErrorRef}>Error message</p>
            <form className="form-input">

                <div>
                    <p>Username</p>
                    <input type="text" ref={usernameRef}></input>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" ref={passwordRef}></input>
                </div>

                <input
                    type="submit"
                    className="submit-button"
                    value="Log in"
                    onClick={handleSubmit}
                ></input>
            </form>
        </div>
    );
};

const SignUpForm = ({ activeModal = Modals.None, updateActiveUser, updateUsers }) => {

    // Initialise constants
    let signinClassName = (activeModal === Modals.SignUp) ? "modal" : "modal invisible";
    let navigate = useNavigate();
    const signUpErrorRef = React.useRef();
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const confirmPassRef = React.useRef();

    function handleSubmit(e) {

        e.preventDefault();

        let inputUsername = usernameRef.current.value;
        let inputPassword = passwordRef.current.value;
        let inputConfirm = confirmPassRef.current.value;
        let usernameExists = false;

        // Error handling
        if (inputPassword !== inputConfirm) {
            signUpErrorRef.current.textContent = "Error: the passwords do not match";
            signUpErrorRef.current.className = "error-message";
            return;
        }
        // Empty inputs
        if (inputUsername.length === 0) {
            signUpErrorRef.current.textContent = "Error: Please enter your username";
            signUpErrorRef.current.className = "error-message";
            return;
        }
        if (inputPassword.length === 0) {
            signUpErrorRef.current.textContent = "Error: Please enter your password";
            signUpErrorRef.current.className = "error-message";
            return;
        }
        
        usersArray.forEach(user => {
            if (inputUsername === user.username) {
                usernameExists = true;
            }
        });
        if (usernameExists) {
            signUpErrorRef.current.textContent = "Error: the username \"" + inputUsername + "\" has already been taken";
            signUpErrorRef.current.className = "error-message";
            return;
        }

        // Sign up successful!
        localStorage.setItem("current user", inputUsername);
        updateActiveUser(inputUsername, inputPassword, "online", 0, 0);

        // Add into users local storage
        let newUser = {
            username: inputUsername,
            password: inputPassword
        }
        usersArray.push(newUser);
        localStorage.setItem("user info", JSON.stringify(usersArray));
        updateUsers(usersArray);

        navigate("/map");
    }

    return (
        <div className={signinClassName}>
            <h2>Sign up</h2>
            <p className="error-message invisible" ref={signUpErrorRef}>Error message</p>
            <form className="form-input">
                <div>
                    <p>Username</p>
                    <input type="text" ref={usernameRef}></input>
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" ref={passwordRef}></input>
                </div>
                <div>
                    <p>Confirm password</p>
                    <input type="password" ref={confirmPassRef}></input>
                </div>
                <input
                    type="submit"
                    className="submit-button"
                    value="Sign up"
                    onClick={handleSubmit}
                ></input>
            </form>
        </div>
    );
}

const GreyOut = ({ activeModal = Modals.None, onGreyClick }) => {

    let greyOutClasses =  "grey-out" ;
    if (!(activeModal === Modals.SignUp || activeModal === Modals.Login)) {
        greyOutClasses += " invisible";
    }

    return (<div className={greyOutClasses} onClick={onGreyClick}></div>);
}

export { LoginForm, SignUpForm, GreyOut};