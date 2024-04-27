import React, { useState } from 'react';

const AddTouristsSpot = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    image: '',
    tourists_spot_name: '',
    country_name: '',
    location: '',
    short_description: '',
    average_cost: '',
    seasonality: '',
    travel_time: '',
    total_visitors_per_year: '',
    user_email: '',
    user_name: ''
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend server for further processing
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      image: '',
      tourists_spot_name: '',
      country_name: '',
      location: '',
      short_description: '',
      average_cost: '',
      seasonality: '',
      travel_time: '',
      total_visitors_per_year: '',
      user_email: '',
      user_name: ''
    });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl flex justify-center font-bold mb-4">Add Tourists Spot</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Image (URL)</label>
            <input type="text" name="image" value={formData.image} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tourists Spot Name</label>
            <input type="text" name="tourists_spot_name" value={formData.tourists_spot_name} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country Name</label>
            <input type="text" name="country_name" value={formData.country_name} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Short Description</label>
            <textarea name="short_description" value={formData.short_description} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" rows="3" required></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Average Cost</label>
            <input type="text" name="average_cost" value={formData.average_cost} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Seasonality</label>
            <input type="text" name="seasonality" value={formData.seasonality} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Travel Time</label>
            <input type="text" name="travel_time" value={formData.travel_time} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Visitors Per Year</label>
            <input type="text" name="total_visitors_per_year" value={formData.total_visitors_per_year} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User Email</label>
            <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">User Name</label>
            <input type="text" name="user_name" value={formData.user_name} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" required />
          </div>
        </div>
        <button type="submit" className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
