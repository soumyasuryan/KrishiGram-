"use client";
import Navbar from "../components/navbar";
import Footer from "../components/footer2";

export default function AboutPage() {
  return (
    <div>
        
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800 pt-20">
        <Navbar></Navbar>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-green-700 mb-6">About KrishiGram</h1>

        <p className="text-lg leading-relaxed mb-8">
          Welcome to <strong>KrishiGram</strong> — your smart farming companion powered by Artificial Intelligence.
          We aim to empower farmers with <span className="font-semibold">data-driven, real-time agricultural insights</span> 
          . AgriSense bridges the gap between technology and traditional farming by offering personalized 
          crop recommendations, soil health guidance, weather alerts, pest and disease detection, and market price updates — 
          all in one easy-to-use platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <FeatureCard
            emoji="🌱"
            title="Crop & Fertilizer Advisory"
            desc="Get smart recommendations based on your soil and weather."
          />
          <FeatureCard
            emoji="🌤️"
            title="Weather & Insights"
            desc="Receive forecasts and alerts tailored to your region."
          />
          <FeatureCard
            emoji="🐛"
            title="Pest & Disease Detection"
            desc="Upload images to identify crop diseases instantly."
          />
          <FeatureCard
            emoji="💬"
            title="Multilingual Support"
            desc="Interact in your preferred language, text or voice."
          />
          <FeatureCard
            emoji="🎙️"
            title="Voice Assistance"
            desc="Easily access information through voice commands."
          />
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
          <p className="text-lg">
            To make advanced agricultural knowledge accessible to every farmer — regardless of language, literacy, or location — 
            helping them improve productivity, profitability, and sustainability.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Our Vision</h2>
          <p className="text-lg">
            A future where <strong>AI and farmers work hand in hand</strong>, using technology to ensure food security, 
            reduce waste, and protect our planet’s resources.
          </p>
        </section>
      </section>
    </main>
    <Footer></Footer>
    </div>
  );
}

function FeatureCard({ emoji, title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-all border border-green-100">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
