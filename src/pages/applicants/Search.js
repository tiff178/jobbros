import React from "react";
import './Search.css'; 

function Search() {
  return (
    <div className="SearchContainer">
      {/* Header Section */}
      <header className="SearchHeader">
        <div className="SearchBar">
          <input
            type="text"
            placeholder=""
            className="SearchInput"
          />
          <button className="FilterButton">
            <img
              src="./search.svg"
              alt="Filter"
              className="FilterIcon"
            />
          </button>
        </div>
      </header>

      {/* Additional Info Section */}
      <section className="AdditionalInfo">
        <div className="JobsFound">40 jobs found</div>
        <div className="SortOptions">
          <span>All Relevance</span>
          <div className="DropdownIcon">▼</div>
        </div>
      </section>

      {/* Job List Section */}
      <section className="JobList">
        <div className="JobCard">
          <div className="JobDetails">
            <img
              src="./gitlab-img.svg"
              alt="GitLab"
              className="CompanyLogo"
            />
            <div>
              <h3 className="JobTitle">Data Analyst Researcher</h3>
              <p className="CompanyName">GitLab</p>
            </div>
          </div>
          <div className="JobTags">
            <span className="Tag">Intern</span>
            <span className="Tag">Remote</span>
          </div>
        </div>
      </section>

      <section className="JobList">
        <div className="JobCard">
          <div className="JobDetails">
            <img
              src="./paypal-img.svg"
              alt="Paypal"
              className="CompanyLogo"
            />
            <div>
              <h3 className="JobTitle">Data Operation Intern</h3>
              <p className="CompanyName">Paypal</p>
            </div>
          </div>
          <div className="JobTags">
            <span className="Tag">Intern</span>
            <span className="Tag">Hybrid</span>
          </div>
        </div>
      </section>

      <section className="JobList">
        <div className="JobCard">
          <div className="JobDetails">
            <img
              src="./total-img.svg"
              alt="Total"
              className="CompanyLogo"
            />
            <div>
              <h3 className="JobTitle">Entry Level Data Analyst</h3>
              <p className="CompanyName">Total</p>
            </div>
          </div>
          <div className="JobTags">
            <span className="Tag">Intern</span>
            <span className="Tag">Remote</span>
          </div>
        </div>
      </section>

      <section className="JobList">
        <div className="JobCard">
          <div className="JobDetails">
            <img
              src="./dribble-img.svg"
              alt="Dribble"
              className="CompanyLogo"
            />
            <div>
              <h3 className="JobTitle">Data Analyst Intern</h3>
              <p className="CompanyName">Total</p>
            </div>
          </div>
          <div className="JobTags">
            <span className="Tag">Part time</span>
            <span className="Tag">Remote</span>
          </div>
        </div>
      </section>

      <section className="JobList">
        <div className="JobCard">
          <div className="JobDetails">
            <img
              src="./google-img.svg"
              alt="Google"
              className="CompanyLogo"
            />
            <div>
              <h3 className="JobTitle">Data Analyst Intern</h3>
              <p className="CompanyName">Total</p>
            </div>
          </div>
          <div className="JobTags">
            <span className="Tag">Intern</span>
            <span className="Tag">Hybrid</span>
          </div>
        </div>
      </section>

      <section className="JobList">
        <div className="JobCard">
          <div className="JobDetails">
            <img
              src="./uber-img.svg"
              alt="Uber"
              className="CompanyLogo"
            />
            <div>
              <h3 className="JobTitle">Data Engineering Intern</h3>
              <p className="CompanyName">Total</p>
            </div>
          </div>
          <div className="JobTags">
            <span className="Tag">Intern</span>
            <span className="Tag">Hybrid</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Search;



