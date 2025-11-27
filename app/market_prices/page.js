"use client";
import { useState } from "react";
import NavBar from "../components/navbar2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function MarketPricePage() {
  const [commodity, setCommodity] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMarketData = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch("https://krishigrambackend.onrender.com/market_price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ commodity, location }),
      });

      if (!res.ok) throw new Error("Failed to fetch data");
      const result = await res.json();

      if (result.error) throw new Error(result.error);
      console.log("✅ API Response:", result);
      setData(result.data);
    } catch (err) {
      console.error("❌ Error fetching data:", err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // 👇 Your return statement was outside the component before — now it’s fixed
  return (
    <div className="flex pt-20 flex-col min-h-screen bg-gray-100 justify-center mx-auto component-container" id="component-weather">
      <Navbar></Navbar>
        <div className="md:w-200 shadow-2xl h-auto md:mx-auto rounded-xl mb-20 flex flex-col justify-center m-3 md:mt-10 bg-white px-8 pb-8" id="crop_rec_container">
      <NavBar />
      <main className="flex-grow flex flex-col items-center p-6">
        <h1 className="text-2xl mt-20 md:mt-0 md:text-4xl font-bold mb-6 text-green-700">
          🌾 Check Market Prices
        </h1>

        {/* Input Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg border border-green-300 mb-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Commodity
            </label>
            <input
              type="text"
              value={commodity}
              onChange={(e) => setCommodity(e.target.value)}
              placeholder="e.g., Wheat, Rice, Maize"
              className="w-full border border-gray-400 rounded-md p-2 focus:outline-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Palam, Ambala"
              className="w-full border border-gray-400 rounded-md p-2 focus:outline-green-500"
            />
          </div>

          <button
            onClick={fetchMarketData}
            disabled={!commodity || !location || loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md disabled:bg-gray-400"
          >
            {loading ? "Fetching..." : "Get Market Price"}
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Results */}
        {data && (
          <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border border-green-300">
            <h2 className="text-xl font-semibold mb-3 text-green-800">
              📊 {data.commodity || "—"} Market Update
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>📅 <strong>Date:</strong> {data.date || "—"}</p>
              <p>💰 <strong>Min Price:</strong> ₹{data.min_price || "—"} / quintal</p>
              <p>💰 <strong>Max Price:</strong> ₹{data.max_price || "—"} / quintal</p>
              <p>📈 <strong>Modal Price:</strong> ₹{data.modal_price || "—"} / quintal</p>
            </div>
            <p className="mt-4 text-green-700 font-medium">
              This should help you plan your buying or selling effectively! 🧑‍🌾
            </p>
          </div>
        )}
      </main>
      </div>
      <Footer />
    </div>
  );
}

