import React from "react";
import "../Styles/ActivityLogs.css";

const ActivityLogs = () => {
  return (
    <div className="activity-logs-container">
      <h3 className="logs-header">Stage History</h3>
      
      <div className="logs-content">
        <div className="logs-month">August 2024</div>
        
        <div className="logs-list">
          <ActivityLog 
            date="28/08" 
            type="Team" 
            time="09:00am" 
            desc="Created Jiya Gopal" 
          />
          <ActivityLog 
            date="28/08" 
            type="Team" 
            time="10:00am" 
            desc="Assigned to Aniruddh Naidu" 
          />
          <ActivityLog 
            date="28/08" 
            type="Event" 
            time="12:00pm" 
            desc="Arrange a Call" 
          />
          <ActivityLog 
            date="28/08" 
            type="Lead Update" 
            time="04:00pm" 
            desc="Marked as Contacted" 
          />
        </div>
      </div>
    </div>
  );
};

const ActivityLog = ({ date, type, time, desc }) => (
  <div className="log-item">
    <div className="log-dot"></div>
    <div className="log-content">
      <p className="log-details">{type} | {time}</p>
      <p className="log-description">{desc}</p>
    </div>
  </div>
);

export default ActivityLogs;