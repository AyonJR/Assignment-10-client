import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TouristSpot from "./TouristSpot";

const Home = () => { 
    const spots = useLoaderData();

    // Slice the spots array to show only the first 6 spots
    const sixSpots = spots.slice(0, 6);

    return (
        <div> 
            <div>
                <Slider></Slider>
            </div> 

            <div className="mt-16"> 
             
             <h2 className="text-3xl flex justify-center font-semibold">Tourists spot </h2>

            </div>
            <div className="mt-16 gap-5 grid md:grid-cols-2 lg:grid-cols-3 lg:ml-10"> 
             
                {
                    sixSpots.map(spot => <TouristSpot key={spot._id} spot={spot}></TouristSpot>)
                }
                
            </div>
        </div>
    );
};

export default Home;
