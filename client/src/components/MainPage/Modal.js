import "./Modal.css";

const Modal = ({closeModal, activeUser}) => {
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
                        <input type="text" id="name" defaultValue={activeUser.name}></input>
                    </div>

                    <div className="change-field">
                        <label htmlFor="password">Password: </label>
                        <input type="password" id="password" defaultValue={activeUser.password}></input>
                    </div>

                    <div className="change-field">
                        <label htmlFor="status-selection">Status: </label>
                        <select id="status-selection">
                            <option value="Available">🟢 Available</option>
                            <option value="Class">🟡 In Class</option>
                            <option value="Disturb-Dont">🔴 Do Not Disturb</option>
                            <option value="Doomed">💀 Doomed</option>
                        </select>
                    </div>

                </div>
                <div className="modal-footer">
                    <button onClick={() => closeModal(false)} id="cancel-button">Cancel</button>
                    <button onClick={() => {
                        const newName = document.getElementById('name').value;
                        const newPassword = document.getElementById('password').value;
                        const newStatusObject = document.getElementById('status-selection');

                        activeUser.name = newName;
                        activeUser.password = newPassword;
                        activeUser.status = newStatusObject.value;

                        newStatusObject.options[newStatusObject.options.selectedIndex].selected = true;
                        closeModal(false);
                    }}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;