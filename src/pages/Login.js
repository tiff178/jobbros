import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LinkedInOAuth = {
    CLIENT_ID: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    REDIRECT_URI: process.env.REACT_APP_LINKEDIN_REDIRECT_URI,
    STATE: process.env.REACT_APP_LINKEDIN_STATE,
}

function Login() {
    const navigate = useNavigate();

    const handleLinkedInLogin = () => {
        const linkedInAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${LinkedInOAuth.CLIENT_ID}&redirect_uri=${LinkedInOAuth.REDIRECT_URI}&state=${LinkedInOAuth.STATE}&scope=r_liteprofile%20r_emailaddress%20openid`;
        window.location.href = linkedInAuthURL;
    };

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className="App">
                <header className="App-header">
                    <h1>Sign In</h1>

                    {/* Google Login Button */}
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            console.log("Login Success", credentialResponse);

                            navigate("/home");
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />

                    {/* LinkedIn Login Button */}
                    <button onClick={handleLinkedInLogin}>
                        Sign in with LinkedIn
                    </button>

                </header>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
