import React from "react";
import notificationIcon from "./img/notification-icon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";


function Home() {
  const location = useLocation();
  const { user } = location.state || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any session or authentication data (e.g., localStorage, cookies, etc.)
    localStorage.removeItem("authToken"); // Example of clearing a token, adjust as necessary

    // Redirect to the login page
    navigate("/"); // '/login' is the route for your login page
  };

  return (
    <div className="Home container-fluid">
      <div className="row">
        <div className="col-5 SiteBar">
          <div className="User">
            <img src={user?.picture} className="UserImage" alt="Your Profile"/>
            <h2>{user?.name}</h2>
          </div>
          <div className="User">
            <h4 onClick={() => navigate("/profile")}>Update Profile</h4>
            <h4 onClick={() => navigate("/resume")}>Update Resume</h4>
            <h4 onClick={() => navigate("/settings")}>Settings</h4>
          </div>
          <div className="Logout" onClick={handleLogout}>
            Logout
          </div>
        </div>
        <div className="col-7">
          <div className="Notifications">
            <img src={notificationIcon} alt="Notifications" />
          </div>
          <div className="Selection">
            <div className="Button" onClick={() => navigate("/jobs")}>
              Job Search
            </div>
            <div className="Button" onClick={() => navigate("/track")}>
              Application Tracking
            </div>
            <div className="Button" onClick={() => navigate("/saved")}>
              Saved Jobs
            </div>
            <div className="Button" onClick={() => navigate("/resources")}>
              Resources
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
