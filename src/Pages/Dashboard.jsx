import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LeadDetails from "../Components/LeadDetails";
import ActivitySection from "../Components/ActivitySection";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar on mobile when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false); // Close sidebar on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard">
      <Header toggleSidebar={toggleSidebar} />
      <div className="dashboard-container d-flex">
        {/* Sidebar - Visible on mobile when toggled */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        <div className="content-area flex-grow-1">
          <Navbar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-5">
                <LeadDetails />
              </div>
              <div className="col-12 col-md-7 mt-3 mt-md-0">
                <ActivitySection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;