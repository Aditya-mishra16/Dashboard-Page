import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import "../Styles/LeadDetails.css";

import Profile from "../assets/Icons/Profile.png";
import Editpen from "../assets/Icons/Editpen.png";

const LeadDetails = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="lead-details">
      <div className="pending-actions">
        <div className="small-text gray-text pending-text">
          <span className="small-text tata-text">Tata Play Limited</span>⏱
          Pending Actions
        </div>
        <div className="button-group">
          <h2 className="title-name">Aditya Mishra</h2>
          <div className="create-button">
            <div className="account-button">
            <button className="btn btn-green">Create Account</button>
            </div>
            <div className="contact-button">
            <button className="btn btn-yellow">Create Contact</button>
            </div>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="user-info">
        <img src={Profile} alt="Profile-icon" className="profile" />
        <div className="user-name">Aditya Mishra</div>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onChange={handleChange} className="custom-tabs">
        <Tab label="Basic Details" />
        <Tab label="Account Details" />
        <Tab label="Lead Details" />
        <Tab label="Team" />
        <Tab label="Other Contacts" />
      </Tabs>

      {/* Tab Content */}
      <div className="tab-content">
        {selectedTab === 0 && (
          <div className="details-section">
            <div className="info-row">
              <div className="info-box">
                <div className="label">Title</div>
                <div className="value">test</div>
              </div>
              <div className="info-box">
                <div className="label">First Name</div>
                <div className="value">Ramesh</div>
              </div>
              <div className="info-box">
                <div className="label">Last Name</div>
                <div className="value">Sharma</div>
              </div>
            </div>

            <div className="section-title">Address Details</div>
            <div className="info-row">
              <div className="info-box">
                <div className="label">Region</div>
                <div className="value">APAC</div>
              </div>
              <div className="info-box">
                <div className="label">Country</div>
                <div className="value">India</div>
              </div>
              <div className="info-box">
                <div className="label">Zone</div>
                <div className="value">North</div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 1 && (
          <div className="details-section">Account Details Content</div>
        )}
        {selectedTab === 2 && (
          <div className="details-section">Lead Details Content</div>
        )}
        {selectedTab === 3 && (
          <div className="details-section">Team Content</div>
        )}
        {selectedTab === 4 && (
          <div className="details-section">Other Contacts</div>
        )}
      </div>

      {/* Footer */}
      <div className="footer">
        <span>10 empty fields, fill the pending information</span>
        <img src={Editpen} alt="Edit Button" className="edit-btn" />
      </div>
    </div>
  );
};

export default LeadDetails;
