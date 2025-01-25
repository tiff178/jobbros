import React from 'react';

function Home() {
  return (
    <div data-layer="Homepage" className="Homepage" style={{width: 1440, height: 1024, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div data-layer="Home Page" className="HomePage" style={{width: 1440, height: 1024, position: 'relative', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
        <div data-layer="Frame 37" className="Frame37" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div data-layer="Site Bar" className="SiteBar" style={{width: 484, height: 1024, paddingLeft: 82, paddingRight: 82, paddingTop: 124, paddingBottom: 124, background: '#81D8D0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 95, display: 'inline-flex'}}>
            <div data-layer="User Logo" className="UserLogo" style={{height: 214, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 27, display: 'flex'}}>
              <div data-layer="UserCircle" className="Usercircle" style={{width: 120, height: 120, position: 'relative'}}>
                <div data-layer="Vector" className="Vector" style={{width: 120, height: 120, left: 0, top: 0, position: 'absolute', border: '4px white solid'}}></div>
                <div data-layer="Vector" className="Vector" style={{width: 50, height: 50, left: 35, top: 30, position: 'absolute', border: '4px white solid'}}></div>
                <div data-layer="Vector" className="Vector" style={{width: 80.25, height: 24.63, left: 19.88, top: 80, position: 'absolute', border: '4px white solid'}}></div>
              </div>
              <div data-layer="User Name" className="UserName" style={{alignSelf: 'stretch', height: 67, textAlign: 'center', color: 'black', fontSize: 35, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word'}}>User Name</div>
            </div>
            <div data-layer="Site Bar Text" className="SiteBarText" style={{alignSelf: 'stretch', height: 336, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <div data-layer="Update Profile" className="UpdateProfile" style={{alignSelf: 'stretch', height: 112, textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word'}}>Update Profile</div>
              <div data-layer="Update Resume" className="UpdateResume" style={{alignSelf: 'stretch', height: 112, textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word'}}>Update Resume</div>
              <div data-layer="Settings" className="Settings" style={{alignSelf: 'stretch', height: 112, textAlign: 'center', color: 'black', fontSize: 25, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word'}}>Settings</div>
            </div>
            <div data-layer="Logout Button" className="LogoutButton" style={{paddingLeft: 100, paddingRight: 100, paddingTop: 34, paddingBottom: 34, background: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
              <div data-layer="Logout" className="Logout" style={{textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word'}}>Logout</div>
            </div>
          </div>
        </div>
        <div data-layer="notifications_none_24px" className="NotificationsNone24px" style={{width: 71, height: 64, paddingLeft: 11.83, paddingRight: 11.83, paddingTop: 6, paddingBottom: 6, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <img data-layer="icon/social/notifications_none_24px" className="IconSocialNotificationsNone24px" style={{width: 47.33, height: 52}} src="https://via.placeholder.com/47x52" alt="Notifications" />
        </div>
        <div data-layer="Frame 10" className="Frame10" style={{height: 733, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 101, display: 'inline-flex'}}>
          <div data-layer="job-search" className="JobSearch" style={{alignSelf: 'stretch', height: 110, paddingLeft: 40, paddingRight: 40, paddingTop: 73, paddingBottom: 73, background: '#D9D9D9', borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div data-layer="Job Search" className="JobSearch" style={{textAlign: 'center', color: 'black', fontSize: 35, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word'}}>Job Search</div>
          </div>
          <div data-layer="application-tracking" className="ApplicationTracking" style={{alignSelf: 'stretch', height: 110, paddingLeft: 40, paddingRight: 40, paddingTop: 73, paddingBottom: 73, background: '#D9D9D9', borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div data-layer="Application Tracking" className="ApplicationTracking" style={{textAlign: 'center', color: 'black', fontSize: 35, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word'}}>Application Tracking</div>
          </div>
          <div data-layer="saved-jobs" className="SavedJobs" style={{alignSelf: 'stretch', height: 100, paddingLeft: 40, paddingRight: 40, paddingTop: 73, paddingBottom: 73, background: '#D9D9D9', borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div data-layer="Saved Jobs" className="SavedJobs" style={{textAlign: 'center', color: 'black', fontSize: 35, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word'}}>Saved Jobs</div>
          </div>
          <div data-layer="resource" className="Resource" style={{alignSelf: 'stretch', height: 110, paddingLeft: 40, paddingRight: 40, paddingTop: 73, paddingBottom: 73, background: '#D9D9D9', borderRadius: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
            <div data-layer="Resource" className="Resource" style={{textAlign: 'center', color: 'black', fontSize: 35, fontFamily: 'Outfit', fontWeight: '700', wordWrap: 'break-word'}}>Resource</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;