import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container mx-auto my-8">
        <h1 className="text-4xl text-center">404 - Page Not Found</h1>
        <p className="text-center mt-4">The page you are looking for does not exist.</p>
       <div className="flex justify-center mt-5">
       <NavLink to='/'><button className="btn">Home</button></NavLink>
       </div>
      </div>
    );
};

export default NotFound;