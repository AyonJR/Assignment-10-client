import  { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios

const MyListPage = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await axios.get('http://localhost:5000/addSpot');
        setSpots(response.data);
      } catch (error) {
        console.error('Error fetching spots:', error);
      }
    };

    fetchSpots();
  }, []);

  const handleUpdate = (spotId) => {
    console.log(`Updating spot with ID: ${spotId}`);
  };

  const handleDelete = (spotId) => {
    console.log(`Deleting spot with ID: ${spotId}`);
  };

  return (
    <div>
      <h1>My List Page</h1>
      <table>
        <thead>
          <tr>
            <th>Tourist Spot Name</th>
            <th>Location</th>
            <th>Average Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((spot) => (
            <tr key={spot._id}>
              <td>{spot.tourists_spot_name}</td>
              <td>{spot.location}</td>
              <td>{spot.average_cost}</td>
              <td>
                <button onClick={() => handleUpdate(spot._id)}>Update</button>
                <button onClick={() => handleDelete(spot._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyListPage;
