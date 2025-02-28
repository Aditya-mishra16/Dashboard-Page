import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Header.css";

import Searchbar from "../assets/Icons/Searchbar.png";
import Notification from "../assets/Icons/Notification.png";
import Calendar from "../assets/Icons/Calendar.png";
import Setting from "../assets/Icons/Setting.png";
import Burgermenu from "../assets/Icons/Burgermenu.png";
import Profile from "../assets/Icons/Profile.png";
import Divider from "../assets/Icons/Divider.png";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <header className="header container-fluid px-3 py-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <img src={Burgermenu} alt="Menu" className="icon-menu" />
          <h1 className="company-title m-0">Indore Composite</h1>
        </div>

        <div className="d-flex align-items-center gap-3">
          {/* Desktop search bar */}
          <img src={Searchbar} alt="Search" className="search-icon d-none d-md-block" />
          
          {/* Mobile search toggle */}
          <div className="search-toggle d-md-none" onClick={toggleSearch}>
            <i className="bi bi-search text-white"></i>
          </div>
          
          <img src={Divider} alt="Divider" className="divider-icon d-none d-md-block" />
          
          {/* Adjusting which icons show on mobile */}
          <img src={Notification} alt="Notifications" className="icon" />
          <img src={Calendar} alt="Calendar" className="icon d-none d-sm-block" />
          <img src={Setting} alt="Settings" className="icon d-none d-sm-block" />
          
          <img src={Divider} alt="Divider" className="divider-icon d-none d-md-block" />
          <img src={Profile} alt="Avatar" className="profile-icon" />
        </div>
      </header>
      
      {/* Mobile search bar that appears when toggled */}
      {showSearch && (
        <div className="mobile-search-container d-md-none w-100">
          <img src={Searchbar} alt="Search" className="search-icon-mobile w-100" />
        </div>
      )}
    </>
  );
};

export default Header;