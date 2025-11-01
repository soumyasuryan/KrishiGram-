"use client";
import Image from "next/image";
import NavBar from "../components/navbar2";
import { useState } from "react";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLocationSubmit = async (event) => {
    event.preventDefault();
    if (!location.trim()) {
      setError("Please enter a location.");
      setWeatherData(null);
      return;
    }
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const response = await fetch(
        `http://localhost:8080/weather?city=${encodeURIComponent(location)}`
      );
      console.log(response);
      if (!response.ok) throw new Error("Failed to fetch weather data");
      const data = await response.json();

      // Optionally validate data structure here
      if (!data.current || typeof data.current.temperature !== "number") {
        throw new Error("Invalid location try again!!!");
      }

      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeLocation = () => {
    setWeatherData(null);
    setLocation("");
    setError(null);
  };

  return (
    <div className="component-container w-[100%] pb-50">
      <div className="pb-10 md:w-220 flex flex-col items-center justify-center md:mx-auto">
        <div
          id="crop_rec_container"
          className="md:w-[90%] w-[96%] md:w-170 xl:w-200 shadow-2xl h-auto md:mx-auto rounded-xl mb-20 m-2 flex flex-col justify-center md:mt-10 min-h-100 bg-white pb-20"
        >
          <NavBar />

          {!weatherData && !error && (
            <form
              onSubmit={handleLocationSubmit}
              className="flex flex-col items-center md:my-6 mt-20"
            >
              <input
                type="text"
                value={location}
                placeholder="Enter location"
                onChange={(e) => setLocation(e.target.value)}
                className="border rounded p-2 w-60 mb-4 text-center text-lg"
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 transition duration-200"
                disabled={loading}
              >
                {loading ? "Loading..." : "Get Weather Alerts"}
              </button>
            </form>
          )}

          {error && (
            <div className="text-center mt-4">
              <p className="text-red-600 font-semibold">{error}</p>
              <button
                onClick={handleChangeLocation}
                className="bg-gray-600 text-white rounded px-6 py-2 hover:bg-gray-700 transition duration-200 mt-4"
              >
                Change Location
              </button>
            </div>
          )}

          {weatherData ? (
            <div>
              <h1 className="mt-19 md:mt-3 text-xl md:text-3xl font-bold text-center ">
                Weather Alerts for {location}
              </h1>
              <div className="flex justify-center items-center md:justify-around mt-4 flex-col">
                <div className="flex flex-col md:ml-10 mx-auto">
                  <h1 className="text-[20px] ml-10 md:ml-0">Now</h1>
                  <div className="md:w-100 ">
                    <div className="flex items-center px-10 md:flex-row justify-center">
                      <div className="flex justify-start ml-5 ">
                        <h1 className="text-[100px] font-bold m-0 p-0 mt-[-30px]">
                          {weatherData?.current?.temperature != null
                            ? weatherData.current.temperature.toFixed(1)
                            : "--"}
                        </h1>
                        <span className="text-xl font-bold">°C</span>
                      </div>
                      <img
                        src="/crop_rec_3.png"
                        className="h-30"
                        alt="weather icon"
                      />
                    </div>
                    <div className="flex justify-around flex-col md:flex-row items-center justify-center mx-auto">
                      <h1 className="text-xl font-bold ">
                        Conditions: {weatherData.current.condition}
                      </h1>
                      <h1 className="text-xl font-bold ">
                        Humidity: {weatherData.current.humidity}%
                      </h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-auto flex flex-col justify-center items-center">
                    <h1 className="text-[60px] font-bold">Alerts:</h1>
                    <div className="text-xl text-center mx-10">
                      {Array.isArray(weatherData?.current?.alerts) &&
                      weatherData.current.alerts.length > 0 ? (
                        weatherData.current.alerts.map((alert, idx) => (
                          <p key={idx}>{alert}</p>
                        ))
                      ) : (
                        <p>No alerts.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl font-bold md:mx-20 text-center mt-10">Predictive Insights</h1>
              <div className="flex flex-col gap-6 md:mx-20 mx-10 mt-6">
                {weatherData.forecast.map((forecastMsg, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-blue-300 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    <p className="text-blue-900 font-semibold text-lg mb-2">
                      {forecastMsg.replace(/Name: \d+, dtype: object:/g, "").trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            !loading &&
            !error && (
              <div className="text-center mt-6">
                <p className="text-lg font-semibold">
                  Enter a location above to see weather alerts.
                </p>
              </div>
            )
          )}

          {(weatherData || error) && (
            <div className="flex justify-center mt-4">
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

