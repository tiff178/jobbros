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
                    <h2>Sign In with Google</h2>

                    {/* Google Login Button */}
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log("Decoded Token", decoded);
                            console.log("Login Success", credentialResponse);

                            const userData = {
                                email: decoded.email,
                                name: decoded.name,
                                picture: decoded.picture
                            };

                            console.log("User Data", userData);

                            navigate("/home", { state: { user: userData } });
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