import React, { useEffect } from 'react';

function Resources() {
  useEffect(() => {
    document.body.style.backgroundColor = '#81D8D0'; // Set background color for the entire body
    document.body.style.margin = 0; // Remove default margin
  }, []);

  const jobResources = [
    "Resume Tips",
    "Interview Preparation",
    "LinkedIn Optimization",
    "Job Search Strategies",
    "Networking Advice",
    "Salary Negotiation Tips"
  ];

  return (
    <div style={{ padding: '20px', fontFamily:'Outfit' }}>
      <h1>Resources</h1>
      <ul>
        {jobResources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
