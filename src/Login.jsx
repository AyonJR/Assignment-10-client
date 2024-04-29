import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import "sweetalert2/dist/sweetalert2.css";
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const { loginUserWithGoogle, loginUserWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await loginUserWithGoogle();
            Swal.fire({
                title: 'Success!',
                text: 'Logged in with Google successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            }).then(() => {
                navigate(location?.state ? location.state : "/");
            });
        } catch (error) {
            console.error("Google login error:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Google login failed',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const handleGithubLogin = async () => {
        try {
            await loginUserWithGithub();
            Swal.fire({
                title: 'Success!',
                text: 'Logged in with Github successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        } catch (error) {
            console.error("Github login error:", error);
            Swal.fire({
                title: 'Error!',
                text: 'Github login failed',
                icon: 'error',
                confirmButtonText: 'OK'
            });
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
                         <div className="flex justify-between">
                         <div className="flex justify-center mt-3">
                                <button type="button" onClick={handleGoogleLogin} className="btn bg-gradient-to-r from-blue-950 to-purple-900 text-white">
                                    <FaGoogle className="inline-block mr-2" /> Google
                                </button>
                            </div>
                            <div className="flex justify-center ml-2 mt-3">
                                <button type="button" onClick={handleGithubLogin} className="btn bg-gradient-to-r from-blue-950 to-purple-900 text-white">
                                    <FaGithub className="inline-block mr-2" /> GitHub
                                </button>
                            </div>
                         </div>
                         <div className="mt-3">
                                Don't have an account? <Link to="/register"><span className="text-blue-600 font-semibold"> Register here</span></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
