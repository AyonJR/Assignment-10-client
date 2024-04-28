import { useLoaderData } from "react-router-dom";

const ViewDetails = () => { 

    const details = useLoaderData() ; 

    const {_id , image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time } = details

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <img src={image} className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold flex justify-center">{tourists_spot_name}</h1>
      <p className="py-6">{short_description}</p>
    </div>
    <div className="flex justify-around">
      <p className="font-semibold">Location : {location}</p>
      <p className="font-semibold ml-12">Country: {country_name}</p>
    </div>
    <div className="flex justify-around">
      <p className="font-semibold">Average Cost : {average_cost}</p>
      <p className="font-semibold ml-12">Seasonality: {seasonality}</p>
      <p className="font-semibold ml-12">Travel Time: {travel_time}</p>
    </div>
    
    
  </div>
</div>
        </div>
    );
};

export default ViewDetails;