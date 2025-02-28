import React, { useState } from "react";
import {
  Button,
  TextField,
  Tabs,
  Tab,
  Box,
  InputAdornment,
} from "@mui/material";
import { CalendarMonth, AccessTime } from "@mui/icons-material";
import "../Styles/ActivityForm.css"; // Import custom CSS
import AddIcon from "../assets/Icons/Add.png";
import Call from "../assets/Icons/Call.png";
import Email from "../assets/Icons/Email.png";
import Event from "../assets/Icons/Event.png";

const ActivityForm = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="activity-form-container">
      {/* Tabs Section */}
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        variant="standard"
        className="activity-tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#11334E",
            height: "3px",
          },
        }}
      >
        <Tab
          label="Activity"
          className={`tab-item ${activeTab === 0 ? "active-tab" : ""}`}
        />
        <Tab label="Actionables" className="tab-item" />
        <Tab label="Tasks" className="tab-item" />
        <Tab label="Note & File" className="tab-item" />
      </Tabs>

      {/* Action Buttons */}
      {/* Material UI Split Buttons */}
      <Box className="action-buttons-form">
        {/* Call Button */}
        <Box className="mui-split-button">
          <Box className="icon-part call-icon-bg">
            <img src={Call} alt="Call" className="button-icon" />
          </Box>
          <Button variant="outlined" className="text-part" disableElevation>
            Log a Call
          </Button>
        </Box>

        {/* Email Button */}
        <Box className="mui-split-button">
          <Box className="icon-part email-icon-bg">
            <img src={Email} alt="Email" className="button-icon" />
          </Box>
          <Button variant="outlined" className="text-part" disableElevation>
            Email
          </Button>
        </Box>

        {/* Event Button */}
        <Box className="mui-split-button">
          <Box className="icon-part event-icon-bg">
            <img src={Event} alt="Event" className="button-icon" />
          </Box>
          <Button variant="outlined" className="text-part" disableElevation>
            Event
          </Button>
        </Box>
      </Box>

      {/* Form Inputs */}
      <Box className="form-content">
        <Box className="form-row">
          <Box className="form-field" sx={{ flex: 1 }}>
            <label className="field-label">Subject</label>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Input Text"
              className="input-field"
            />
          </Box>
          <Box className="form-field" sx={{ flex: 1 }}>
            <label className="field-label">Add Contact</label>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Input Text"
              className="input-field"
            />
          </Box>
        </Box>

        <Box className="form-row">
          <Box className="form-field" sx={{ flex: 1 }}>
            <label className="field-label">Due Date</label>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="DD/MM/YYYY"
              className="input-field"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarMonth fontSize="small" color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className="form-field" sx={{ flex: 1 }}>
            <label className="field-label">Time</label>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="HH:MM"
              className="input-field"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccessTime fontSize="small" color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Box className="form-field">
          <label className="field-label">Description</label>
          <TextField
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            placeholder="Input Text"
            className="input-field"
          />
        </Box>

        <Box className="form-actions">
          <div className="form-actions">
            <img src={AddIcon} alt="Add Member" className="add-icon" />
            <div className="add-member-text">Add Team Member</div>
          </div>
          <Button
            variant="contained"
            className="submit-btn"
            sx={{
              bgcolor: "#11334E",
              color: "white",
              "&:hover": {
                bgcolor: "#0A2F50",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ActivityForm;
