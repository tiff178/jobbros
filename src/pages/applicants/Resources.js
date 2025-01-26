import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Resources() {

  const navigate = useNavigate(); // Initialize useNavigate
  const handleHomeButtonClick = () => {
    navigate('/home'); // Navigate to the home page
  };  

  const jobResources = [
    { name: "Resume Tips", url: "https://www.gsd.harvard.edu/career/career-services-students/resume-tips/" },
    { name: "Interview Preparation", url: "https://hbr.org/2021/11/10-common-job-interview-questions-and-how-to-answer-them" },
    { name: "LinkedIn Optimization", url: "https://www.linkedin.com/pulse/how-optimize-your-linkedin-profile-make-stand-out-plus-chan-mba/" },
    { name: "Job Search Strategies", url: "https://www.linkedin.com/pulse/winning-job-search-strategy-dan-mian/" },
    { name: "Networking Advice", url: "https://hbr.org/2023/03/a-beginners-guide-to-networking" },
    { name: "Salary Negotiation Tips", url: "https://online.hbs.edu/blog/post/salary-negotiation-tips" }
  ];

  return (
    <div style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full height of the viewport
    }}>
      <h1 style={{ marginBottom: '40px', fontFamily: 'Outfit', fontSize: '50px'}}>Resources</h1> {/* Increased marginBottom for more space */}
      <div style={{
        display: 'flex', // Arrange circles horizontally
        flexWrap: 'wrap', // Allow wrapping to the next line
        justifyContent: 'center', // Center the circles horizontally
        gap: '20px', // Space between circles
      }}>
        {jobResources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security feature for external links
            style={{
              textDecoration: 'none', // Remove underline from links
              color: 'black', // Set the text color
            }}
          >
            <div style={{
              backgroundColor: '#ffffff',
              padding: '20px',
              borderRadius: '50%',
              border: '2px solid #000',
              width: '150px',
              height: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: '16px',
              fontFamily:'Outfit',
              fontWeight: 'bold',
              cursor: 'pointer', // Show pointer cursor on hover
            }}>
              {resource.name}
            </div>
          </a>
        ))}
      </div>
    <button
    onClick={handleHomeButtonClick}
    style={{
      marginTop: '40px',
      padding: '10px 20px',
      fontSize: '18px',
      fontFamily:'Outfit',
      cursor: 'pointer',
      backgroundColor: '#D9D9D9', // Green button color
      color: 'black',
      border: 'none',
      borderRadius: '5px',
    }}> Back to Home</button>

    </div>
  );
}

export default Resources;