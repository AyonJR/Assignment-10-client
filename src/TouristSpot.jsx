import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const TouristSpot = ({ spot }) => {
    const { image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time } = spot;

    const sentences = short_description.split(/[.!?]/);
    const firstSentence = sentences[0];

    return (
        <Fade direction="up" triggerOnce>
            <div>
                <div className="card lg:mx-0 mx-3 lg:w-96 bg-base-100 shadow-xl">
                    <figure><img className="lg:h-[250px] w-full" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title  font-bold">{tourists_spot_name}</h2>
                        <div className="flex justify-between">
                            <p className="font-semibold">{location}</p>
                            <p className="font-semibold">{country_name}</p>
                        </div>
                        <p className="mt-3">{firstSentence}</p>
                        <div className="flex  justify-between font-medium mt-3">
                            <p>{average_cost}</p>
                            <p>{seasonality}</p>
                            <p>{travel_time}</p>
                        </div>
                        <div className="card-actions justify-center mt-2">
                            <NavLink to='/viewDetails/:id'>
                                <button className="btn bg-gradient-to-r from-blue-950 to-purple-900 text-white font-semibold">Show details</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default TouristSpot;
