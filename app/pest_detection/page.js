"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://gradio.s3-us-west-2.amazonaws.com/5.49.1/gradio.js";
    script.type = "module";
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);
  }, []);

  return (
    <div className="component-container w-[100%] min-h-screen pt-15 " id="component-weather">
      <NavBar />
      <div className="w-[70%] mx-auto my-20 min-h-[60%]">
        {loaded ? (
          <gradio-app src="https://soumyasuryan-disease-predictor.hf.space" />
        ) : (
          <div className="text-center">Loading chatbot...</div>
        )}
      </div>
      <Footer />
    </div>
  );
}
