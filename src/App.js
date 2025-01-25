import './App.css';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'

const CLIENT_ID = "106809819420-9atfhge2d0em8f1qg4lju3euargrdgmh.apps.googleusercontent.com"

function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App">
        <header className="App-header">
          <h1>Sign In with Google</h1>
          {/* Google Login Button */}
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Login Successful!", credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </header>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;