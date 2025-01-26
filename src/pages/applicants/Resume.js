import React, { useState, useRef } from "react";
import { jsPDF } from "jspdf";
import "./Resume.css";

const Resume = () => {
  const resumeRef = useRef();

  // State for Resume Data
  const [resumeData, setResumeData] = useState({
    name: "Harley Evelyn Nguyen",
    career: "Data Analyst",
    contactInfo: {
      phone: "07661892982",
      email: "letn7@uci.com",
      address: "Zot Zot St, Irvine",
    },
    skills: [
      { skill: "SQL", progress: 70 },
      { skill: "Tableau", progress: 90 },
    ],
    about: "Undergraduate student with passion in data and economics.",
    experience: [
      {
        company: "UCI Office of Information and Technology",
        years: "2024-206",
        role: "Data Analyst"
      },
      {
        company: "HaulPay",
        years: "2023-2024",
        role: "AI/ML Intern"
      },
    ],
  });

  // Handlers to Update Data
  const handleChange = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index][field] = value;
    setResumeData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index][field] = value;
    setResumeData((prev) => ({ ...prev, experience: updatedExperience }));
  };

  // Generate PDF
  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(resumeRef.current, {
      callback: function (doc) {
        doc.save("Resume.pdf"); // Save the PDF file
      },
      x: 10,
      y: 10,
    });
  };

  return (
    <div>
      <main className="main-content" ref={resumeRef}>
        {/* Left Section */}
        <section className="left-section">
          <div className="left-content">
            <div className="profile">
              <h2 className="name">
                <input
                  type="text"
                  value={resumeData.name}
                  placeholder="Your Name"
                  onChange={(e) =>
                    handleChange("profile", "name", e.target.value)
                  }
                />
              </h2>
              <p className="career">
                <input
                  type="text"
                  value={resumeData.career}
                  placeholder="Your Career"
                  onChange={(e) =>
                    handleChange("profile", "career", e.target.value)
                  }
                />
              </p>
            </div>
            <div className="contact-info">
              <h3 className="main-title">Contact Info</h3>
              <ul>
                {Object.keys(resumeData.contactInfo).map((key) => (
                  <li key={key}>
                    <input
                      type="text"
                      value={resumeData.contactInfo[key]}
                      placeholder={`Your ${key}`}
                      onChange={(e) =>
                        handleChange("contactInfo", key, e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-section">
              <h3 className="main-title">Skills</h3>
              <ul>
                {resumeData.skills.map((skill, index) => (
                  <li key={index}>
                    <input
                      type="text"
                      value={skill.skill}
                      placeholder="Skill"
                      onChange={(e) =>
                        handleSkillChange(index, "skill", e.target.value)
                      }
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={skill.progress}
                      onChange={(e) =>
                        handleSkillChange(index, "progress", e.target.value)
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="right-section">
          <div className="right-main-content">
            <section className="about sect">
              <h2 className="right-title">About Me</h2>
              <textarea
                className="para"
                value={resumeData.about}
                placeholder="Write about yourself..."
                onChange={(e) =>
                  handleChange("about", "description", e.target.value)
                }
              />
            </section>
            <section className="experience sect">
              <h2 className="right-title">Experience</h2>
              <div className="timeline">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <input
                      type="text"
                      value={exp.company}
                      placeholder="Company"
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      value={exp.years}
                      placeholder="Years"
                      onChange={(e) =>
                        handleExperienceChange(index, "years", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      value={exp.role}
                      placeholder="Role"
                      onChange={(e) =>
                        handleExperienceChange(index, "role", e.target.value)
                      }
                    />
                    <textarea
                      value={exp.description}
                      placeholder="Description"
                      onChange={(e) =>
                        handleExperienceChange(index, "description", e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Button to Generate PDF */}
      <button onClick={generatePDF} className="generate-button">
        Generate PDF
      </button>
    </div>
  );
};

export default Resume;

