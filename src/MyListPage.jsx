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
  const handleDelete = id => { 

    console.log(id)

    fetch(`http://localhost:5000/addSpot/${id}` , {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0){
        console.log(data)
        console.log("deleted successfully")
       const remaining = userData.filter(data => data._id !== id)
       setUserData(remaining)
      }
    })

  }



  return (

    <div>
      {
        userData.map(singleUserData => <SingleMyList key={singleUserData._id} singleUserData={singleUserData} handleDelete={handleDelete}></SingleMyList>)
      }

    </div>
  );
};

export default MyListPage;
