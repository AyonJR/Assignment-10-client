import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { loginUserWithGoogle } = useContext(AuthContext);

    const handleGoogleLogin = async () => {
        try {
            await loginUserWithGoogle();
            // Handle successful login
            console.log("Logged in with Google successfully");
        } catch (error) {
            // Handle login error
            console.error("Google login error:", error);
        }
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-blue-950 text-white font-semibold">Login</button>
                            </div>
                            <div className="flex justify-center mt-3">
                                <button type="button" onClick={handleGoogleLogin} className="btn ">
                                    Sign in with Google
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
