import React from "react";
import homeIcon from "./img/home.png";
import { useNavigate } from "react-router-dom";
import "./Resources.css";
import "bootstrap/dist/css/bootstrap.css";

function Resources() {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    navigate("/home");
  };

  const jobResources = [
    {
      name: "Resume Tips",
      url: "https://www.gsd.harvard.edu/career/career-services-students/resume-tips/",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/8101/8101319.png",
    },
    {
      name: "Interview Preparation",
      url: "https://hbr.org/2021/11/10-common-job-interview-questions-and-how-to-answer-them",
      imgUrl:
        "https://img.freepik.com/free-vector/job-interview-concept-illustration_114360-24598.jpg",
    },
    {
      name: "LinkedIn Optimization",
      url: "https://www.linkedin.com/pulse/how-optimize-your-linkedin-profile-make-stand-out-plus-chan-mba/",
      imgUrl:
        "https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png",
    },
    {
      name: "Job Search Strategies",
      url: "https://www.linkedin.com/pulse/winning-job-search-strategy-dan-mian/",
      imgUrl:
        "https://static.vecteezy.com/system/resources/previews/002/106/197/non_2x/online-job-search-concept-vector.jpg",
    },
    {
      name: "Networking Advice",
      url: "https://hbr.org/2023/03/a-beginners-guide-to-networking",
      imgUrl:
        "https://st2.depositphotos.com/1071184/6034/v/450/depositphotos_60341981-stock-illustration-networking-the-social-connections-between.jpg",
    },
    {
      name: "Salary Negotiation Tips",
      url: "https://online.hbs.edu/blog/post/salary-negotiation-tips",
      imgUrl: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133653728/original/aa2fda974440b8e3e4979290c24c8d08283c4f47/help-you-negotiate-your-salary-or-give-you-career-advice.jpg"},
  ];

  return (
    <div className="Resources">
      <div
      className="container py-4 d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      {/* Home Button */}
      <div className="HomeBtn mb-3">
        <img
          onClick={handleHomeButtonClick}
          src={homeIcon}
          alt="Home"
          style={{ height: "55px" }}
        />
      </div>

      {/* Header */}
      <h1 className="text-center">Resources</h1>

      {/* Resource Cards */}
      <div className="row justify-content-center">
        {jobResources.map((resource, index) => (
          <div
            key={index}
            className="col-md-4 mb-3 d-flex justify-content-center"
          >
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-center Chosen"
            >
              <div
                className="card shadow-sm"
              >
                {/* Card Image */}
                <img
                  src={resource.imgUrl}
                  className="card-img-top"
                  alt={resource.name}
                  style={{ objectFit: "cover", height: "200px", width: "200px", alignItems: "center" }}
                />
              </div>
              <h5 className="card-title mt-2">{resource.name}</h5>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default Resources;
