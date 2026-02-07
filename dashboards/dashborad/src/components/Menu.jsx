import React, { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
 const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileDropdown = (index) => {
    setIsProfileDropdown(!isProfileDropdown);
  };
   
  const menuClass="menu";
  const activeMenuClass="menu-selected";

  return (
    <div className="menu-container">
      <img src="\logo.png" alt="Logo" className="logo" />
      <ul className="menu-list">
        <li className="menu-item"><Link to="/dashboard" className={selectedMenu === 0 ? activeMenuClass : menuClass} style={{textDecoration:'none'}}><p>Dashboard</p></Link></li>
        <li className="menu-item"><Link to="/orders" className={selectedMenu === 1 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}><p>Orders</p></Link></li>
        <li className="menu-item"><Link to="/holdings" className={selectedMenu === 2 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}><p>Holdings</p></Link></li>
        <li className="menu-item"><Link to="/positions" className={selectedMenu === 3 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}><p>Positions</p></Link></li>
        <li className="menu-item"><Link to="/funds" className={selectedMenu === 4 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}><p>Funds</p></Link></li>
        <li className="menu-item"><Link to="/apps" className={selectedMenu === 5 ? activeMenuClass : menuClass} style={{textDecoration:"none"}}><p>Apps</p></Link></li>
      </ul>
      <div className="profile">
        <div className="avatar">Zu</div>
        <p className="username">User</p>
      </div>
     

    </div>
  );
};

export default React.memo(Menu);
