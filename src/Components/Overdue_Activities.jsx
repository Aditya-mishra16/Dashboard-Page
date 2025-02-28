import React from "react";
import "../Styles/Overdue_Activities.css";

const OverdueActivities = () => {
  const activities = [
    { title: "Share Catalogue", dueDate: "2025-01-28", time: "16:20:00" },
    { title: "Introductory call", dueDate: "2025-01-28", time: "17:30:00" },
  ];

  return (
    <div className="overdue-container bg-white pt-2 px-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="overdue-title mb-0">Overdue Activities</h6>
        <button className="view-upcoming btn btn-link p-0">View Upcoming</button>
      </div>

      <div className="row overdue-activities">
        {activities.map((activity, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <div className="card overdue-card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-telephone-fill call-icon"></i>
                  <p className="activity-title mb-0">{activity.title}</p>
                </div>
                <div className="activity-details mt-2">
                  <p className="mb-1"><strong>Due Date:</strong> {activity.dueDate}</p>
                  <p className="mb-0"><strong>Time:</strong> {activity.time}</p>
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