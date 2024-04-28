import { useState } from "react";

const SingleMyList = ({singleUserData}) => { 

  const [users , setUsers] = useState(singleUserData)
     
      const { _id, image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name } = singleUserData ;

    const handleDelete = id => { 

      fetch(`http://localhost:5000/addSpot/${_id}` , {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0){
          console.log(data)
          console.log("deleted successfully")
          const remainingUsers = users.filter(user => user._id !== id)
          setUsers(remainingUsers)
        }
      })

    }



    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Tourists Spot</th>
        <th>Location</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>{tourists_spot_name}</td>
        <td>{location}</td>
        <td>{average_cost}</td>
        <td><button className="btn text-white font-semibold bg-gradient-to-r from-blue-950 to-purple-900">Update</button></td>
        <td><button onClick={()=> handleDelete (_id)} className="btn text-white font-semibold bg-gradient-to-r from-blue-950 to-purple-900">Delete</button></td>
      </tr>
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SingleMyList;