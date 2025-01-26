import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function Login() {
    const navigate = useNavigate();

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <div className="App">

                <header className="App-header">
                <h2>Sign In with Google</h2>

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
                </header>
            </div>
        </GoogleOAuthProvider>
  );
}

export default Login;
