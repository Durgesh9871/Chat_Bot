import React, { useState } from 'react';
import './styles.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sidebar">
      <div className="toggle-button" onClick={toggleSidebar}>
        <i className={`fa fa-${isOpen ? 'times' : 'bars'}`}></i>
      </div>
      <ul className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
