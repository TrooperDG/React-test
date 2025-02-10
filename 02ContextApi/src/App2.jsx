import React, { useContext } from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import UserData from "./components/UserData";

function App2() {
  return (
    <UserContextProvider>
      <Login />
      <UserData />
    </UserContextProvider>
  );
}

export default App2;
