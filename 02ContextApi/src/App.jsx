import { createContext, useState } from "react";

import "./App.css";
import CompA from "./components/CompA";

export const UserContext = createContext();

function App() {
  const [data, setData] = useState("kipu");

  return (
    <div className="box">
      <h1>hellow guyz</h1>
      <UserContext.Provider value={data}>
        <CompA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
