import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function UserData() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1> Name: {user ? user : "no  user availabel"}</h1>
    </div>
  );
}

export default UserData;
