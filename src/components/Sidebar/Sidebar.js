// src/components/Sidebar.js
import React, { useState } from 'react';
import { HiOutlineUserGroup  } from 'react-icons/hi';
import { LuUsers } from "react-icons/lu";
import { BriefcaseDollarIcon } from '@hugeicons/react-pro';
import { Link } from 'react-router-dom';
import ImageAvatars from '../Icons/ImageAvatars'
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div >
        <ImageAvatars styles={{padding: '600px'}}/>

      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <div className = 'Menu-items'>
      <h4>MENU</h4>
      <nav className="nav">
        <ul className='label-list'>
          <li className="labels">
            <Link to="/components/NewToken" className='sidebar-link'>
              <HiOutlineUserGroup /> Label
            </Link>
          </li>
          <li className="labels">
            <Link to="/labels" className= 'sidebar-link'>
            <LuUsers /> Label
            </Link>
          </li>
          <li className="labels">
            <Link to="/users" className = 'sidebar-link'>
               <BriefcaseDollarIcon size={32} color='black'/> Label
            </Link>
          </li>
        </ul>
      </nav>

      </div>
    </div>
  );
};

export default Sidebar;
