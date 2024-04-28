import { useLoaderData } from "react-router-dom";

const UpdateInfo = () => { 

    const loadedData = useLoaderData();
    const {_id , image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time , total_visitors_per_year , user_email , user_name } = loadedData ;
    console.log(loadedData) ;
   
   

   const handleUpdate = (event) => {
    
    event.preventDefault() ; 
    const form = event.target ;
    const image = form.image.value ;
    const tourists_spot_name = form.tourists_spot_name.value ;
    const country_name = form.country_name.value ;
    const location = form.location.value ;
    const short_description = form.short_description.value ;
    const average_cost = form.average_cost.value ;
    const seasonality = form.seasonality.value ;
    const travel_time = form.travel_time.value ;
    const total_visitors_per_year = form.total_visitors_per_year.value ;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
     
    form.reset();


    const updateSpot = { image , tourists_spot_name , country_name , location , short_description , average_cost , seasonality , travel_time , total_visitors_per_year , user_email , user_name} 

    fetch(`http://localhost:5000/addSpot/${_id}`,
     
    { 
        method: "PUT" , 
        headers: {
            "content-type":"application/json"
        } , 
        body: JSON.stringify(updateSpot)
    }
    
    
    )
    .then(res => res.json())
    .then(data => console.log(data))
    

   }




    return (
        <div>
            <div className="container mx-auto mt-4">
  <h2 className="text-3xl flex justify-center font-bold mb-8">Update Tourists Spot</h2>
  <form  onSubmit={handleUpdate} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="grid grid-cols-1 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Image (URL)</label>
        <input type="text" defaultValue={image} name="image" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tourists Spot Name</label>
        <input type="text" defaultValue={tourists_spot_name} name="tourists_spot_name" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Country Name</label>
        <input type="text" defaultValue={country_name} name="country_name" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" defaultValue={location} name="location" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Short Description</label>
        <textarea name="short_description" defaultValue={short_description} className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="3" required></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Average Cost</label>
        <input type="text" defaultValue={average_cost} name="average_cost" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Seasonality</label>
        <input type="text" defaultValue={seasonality} name="seasonality" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Travel Time</label>
        <input type="text" defaultValue={travel_time} name="travel_time" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Total Visitors Per Year</label>
        <input type="text " defaultValue={total_visitors_per_year}  name="total_visitors_per_year" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">User Email</label>
        <input type="email" defaultValue={user_email} name="user_email" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">User Name</label>
        <input type="text" defaultValue={user_name} name="user_name" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
    </div>
    <button type="submit" className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-950 to-purple-900">
      Update
    </button>
  </form>
</div>

        </div>
    );
};

export default UpdateInfo;