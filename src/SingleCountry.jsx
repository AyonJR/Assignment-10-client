
const SingleCountry = ({country}) => { 
    
     const {country_name , image , short_description , _id} = country
     console.log(country)
    return (
        <div> 
           
   <div className="card bg-base-100 shadow-lg image-full">
  <figure ><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title flex justify-center font-bold">{country_name}</h2>
    <p>{short_description}</p>
    
  </div>
</div>
        </div>
    );
};

export default SingleCountry;