import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
   
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()

   if(loading){
    return <div className="flex justify-center mt-[40vh]">
        <span className="loading  loading-spinner loading-lg"></span>
    </div>

   }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;