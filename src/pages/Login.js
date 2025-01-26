import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

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


// import React from 'react';
// import { useAuth } from 'your-auth-library'; // Replace with your actual auth library

// const App = () => {
//     const { login, user } = useAuth();

//     const handleLogin = () => {
//         login({
//             scope: ["profile", "email"]
//         });
//     };

//     return (
//         <div>
//             <button onClick={handleLogin}>Login</button>
//             {user && (
//                 <div>
//                     <h1>Welcome, {user.name}</h1>
//                     <p>Email: {user.email}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default App;
export default Login;
