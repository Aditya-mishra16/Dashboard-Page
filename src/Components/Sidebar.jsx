import React from "react";
import Icon1 from '../assets/Icons/Icon_1.png';
import Icon2 from '../assets/Icons/Icon_2.png';
import Icon3 from '../assets/Icons/Icon_3.png';
import Icon4 from '../assets/Icons/Icon_4.png';
import Icon5 from '../assets/Icons/Icon_5.png';
import Icon6 from '../assets/Icons/Icon_6.png';
import Icon7 from '../assets/Icons/Icon_7.png';
import CancelIcon from '../assets/Icons/CloseIcon.png'; // Add a cancel icon
import '../Styles/Sidebar.css';

const sidebarItems = [
  { icon: Icon1 },
  { icon: Icon2 },
  { icon: Icon3 },
  { icon: Icon4 },
  { icon: Icon5 },
  { icon: Icon6 },
  { icon: Icon7 }
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Cancel icon to close the sidebar */}
      {isOpen && (
        <div className="cancel-icon" onClick={onClose}>
          <img src={CancelIcon} alt="Close" className="cancel-icon-img" />
        </div>
      )}
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

const SidebarItem = ({ icon, index }) => (
  <div className={`sidebar-item ${index === 1 ? 'active-item' : ''}`}>
    <div className="icon-wrapper">
      <img src={icon} alt={`Icon ${index + 1}`} className="sidebar-icon" />
    </div>
  </div>
);

export default Sidebar;