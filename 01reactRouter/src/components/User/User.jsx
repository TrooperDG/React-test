import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const paramsData = useParams();
  // console.log(paramsData.user);
  return <div>User: {paramsData.user}</div>;
}

export default User;
