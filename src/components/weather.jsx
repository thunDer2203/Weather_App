import React, { useRef, useState, useEffect } from "react";
import "./weather.css";
import { IoReloadCircle } from "react-icons/io5";
const weather = ({ message }) => {
  const [weather, setweather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('weatherHistory');
    return saved ? JSON.parse(saved) : [];
  });
  const [isMobile, setIsMobile] = useState(false);


  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const getWeather = async (city) => {
    setError(false);
    setLoading(true);
    setweather(null)
    
    await delay(2000);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=66a7334a859e638768fd1577aef1bba5&units=metric`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      let data = await response.json();
      setweather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      if (weather) {
      const newHistory = [weather, ...history.slice(0, 4)]; 
      setHistory(newHistory);
      localStorage.setItem('weatherHistory', JSON.stringify(newHistory));
    }
    }
    
  };

  useEffect(() => {
    getWeather(message);
    if (weather) {
      const newHistory = [weather, ...history.slice(0, 4)]; 
      setHistory(newHistory);
      localStorage.setItem('weatherHistory', JSON.stringify(newHistory));
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Initial check
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, [message]);

  return (
    <div className="body">
      <div className="container mx-auto rounded-2xl min-h-[450px] max-w-[1000px] text-center items-center mt-6 shadow">

      {loading && <div className="flex justify-center items-center h-32">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>}
    
      {error && (
        <h1 className="text-4xl font-[Open_Sans] text-black">Enter a Valid City</h1>
      )}
      
      
      {weather && <div> 
        <h1 className="text-4xl font-[Open_Sans] text-black flex justify-center" style={{ fontFamily: 'Inter, sans-serif' }}>Weather <button className="w-1 m-1 ml-2 cursor-pointer" onClick={()=>{getWeather(weather.name)}}><IoReloadCircle /></button></h1>
        <h2 className="text-3xl mt-3 font-semibold text-black">{weather.name}</h2> 
        <div className="info container  mx-auto max-w-[900px] flex justify-between mt-5">
          <h2 className="text-white small_container p-5 rounded-2xl">
            Temperature:{isMobile && <br />}{weather.main.temp}°C{" "}
          </h2>
          <h2 className="text-white small_container p-5 rounded-2xl">
            Weather Conditions: {isMobile && <br />}{weather.weather[0].main}
          </h2>
          <h2 className="text-white small_container  p-5 rounded-2xl">
            Humidity:{isMobile && <br />}{weather.main.humidity}%
          </h2>
          <h2 className="text-white small_container p-5 rounded-2xl">
            Wind Speed:{isMobile && <br />}{weather.wind.speed}
          </h2>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Image" />
          </div>
        </div>
}

{history.length > 0 && (
  <div className="mt-4 mx-auto">
  <h2 className="text-xl font-semibold mb-2 text-black">Previous Searches</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mx-auto">
    {history.map((item, idx) => (
      <div
        key={idx}
        className="bg-white/10 p-4 rounded-xl shadow-md text-left"
      >
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm capitalize">{item.weather[0].description}</p>
        <div className="flex items-center gap-2 mt-2">
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
            alt=""
            className="w-8 h-8"
          />
          <span className="text-lg font-medium">{item.main.temp}°C</span>
        </div>
      </div>
    ))}
  </div>
</div>
)}
      </div>

    </div>
      
);
};

export default weather;
