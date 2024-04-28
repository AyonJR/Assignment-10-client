import { useContext, useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import  { AuthContext } from "./AuthProvider";
import SingleMyList from "./SingleMyList";


const MyListPage = () => { 

  const { user  } = useContext(AuthContext) ;

  const [userData , setUserData] = useState([])

  // console.log(user.email)

  useEffect( ()=> { 
    fetch(`http://localhost:5000/addSpot/email?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setUserData(data))
  } , [])
 
  //  console.log(userData) 

   //then we have to map 


  return (

    <div>
      {
        userData.map(singleUserData => <SingleMyList singleUserData={singleUserData}></SingleMyList>)
      }

    </div>
  );
};

export default MyListPage;
