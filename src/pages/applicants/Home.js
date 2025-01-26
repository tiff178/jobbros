import React, { useEffect, useState } from "react";
import notificationIcon from "./img/appointment-reminders.png";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    navigate("/"); // Redirect to login
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className="SiteBar col-5">
          <div className="User">
            <img src={user?.profileURL} referrerPolicy="no-referrer" className="UserImage" alt="Your Profile" />
            <h2>{user?.name}</h2>
          </div>
          <div className="User">
            <h4 onClick={() => navigate("/profile")}>Update Profile</h4>
            <h4 onClick={() => navigate("/resume")}>Update Resume</h4>
          </div>
          <div className="Logout" onClick={handleLogout}>
            Logout
          </div>
        </div>

        {/* Right Section */}
        <div className="RightSection col-7">
          <div className="Notifications">
            <img src={notificationIcon} alt="Notifications" style={{ height: "55px" }} />
          </div>
          <div className="Selection">
            <div className="Button" onClick={() => navigate("/jobs")}>
              Job Search
            </div>
            <div className="Button" onClick={() => navigate("/track")}>
              Application Tracking
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
