import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Share from "./Share";
import ShareModal from "./ShareModal";
import { FaShare } from "react-icons/fa";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-bold">{"new post"}</h2>
        <p>{"learn js with us"}</p>

        {/* Share Button */}
        <button
          onClick={() => setShowShare(true)}
          className="flex items-center mt-2 text-blue-500 hover:text-blue-700"
        >
          <FaShare className="mr-2" /> Share
        </button>

        {/* Share Modal */}
        {showShare && (
          <ShareModal
            url={window.location.href}
            title={"new post"}
            onClose={() => setShowShare(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
