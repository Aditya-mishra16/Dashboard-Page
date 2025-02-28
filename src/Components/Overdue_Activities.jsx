import React from "react";
import "../Styles/Overdue_Activities.css";
import Call from "../assets/Icons/Call.png";
import EmailColor from "../assets/Icons/EmailColor.png";

const OverdueActivities = () => {
  const activities = [
    {
      title: "Arrange a Call",
      dueDate: "27/08/2024",
      time: "01:00pm",
      icon: Call,
    },
    {
      title: "Follow Up Email",
      dueDate: "27/08/2024",
      time: "02:00pm",
      icon: EmailColor,
    },
    {
      title: "Arrange a Call",
      dueDate: "28/08/2024",
      time: "10:30am",
      icon: Call,
    },
  ];

  return (
    <div className="overdue-container bg-white pt-3 px-4 pb-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="overdue-title mb-0">Upcoming & Overdue</h6>
        <button className="view-all btn btn-link p-0">View All</button>
      </div>

      <div className="overdue-activities">
        {activities.map((activity, index) => (
          <div key={index} className="overdue-card">
            <div className="card-body">
              {/* Title with Icon */}
              <div className="d-flex align-items-center gap-2 activity">
                <img src={activity.icon} alt="icon" className="activity-icon" />
                <p className="activity-title mb-0">{activity.title}</p>
              </div>

              {/* Activity Details */}
              <div className="activity-details mt-1">
                <div className="d-flex justify-content-between">
                  <p className="mb-1"><strong>Start</strong></p>
                  <p className="mb-1"><strong>End</strong></p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="date-time">
                    <i className="bi bi-calendar"></i> {activity.dueDate}
                  </p>
                  <p className="date-time">
                    <i className="bi bi-clock"></i> {activity.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverdueActivities;