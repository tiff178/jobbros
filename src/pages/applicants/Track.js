import React, { useState } from "react";
import homeIcon from "./img/home.png";
import { useNavigate } from "react-router-dom";
import "./Track.css";

function Track() {
    const navigate = useNavigate();
  
  const handleHomeButtonClick = () => {
    navigate("/home");
  };

  // State for job applications
  const [applications, setApplications] = useState([
    { company: "Google", job: "Software Engineer", applied: "Yes", status: "Interviewing" },
    { company: "Amazon", job: "Data Scientist", applied: "No", status: "Not Applied" },
  ]);

  // State for adding a new application
  const [newApplication, setNewApplication] = useState({
    company: "",
    job: "",
    applied: "No",
    status: "Not Applied",
  });

  // Add a new application to the table
  const addApplication = () => {
    if (newApplication.company && newApplication.job) {
      setApplications([...applications, newApplication]);
      setNewApplication({ company: "", job: "", applied: "No", status: "Not Applied" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  // Update the status of an application
  const updateStatus = (index) => {
    const newStatus = prompt("Enter new status:", applications[index].status);
    if (newStatus) {
      const updatedApplications = [...applications];
      updatedApplications[index].status = newStatus;
      setApplications(updatedApplications);
    }
  };

  return (
    <div className="TrackContainer">
      <div className="HomeBtn mb-3">
        <img
          onClick={handleHomeButtonClick}
          src={homeIcon}
          alt="Home"
          style={{ height: "55px" }}
        />
      </div>
      <h1>Application Tracking</h1>

      {/* Add Application Form */}
      <div className="AddApplicationForm">
        <input
          type="text"
          placeholder="Company Name"
          value={newApplication.company}
          onChange={(e) => setNewApplication({ ...newApplication, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Job Name"
          value={newApplication.job}
          onChange={(e) => setNewApplication({ ...newApplication, job: e.target.value })}
        />
        <select
          value={newApplication.applied}
          onChange={(e) => setNewApplication({ ...newApplication, applied: e.target.value })}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        <button onClick={addApplication}>Add Application</button>
      </div>

      {/* Applications Table */}
      <table className="ApplicationsTable">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Job Name</th>
            <th>Applied (Y/N)</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.company}</td>
              <td>{app.job}</td>
              <td>{app.applied}</td>
              <td>{app.status}</td>
              <td>
                <button onClick={() => updateStatus(index)}>Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Track;
