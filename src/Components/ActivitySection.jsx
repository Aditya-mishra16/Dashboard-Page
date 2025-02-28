import React from "react";
import ActivityForm from "../Components/ActivityForm";
import ActivityLogs from "../Components/ActivityLogs";
import OverdueActivities from "../Components/Overdue_Activities"
import "../Styles/ActivitySection.css";

const ActivitySection = () => {
  return (
    <div className="activity-section-container">
      <div className="activity-main">
        <ActivityForm />
        <ActivityLogs />
      </div>

      <div className="overdue-activities">
        <OverdueActivities />
      </div>
    </div>
  );
};

export default ActivitySection;
