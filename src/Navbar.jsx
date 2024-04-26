import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <li><NavLink to="/" ><a className="border-2 border-white p-2 rounded-lg">Home</a></NavLink></li>
      <li>
        <a className="border-2 border-white p-2 rounded-lg">Item 2</a>
      </li>
      <li><a className="border-2 border-white p-2 rounded-lg">Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   <NavLink to="/login"> <a className="btn mr-2">Login</a></NavLink>
   <NavLink to="/register"> <a className="btn ">Register</a></NavLink>

  </div>
</div>
    );
}; 

export default Navbar;