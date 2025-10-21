"use client";
import NavBar from "../components/navbar2";
import { useState } from "react";

export default function Home() {
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Soil and crop options must match model LabelEncoder training inputs exactly
  const soilTypes = ["Loamy", "Sandy", "Black", "Red", "Clayey"];
 const cropTypes = ["rice", "Wheat", "Tobacco", "Sugarcane", "Pulses", "pomegranate", "Paddy",
                   "Oil seeds", "Millets", "Maize", "Ground Nuts", "Cotton", "coffee",
                   "watermelon", "Barley", "kidneybeans", "orange"];


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendation("");

    const form = event.target;
    const inputData = {
      nitrogen: Number(form.nitrogen.value),
      phosphorus: Number(form.phosphorus.value),
      potassium: Number(form.potassium.value),
      temperature: Number(form.temperature.value),
      humidity: Number(form.humidity.value),
      rainfall: Number(form.rainfall.value),
      soil_type: form.soil_type.value,
      crop_type: form.crop_type.value,
    };

    try {
      const response = await fetch("http://localhost:5000/predictFert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: inputData }),
      });

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const result = await response.json();
      setRecommendation(result.prediction);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="component-container w-[100%] min-h-screen" id="component-weather">
      <div className="pb-10 w-220 flex flex-col items-center justify-center mx-auto">
        <div
          id="crop_rec_container"
          className="w-200 shadow-2xl h-auto mx-auto rounded-xl mb-20 flex flex-col justify-center mt-10 bg-white px-8 pb-8"
        >
          <NavBar />
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold text-center ">Fertilizer Recommendation</h1>

            <div>
              <h2 className="font-semibold text-xl mb-2">Soil Nutrients</h2>
              <div className="flex space-x-6">
                <div>
                  <label htmlFor="nitrogen">Nitrogen (N):</label>
                  <input
                    id="nitrogen"
                    name="nitrogen"
                    type="number"
                    required
                    className="border-b-2 focus:outline-none w-24 text-center"
                    min="0"
                  />
                </div>
                <div>
                  <label htmlFor="phosphorus">Phosphorus (P):</label>
                  <input
                    id="phosphorus"
                    name="phosphorus"
                    type="number"
                    required
                    className="border-b-2 focus:outline-none w-24 text-center"
                    min="0"
                  />
                </div>
                <div>
                  <label htmlFor="potassium">Potassium (K):</label>
                  <input
                    id="potassium"
                    name="potassium"
                    type="number"
                    required
                    className="border-b-2 focus:outline-none w-24 text-center"
                    min="0"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-xl mb-2">Weather Conditions</h2>
              <div className="flex space-x-6 items-center">
                <div>
                  <label htmlFor="temperature">Temperature (°C):</label>
                  <input
                    id="temperature"
                    name="temperature"
                    type="number"
                    step="0.1"
                    required
                    className="focus:outline-none border-b-2 w-24 text-center"
                  />
                </div>
                <div>
                  <label htmlFor="humidity">Humidity (%):</label>
                  <input
                    id="humidity"
                    name="humidity"
                    type="number"
                    step="0.1"
                    required
                    className="focus:outline-none border-b-2 w-24 text-center"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label htmlFor="rainfall">Rainfall (mm):</label>
                  <input
                    id="rainfall"
                    name="rainfall"
                    type="number"
                    step="0.1"
                    required
                    className="focus:outline-none border-b-2 w-24 text-center"
                    min="0"
                  />
                </div>
              </div>
            </div>
           <div className="flex justify-between">
            <div className="w-80 flex flex-col items-center justify-center">
              <label htmlFor="soil_type" className="font-semibold text-xl mb-1 block">
                Soil Type
              </label>
              <select
                id="soil_type"
                name="soil_type"
                required
                className="border rounded p-2 w-full max-w-xs"
                defaultValue=""
              >
                <option value="" disabled>
                  Select soil type
                </option>
                {soilTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-80 flex flex-col items-center justify-center">
              <label htmlFor="crop_type" className="font-semibold text-xl mb-1 block">
                Crop Type
              </label>
              <select
                id="crop_type"
                name="crop_type"
                required
                className="border rounded p-2 w-full max-w-xs"
                defaultValue=""
              >
                <option value="" disabled>
                  Select crop type
                </option>
                {cropTypes.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white rounded px-6 py-3 hover:bg-blue-700 transition duration-200"
            >
              {loading ? "Analyzing..." : "Analyze"}
            </button>
          </form>

          {error && (
            <p className="text-red-600 font-semibold mt-6 text-center">{error}</p>
          )}

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl mt-10 mb-10 p-6">
            <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-center">
              Recommendation
            </h1>
            <p className="block mt-1 text-lg leading-tight font-medium text-black text-center">
              {recommendation || "No recommendation yet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
