import { useNavigate } from "react-router-dom";

const Modals = {
    SignUp: "signUp",
    Login: "logIn",
    None: "None"
}

const FormInput = ({ inputName = "Input", inputType = "text" }) => {
    return (
        <div>
            <p>{inputName}</p>
            <input type={inputType}></input>
        </div>
    );
}

const LoginForm = ({ activeModal = Modals.None }) => {

    let loginClassName = (activeModal === Modals.Login) ? "modal" : "modal invisible";
    let navigate = useNavigate();

    function handleSubmit() {
        // todo: log the user in 
        navigate("/map");
    }
    
    return (
        <div className={loginClassName}>
            <h2>Login</h2>
            <p className="error-message invisible">Error message</p>
            <form className="form-input">
                <FormInput inputName="Username" />
                <FormInput inputName="Password" inputType="password" />
                <input
                    type="submit"
                    className="submit-button"
                    value="Log in"
                    onClick={handleSubmit} // todo: change to onSubmit once the form's connected
                ></input>
            </form>
        </div>
    );
};

const SignUpForm = ({ activeModal = Modals.None }) => {

    let signinClassName = (activeModal === Modals.SignUp) ? "modal" : "modal invisible";
    let navigate = useNavigate();

    function handleSubmit() {
        // todo: create a new user and log them in
        navigate("/map");
    }

    return (
        <div className={signinClassName}>
            <h2>Sign up</h2>
            <p className="error-message invisible">Error message</p>
            <form className="form-input">
                <FormInput inputName="Username" />
                <FormInput inputName="Password" inputType="password" />
                <FormInput inputName="Confirm password" inputType="password" />
                <input
                    type="submit"
                    className="submit-button"
                    value="Sign up"
                    onClick={handleSubmit} // todo: change to onSubmit once the form's connected
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
