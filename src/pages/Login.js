import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import logo from "./jobBros.png";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function Login() {
    const navigate = useNavigate();

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className="App">
                {/* Navbar with logo image */}
                <nav className="navbar">
                    <img src={logo} alt="jobbros logo" className="navbar-logo" />
                </nav>

                <header className="App-header">
                    {/* Slogan above the Google Login */}
                    <div className="slogan">From Bros to Pros</div>

                    <h4>Sign In with Google</h4>

                    {/* Google Login Button */}
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log("Decoded Token", decoded);
                            console.log("Login Success", credentialResponse);

                            const userData = {
                                email: decoded.email,
                                name: decoded.name,
                                profileURL: decoded.picture
                            };

                            localStorage.setItem("user", JSON.stringify(userData));

                            console.log("User Data", userData);

                            navigate("/home");
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

export default Login;
