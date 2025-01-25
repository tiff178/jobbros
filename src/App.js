import './App.css';
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID

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