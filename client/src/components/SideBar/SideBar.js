import { RiAccountCircleFill } from "react-icons/ri";
import { FaUserFriends, FaBars } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Account",
            icon: <RiAccountCircleFill/>
        },
        {
            path: "/friends",
            name: "Friends",
            icon: <FaUserFriends/>
        },
        {
            path: "/status",
            name: "Status",
            icon: <GrStatusGoodSmall/>
        }
    ]; 
    return (
      <div className="container">
        <div className="sidebar">
            <div className="top-section">
                <h1 className="logo">Logo</h1>
                <div className="bars">
                    <FaBars/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
      </div>
    );
};

export default SideBar;
