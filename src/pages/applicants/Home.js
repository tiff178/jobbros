import './Home.css'

function Home() {
  return (
    <div>
        <div className='siteBar'>
            <h3 className='siteBarTitle'>Update Profile</h3>
            <h3 className='siteBarTitle'>Update Resume</h3>
            <h3 className='siteBarTitle'>Settings</h3>
            <h3 className='siteBarTitle'>Log Out</h3>
        </div>
      <div className="main">
        <button className="btn">Job Search</button>
        <button className="btn">Application Tracking</button>
        <button className="btn">Saved Jobs</button>
        <button className="btn">Resources</button>

      </div>
    </div>
  );
}

export default Home;