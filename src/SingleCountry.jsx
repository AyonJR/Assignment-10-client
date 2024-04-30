import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const SingleCountry = ({ country }) => {
    const { country_name, image, short_description } = country;

    return ( 
        <Fade direction="down" cascade>

        <div>
            <Link to={`/singleCountryDetails/${country_name}`}>
                <div className="card h-[300px] bg-base-100 shadow-lg image-full">
                    <figure><img src={image} alt="Country" /></figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-center font-bold">{country_name}</h2>
                        <p>{short_description}</p>
                    </div>
                </div>
            </Link>
        </div>
        </Fade>

    );
};

export default SingleCountry;
