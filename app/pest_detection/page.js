"use client";
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1️⃣ Add Gradio script
    const script = document.createElement("script");
    script.src = "https://gradio.s3-us-west-2.amazonaws.com/5.49.1/gradio.js";
    script.type = "module";
    script.onload = () => {
      // 2️⃣ Create gradio-app only after script loaded
      const app = document.createElement("gradio-app");
      app.src = "https://soumyasuryan-disease-predictor.hf.space";
      app.style.width = "100%";
      app.style.height = "600px"; // Adjust height as needed
      containerRef.current.appendChild(app);
      setLoading(false);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="component-container w-[100%] min-h-screen pt-15 " id="component-weather">
      <NavBar />
      <div className="w-[70%] mx-auto my-20 min-h-[60%]" ref={containerRef}>
        {loading && <div className="text-center text-xl">Loading chatbot...</div>}
      </div>
      <Footer />
    </div>
  );
}
