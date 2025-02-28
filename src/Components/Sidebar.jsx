import React from "react";
import Icon1 from '../assets/Icons/Icon_1.png';
import Icon2 from '../assets/Icons/Icon_2.png';
import Icon3 from '../assets/Icons/Icon_3.png';
import Icon4 from '../assets/Icons/Icon_4.png';
import Icon5 from '../assets/Icons/Icon_5.png';
import Icon6 from '../assets/Icons/Icon_6.png';
import Icon7 from '../assets/Icons/Icon_7.png';
import '../Styles/Sidebar.css';

const sidebarItems = [
  { 
    icon: Icon1,
  },
  { 
    icon: Icon2,
  },
  { 
    icon: Icon3,
  },
  { 
    icon: Icon4,
  },
  { 
    icon: Icon5,
  },
  { 
    icon: Icon6,
  },
  { 
    icon: Icon7,
  }
];

const Sidebar = () => {
  return (
    <div className='sidebar sidebar-closed'>
      <div className="sidebar-items">
        {sidebarItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, index }) => (
  <div 
    className={`sidebar-item ${index === 1 ? 'active-item' : ''}`} 
  >
    <div className="icon-wrapper">
      <img 
        src={icon} 
        alt={text}
        className="sidebar-icon"
      />
    </div>
    <span className="sidebar-text">{text}</span>
  </div>
);

export default Sidebar;