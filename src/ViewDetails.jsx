import { useLoaderData } from "react-router-dom";

const ViewDetails = () => { 

    const details = useLoaderData() ; 
    console.log(details)

    return (
        <div>
            <h2>view details</h2>
        </div>
    );
};

export default ViewDetails;