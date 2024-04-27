import { useState, useEffect } from 'react';

const AllTouristSpot = () => {
    const [spots, setSpots] = useState([]);
    const [sortedSpots, setSortedSpots] = useState([]);
    const [sortBy, setSortBy] = useState('asc'); // Default sorting is ascending

    // Fetch tourist spot data from the database
    useEffect(() => {
        // Fetch data from the database and set the state
        // Replace this with your actual fetch logic
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/addSpot');
                const data = await response.json();
                setSpots(data);
                setSortedSpots(data); // Initially set sorted spots to unsorted spots
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Handle sorting based on average cost
    useEffect(() => {
        const sorted = [...spots].sort((a, b) => {
            const costA = parseFloat(a.average_cost);
            const costB = parseFloat(b.average_cost);
            return sortBy === 'asc' ? costA - costB : costB - costA;
        });
        setSortedSpots(sorted);
    }, [sortBy, spots]);

    // Function to handle sort dropdown change
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    // Function to handle navigation to View Details Page
    const navigateToDetails = (spotId) => {
        // Perform navigation logic here
        console.log(`Navigating to details page for spot with ID: ${spotId}`);
    };

    return (
        <div className="container mx-auto">
            {/* Sort dropdown menu */}
           <div className='flex justify-center font-semibold my-6'>
           <div className="flex items-center justify-center mb-4">
    <label htmlFor="sort" className="mr-2 text-gray-700">Sort by Average Cost:</label>
    <select id="sort" value={sortBy} onChange={handleSortChange} className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
    </select>
</div>

           </div>

            {/* Display tourist spots */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedSpots.map((spot) => (
                    <div key={spot.id} className="card bg-white shadow-md">
                        <img src={spot.image} alt={spot.tourists_spot_name} className="h-48 w-full object-cover" />
                        <div className="p-4">
                            <h3 className="text-2xl flex justify-center font-semibold mb-2">{spot.tourists_spot_name}</h3>
                            <p className='font-normal'>Average Cost: <span className='font-semibold'>{spot.average_cost}</span></p>
                            <p className='font-normal'>Total Visitors Per Year: <span className='font-semibold'>{spot.total_visitors_per_year}</span></p>
                            <p className='font-normal'>Travel Time: <span className='font-semibold'>{spot.travel_time}</span></p>
                            <p className='font-normal'>Seasonality: <span className='font-semibold'>{spot.seasonality}</span></p>
                            <button className="mt-2 bg-blue-950 font-semibold text-white px-4 py-2  rounded-md" onClick={() => navigateToDetails(spot.id)}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpot;
