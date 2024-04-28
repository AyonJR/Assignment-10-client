import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext); // Get logoutUser function from context

    return (
        <div className="navbar bg-blue-950 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl">WonderTour</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/"><a className="border-2 border-white p-2 rounded-lg">Home</a></NavLink></li>
                    <li>
                        <NavLink to="/allTouristSpot"><a className="border-2 border-white p-2 rounded-lg">All Tourists Spot</a></NavLink>
                    </li>
                    <li><NavLink to="/addTouristSpot"><a className="border-2 border-white p-2 rounded-lg">Add Tourist Spot</a></NavLink></li>
                    <li><NavLink to="/myListPage"><a className="border-2 border-white p-2 rounded-lg">My List</a></NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        {/* User photo and logout button */}
                        <div className="relative">
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 mr-4 rounded-full cursor-pointer" />
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">{user.displayName}</span>
                        </div>
                        <button onClick={logoutUser} className="btn">Logout</button> 
                    </>
                ) : (
                    <>
                        <NavLink to="/login"><a className="btn mr-2">Login</a></NavLink>
                        <NavLink to="/register"><a className="btn">Register</a></NavLink>
                    </>
                )}
            </div>
        </div>
    );
}; 

export default Navbar;
