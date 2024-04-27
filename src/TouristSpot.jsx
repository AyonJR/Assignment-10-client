const TouristSpot = ({ spot }) => { 
    const { image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name } = spot;

    // Split the short description into an array of sentences
    const sentences = short_description.split(/[.!?]/);

    // Get the first sentence
    const firstSentence = sentences[0];

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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
                        <button className="btn bg-blue-950 text-white font-semibold">Show details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;
