import { Link } from "react-router-dom";

const SingleMyList = ({singleUserData , handleDelete}) => { 

  const { _id, tourists_spot_name, location, average_cost } = singleUserData ;

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"></td>
      <td className="px-6 py-4 font-bold whitespace-nowrap text-sm text-gray-500">{tourists_spot_name}</td>
      <td className="px-6 py-4 font-bold whitespace-nowrap text-sm text-gray-500">{location}</td>
      <td className="px-6 py-4 font-bold whitespace-nowrap text-sm text-gray-500">{average_cost}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <Link to={`/updateInfo/${_id}`}>
          <button className="btn text-white font-semibold bg-gradient-to-r from-blue-950 to-purple-900">Update</button>
        </Link>
        <button onClick={() => handleDelete(_id)} className="btn text-white font-semibold bg-gradient-to-r from-blue-950 to-purple-900 ml-2">Delete</button>
      </td>
    </tr>
  );
};

export default SingleMyList;