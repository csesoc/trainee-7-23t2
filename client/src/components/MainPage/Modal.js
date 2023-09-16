import "./Modal.css";

const Modal = ({closeModal}) => {
    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-exit-button">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className="modal-title">
                    <h1>Settings</h1>
                </div>
                <div className="modal-body">
                    <div className="change-field">
                        <label htmlFor="name">Username: </label>
                        <input type="text" id="name" defaultValue={"Alice Smith"}></input>
                    </div>

                    <div className="change-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" defaultValue={"f1ndY0Fr3ns"}></input>
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={() => closeModal(false)} id="cancel-button">Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;