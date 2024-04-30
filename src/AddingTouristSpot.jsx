import Swal from 'sweetalert2';


const AddingTouristSpot = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;

    form.reset();

    const AddSpot = {
        image,
        tourists_spot_name,
        country_name,
        location,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
        user_email,
        user_name
    };

    fetch('https://final-assignment-10.vercel.app/addSpot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(AddSpot)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.insertedId) {
          // Show success SweetAlert if data insertion is successful
          Swal.fire({
              title: 'Success!',
              text: 'Spot added successfully!',
              icon: 'success',
              confirmButtonText: 'Cool'
          });
      } else {
          // Handle error condition if data insertion fails
          console.error('Failed to add spot:', data.error || 'Unknown error');
          // Show error SweetAlert with appropriate message
          Swal.fire({
              title: 'Error!',
              text: data.error || 'Failed to add spot. Please try again later.',
              icon: 'error',
              confirmButtonText: 'OK'
          });
      }
  })
  .catch(error => {
      console.error('Error:', error);
      // Handle fetch error if needed
      // Show error SweetAlert for fetch errors
      Swal.fire({
          title: 'Error!',
          text: 'An error occurred. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
      });
  });
    
  }
    
      return (
        <div className="container mt-5 mx-auto">
  <h2 className="text-3xl flex justify-center  font-bold mb-8">Add Tourists Spot</h2>
  <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="grid grid-cols-1 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Image (URL)</label>
        <input type="text" name="image" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tourists Spot Name</label>
        <input type="text" name="tourists_spot_name" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
      <label className="block text-sm font-medium text-gray-700">Country Name</label>
<select name="country_name" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required>
  <option value="">Select a country</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="Thailand">Thailand</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Vietnam">Vietnam</option>
  <option value="Cambodia">Cambodia</option>

  {/* Add more options as needed */}
</select>

      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input type="text" name="location" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Short Description</label>
        <textarea name="short_description" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="3" required></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Average Cost</label>
        <input type="text" name="average_cost" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Seasonality</label>
        <input type="text" name="seasonality" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Travel Time</label>
        <input type="text" name="travel_time" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Total Visitors Per Year</label>
        <input type="text" name="total_visitors_per_year" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">User Email</label>
        <input type="email" name="user_email" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">User Name</label>
        <input type="text" name="user_name" className="mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
      </div>
    </div>
    <button type="submit" className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-950 to-purple-900">
      Add
    </button>
  </form>

</div>

      );
};

export default AddingTouristSpot;