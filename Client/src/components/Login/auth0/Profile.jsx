import { useAuth0 } from "@auth0/auth0-react";

import React from "react";
import { BiZoomIn } from "react-icons/bi";
import { json } from "react-router-dom";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <article className="w-6">
        {/* {JSON.stringify(user)} */}

        {user?.picture && <img className=" mask mask-squircle" src={user.picture} />}
        <h2>{user?.name}</h2>

        {/* <ul>
          {Object.values(user).map((objVal, i) => (
            <li key={i}>{objVal}</li>
          ))}
        </ul> */}
      </article>
    )
  );
}

export default Profile;
