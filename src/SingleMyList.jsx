
const SingleMyList = ({singleUserData}) => {
     
      const {image, tourists_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, total_visitors_per_year, user_email, user_name } = singleUserData
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Tourists Spot</th>
        <th>Location</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>{tourists_spot_name}</td>
        <td>{location}</td>
        <td>{average_cost}</td>
      </tr>
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default SingleMyList;