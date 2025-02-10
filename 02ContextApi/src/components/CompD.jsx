import React, { useContext } from "react";
import { UserContext } from "../App";

function CompD() {
  const userData = useContext(UserContext);
  console.log(userData);
  return (
    <div className="box">
      <h1>hellow guyz {userData}</h1>
    </div>
  );
}

export default CompD;
