import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Corrected import
import logo from "./jobBros.png";
import "./Login.css";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function Login() {
    const navigate = useNavigate();

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className="Main">
                {/* Navbar */}
                <header className="Navbar">
                    <img src={logo} alt="jobbros logo" className="Navbar-logo" />
                </header>


                {/* Main Content */}
<main className="Login-container">
    <div className="Slogan">From Bros to Pros</div>
    <h4 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>Sign In with Google</h4>
    <GoogleLogin
        className="GoogleLogin" // Adds the custom class for styling
        onSuccess={(credentialResponse) => {
            const decoded = jwtDecode(credentialResponse.credential);
            console.log("Decoded Token", decoded);

            const userData = {
                email: decoded.email,
                name: decoded.name,
                profileURL: decoded.picture,
            };

            localStorage.setItem("user", JSON.stringify(userData));
            navigate("/home");
        }}
        onError={() => {
            console.log("Login Failed");
        }}
    />
</main>


                {/* Footer */}
                <footer className="Footer">
                    &copy; {new Date().getFullYear()} JobBros. All rights reserved.
                </footer>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
