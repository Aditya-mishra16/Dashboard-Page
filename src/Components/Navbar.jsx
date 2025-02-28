import React from "react";
import EditIcon from "../assets/icons/Edit.png";
import UsersIcon from "../assets/icons/Users.png";
import ListIcon from "../assets/icons/List.png";
import RefreshIcon from "../assets/icons/Refresh.png";
import CheckIcon from "../assets/Icons/Check.png";
import "../Styles/Navbar.css"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="breadcrumb">
        Dashboard  / Lead  / <span className="breadcrumb-active">LE-010071</span>
      </div>

      <div className="navbar-header">
        <h2 className="lead-id">LE-010071</h2>

        <div className="icon-group">
          <img src={EditIcon} alt="Edit" className="icon" />
          <img src={UsersIcon} alt="Users" className="icon" />
          <img src={ListIcon} alt="List" className="icon" />
          <img src={RefreshIcon} alt="Refresh" className="icon" />
        </div>
      </div>
      <hr />

      <div className="actions-container">
        <div className="action-buttons">
          <button className="action-btn new ">New</button>
          <button className="action-btn contact ">Contacted</button>
          <button className="action-btn nurturing">Nurturing</button>
          <button className="action-btn convert">Converted</button>
        </div>

        <button className="mark-converted">
        <img src={CheckIcon} alt="Check Icon" className="check-icon" />
            Mark as Converted
        </button>
      </div>
    </div>
  );
};

export default Navbar;
