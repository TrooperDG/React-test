import Jodit from "./components/Jodit";
import { useRef, useState } from "react";
import Mce from "./components/Mce";

function App() {
  const [date, setDate] = useState("2025-01-31T00:00:00.000+00:00");
  // const ref = useRef(null);
  console.log(date);

  // console.log(ref);

  return (
    <div>
      {/* <h1>heyy</h1>
      <Jodit placeholder={"naiga goo"} ref={ref} />
      <Mce /> */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
}

export default App;
