import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [theme, setTheme] = useState("light");
  function darkTheme() {
    setTheme("dark");
  }
  function lightTheme() {
    setTheme("light");
  }

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContextProvider value={{ theme, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
