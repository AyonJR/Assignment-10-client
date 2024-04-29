import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const SingleCountryDetails = () => {
    const countryDetails = useLoaderData();
  
    return ( 
        <Fade direction="left" cascade>

        <div>
            
            <div className="text-center ">
            {countryDetails.map((spot) => (
               <div key={spot._id} className="card mt-5 bg-white rounded-lg shadow-md p-6 mx-5">
               <h3 className="text-xl font-semibold mb-4">{spot.tourists_spot_name}</h3>
               <p className="text-gray-600 "><span className="font-semibold">Country:</span> {spot.country_name}</p>
               <p className="text-gray-600"><span className="font-semibold">Location:</span> {spot.location}</p>
               <p className="text-gray-600"><span className="font-semibold">Description:</span>: {spot.short_description}</p>
               <p className="text-gray-600"><span className="font-semibold">Average Cost:</span> {spot.average_cost}</p>
               <p className="text-gray-600"><span className="font-semibold">Seasonality:</span>: {spot.seasonality}</p>
             <div className="flex justify-center">
             <button className="bg-gradient-to-r from-blue-950 to-purple-900 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600  w-40 transition duration-300 ease-in-out">View Details</button>
             </div>
             </div>
             
            ))}
            </div>
        </div>
        </Fade>

    );
};

export default SingleCountryDetails;
