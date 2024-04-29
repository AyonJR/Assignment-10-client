import { useContext, useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import SingleMyList from "./SingleMyList";
import Swal from 'sweetalert2';

const MyListPage = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/addSpot/email?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this spot!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addSpot/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your spot has been deleted.',
                'success'
              );
              const remaining = userData.filter(data => data._id !== id);
              setUserData(remaining);
            }
          })
          .catch(error => {
            console.error('Error deleting spot:', error);
            Swal.fire(
              'Error!',
              'Failed to delete spot. Please try again later.',
              'error'
            );
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your spot is safe :)',
          'error'
        );
      }
    });
  };

  return (
    <div> 
      <div className="flex justify-center text-3xl font-semibold mt-5">
        <h2>My List</h2>
      </div>

      <div className="mt-5">
      {userData.map(singleUserData => (
        <SingleMyList
          key={singleUserData._id}
          singleUserData={singleUserData}
          handleDelete={handleDelete}
        ></SingleMyList>
      ))}
      </div>
    </div>
  );
};

export default MyListPage;
