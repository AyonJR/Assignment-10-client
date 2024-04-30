import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";

const Countries = () => { 

    const [allCountries , setAllCountries] = useState([])


  useEffect( ()=> {
    fetch('https://final-assignment-10.vercel.app/countries')
   .then(res => res.json())
   .then(data => setAllCountries(data) )
  }  , [])


    return ( 
        <div > 
            
            <div className="mt-24">
                <h2 className="text-3xl flex justify-center font-semibold">Countries</h2>
            </div>
            <div className="mt-8  mx-5 gap-5 grid md:grid-cols-2 lg:grid-cols-3 lg:ml-10">
            {
                allCountries.map(country => <SingleCountry key={country._id} country={country}></SingleCountry>)
            }
            </div>
        </div>
    );
};

export default Countries;