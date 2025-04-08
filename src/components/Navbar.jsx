import React, { useRef, useState, useEffect } from "react";
import './weather.css'
const Navbar = ({triggerFunction}) => {
   
  const [first, setfirst] = useState("")
  
  const sendData = () => {
    triggerFunction(first);
    setfirst("");
  };
 
  const handleChange = (e) => {
    setfirst(e.target.value);
  };
  return (
    <nav className="bg-slate-900 p-3 items-center rounded-b-lg">
      <div className="flex  justify-between max-w-[1000px]  mx-auto">
        <div className="text-white font-bold text-xl">getWeath</div>
        <div className="text-white mr-3">
          <a href="#" className="mr-3">
            Home
          </a>
          <input
            type="text"
            className="bg-slate-300 rounded-2xl p-1 px-3 min-w-50 text-blue-800"
            value={first}
            onChange={handleChange}
            placeholder="Enter city"
            name="city"
            
          />
          <button onClick={sendData} className="cursor-pointer bg-cyan-800 p-1 ml-3 rounded-2xl w-20">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
