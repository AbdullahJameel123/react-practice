import { useParams } from "react-router-dom";

function UserDetails() {

    const params = useParams();

    return (
      <div>
        <h2>User Details</h2>
        <p>
          You selected user with ID: <b>{params.id} </b>
        </p>
      </div>
    );

}
export default UserDetails;