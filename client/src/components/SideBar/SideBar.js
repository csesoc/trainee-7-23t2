import { RiAccountCircleFill } from "react-icons/ri";
import { FaUserFriends, FaBars } from "react-icons/fa";
import { GrStatusDisabled } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import "./SideBar.css";

const SideBar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/settings/account",
            name: "Account",
            icon: <RiAccountCircleFill/>
        },
        {
            path: "/settings/friends",
            name: "Friends",
            icon: <FaUserFriends/>
        },
        {
            path: "/settings/status",
            name: "Status",
            icon: <GrStatusDisabled/>
        }
    ]; 
    return (
      <div className="container">
        <div style={{width: isOpen ? "18.75rem" : "4rem"}} className="sidebar">
            <div className="top-section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Home</h1>
                <div style={{marginLeft: isOpen ? "3rem" : "0"}} className="bars">
                    <FaBars onClick = {toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                    </NavLink>
                ))  
            }
        </div>
        <main>{children} </main>
      </div>
    );
};

export default SideBar;
