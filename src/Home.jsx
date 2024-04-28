import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TouristSpot from "./TouristSpot";
import AboutUsSection from "./AboutUsSection";
import WhatWeOfferSection from "./WhatWeOfferSection";

const Home = () => { 
    const spots = useLoaderData();

    const sixSpots = spots.slice(0, 6);

    return (
        <div> 
            
            <div>
                <Slider></Slider>
            </div> 

            <div className="mt-16"> 
             
             <h2 className="text-3xl flex justify-center font-semibold">Tourists spot </h2>

            </div>
            <div className="mt-8 gap-5 grid md:grid-cols-2 lg:grid-cols-3 lg:ml-10"> 
             
                {
                    sixSpots.map(spot => <TouristSpot key={spot._id} spot={spot}></TouristSpot>)
                }
                
            </div>
            <div className="mt-20">
                <WhatWeOfferSection></WhatWeOfferSection>
            </div>
            <div className="mt-20">
                <AboutUsSection></AboutUsSection>
            </div>
        </div>
    );
};

export default Home;
