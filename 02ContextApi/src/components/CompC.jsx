import React, { useContext } from "react";
import CompD from "./CompD";
import { UserContext } from "../App";

function CompC() {
  const userData = useContext(UserContext);
  return (
    <div className="box">
      <h1>hellow guyz {userData}</h1>
      <CompD />
    </div>
  );
}

export default CompC;
