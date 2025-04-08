import { createContext, useContext,useState } from "react";
import "./App.css";
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import Navbar from "./components/Navbar.jsx";
import Weather from "./components/weather.jsx";

function App() {

  const [message, setMessage] = useState("");

  const handleDataFromA = (data) => {
    setMessage(data);
    // You can trigger logic here or pass to SiblingB via a ref or state
  };
  return (
   
    <div className="body min-h-full w-full">
      <Navbar triggerFunction={handleDataFromA} />
      <Weather message={message} />
      </div>
  );
}

export default App;
