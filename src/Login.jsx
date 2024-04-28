import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle , FaGithub  } from 'react-icons/fa';


const Login = () => {
    const { loginUserWithGoogle , loginUserWithGithub } = useContext(AuthContext); 

    const location = useLocation() ;
    const navigate = useNavigate()

    const handleGoogleLogin = async () => {
        try {
            await loginUserWithGoogle();
            toast.success("Logged in with Google successfully");
            navigate(location?.state ? location.state : "/")
        } catch (error) {
            console.error("Google login error:", error);
            toast.error("Google login failed");
        }
    };
       
    const handleGithubLogin = async () => {
        try {
            await loginUserWithGithub();
            toast.success("Logged in with Github successfully");
        } catch (error) {
            console.error("Github login error:", error);
            toast.error("Github login failed");
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
                                <button type="submit" className="btn bg-gradient-to-r from-blue-950 to-purple-900 text-white font-semibold">Login</button>
                            </div>
                            <div className="flex justify-center mt-3">
                            <button type="button" onClick={handleGoogleLogin} className="btn">
            <FaGoogle className="inline-block mr-2" /> Google
        </button>
                            </div>
                            <div className="flex justify-center mt-3">
                            <button type="button" onClick={handleGithubLogin} className="btn">
            <FaGithub className="inline-block mr-2" /> GitHub
        </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
