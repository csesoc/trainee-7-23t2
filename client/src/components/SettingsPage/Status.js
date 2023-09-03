import "./Status.css";

const Status = () => {
    return (
        <div className="container-status-wrapper">
            <div className="container-status">
                <label>Available To Hang
                    <input type="radio" name="status" value="available"/>
                </label> 
                <label>In Class
                    <input type="radio" name="status" value="in class"/>
                </label> 
                <label>Do Not Disturb
                    <input type="radio" name="status" value="do not disturb"/>
                </label>
                <label>Doomed
                    <input type="radio" name="status" value="doomed"/>
                </label>
            </div>
        </div>
    );
}

export default Status;
