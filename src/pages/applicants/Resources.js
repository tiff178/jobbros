import React from "react";
import homeIcon from "./img/home.png";
import { useNavigate } from "react-router-dom";
import "./Resources.css";

function Resources() {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate("/home");
  };

  const jobResources = [
    {
      name: "Resume Tips",
      url: "https://www.gsd.harvard.edu/career/career-services-students/resume-tips/",
    },
    {
      name: "Interview Preparation",
      url: "https://hbr.org/2021/11/10-common-job-interview-questions-and-how-to-answer-them",
    },
    {
      name: "LinkedIn Optimization",
      url: "https://www.linkedin.com/pulse/how-optimize-your-linkedin-profile-make-stand-out-plus-chan-mba/",
    },
    {
      name: "Job Search Strategies",
      url: "https://www.linkedin.com/pulse/winning-job-search-strategy-dan-mian/",
    },
    {
      name: "Networking Advice",
      url: "https://hbr.org/2023/03/a-beginners-guide-to-networking",
    },
    {
      name: "Salary Negotiation Tips",
      url: "https://online.hbs.edu/blog/post/salary-negotiation-tips",
    },
  ];

  return (
    <div>
      
      <div className="resources-container">
      <div className="Home">
        <img onClick={handleHomeButtonClick} src={homeIcon} alt="Home" style={{ height: "55px" }} />
      </div>
        <h1 className="resources-title">Resources</h1>
        <div className="resources-wrapper">
          {jobResources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              <div className="resource-item">{resource.name}</div>
            </a>
          ))}
        </div>

        <button onClick={handleHomeButtonClick} className="back-home-button">
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Resources;
