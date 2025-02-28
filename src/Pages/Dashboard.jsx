import React from "react";
import Header from "../Components/Header";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LeadDetails from "../Components/LeadDetails";
import ActivityForm from "../Components/ActivityForm";
import ActivityLog from "../Components/ActivityLogs";
import ActivitySection from "../Components/ActivitySection";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-container d-flex">
        <Sidebar />
        <div className="content-area flex-grow-1">
          <Navbar />
          
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-8">
                <LeadDetails />
              </div>
              <div className="col-12 col-md-4 mt-3 mt-md-0">
                <ActivitySection />
              </div>
            </div>
            
            {/* Activity Log in a separate row
            <div className="row">
              <div className="col-12">
                <ActivityLog />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;