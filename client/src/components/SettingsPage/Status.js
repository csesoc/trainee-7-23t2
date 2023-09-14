import "./Status.css";

const Status = () => {
    const statusOptions = [
        {

        }
    ]
    return (
        <div className="container-status-wrapper">
            <div className="container-status">
                <label className="status-option">Available To Hang
                    <input type="radio" name="status" value="available"/>
                </label> 
                <label className="status-option">In Class
                    <input type="radio" name="status" value="in class"/>
                </label> 
                <label className="status-option">Do Not Disturb
                    <input type="radio" name="status" value="do not disturb"/>
                </label>
                <label className="status-option">Doomed
                    <input type="radio" name="status" value="doomed"/>
                </label>
            </div>
        </div>
    );
}

export default Status;
