"use client";
import Image from "next/image";
import NavBar from "./components/navbar3";
import Footer from "./components/footer2";

export default function Home() {
  return (
    <div>
      <div id="homeContainer" className="h-180 mb-10 w-auto">
        <NavBar />
        <div className="md:mt-20 mt-80 flex flex-col justify-center items-center text-white">
          <h1 className="md:text-[60px] text-4xl font-bold text-center">
            Empowering Farmers with AI
          </h1>
          <h3 className="md:text-2xl text-md text-center">
            Do Smarter Farming through Predictive Analytics
          </h3>
          <a
            className="mt-10 border-2 border-white sm:p-5 p-3 rounded-xl bg-gray-900/60 md:text-lg text-md hover:bg-gray-900/70 font-bold"
            href=""
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector(".features");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h1 className="text-center font-bold text-4xl m-10 mb-5 features">
          Features
        </h1>

        <ul className="flex xl:flex-row flex-col justify-center items-center xl:justify-around xl:mb-20">
          {[
            {
              title: "Weather Forecasting",
              img: "/weather.png",
              link: "/weather_alerts",
            },
            {
              title: "Crop Recommendation",
              img: "/crop_recommendation.png",
              link: "/crop_recommendation",
            },
            {
              title: "Fertilizer Recommendation",
              img: "/fertilizer_rec.png",
              link: "/fertilizer_recommendation",
            },
          ].map((item) => (
            <li
              key={item.title}
              onClick={() => (window.location.href = item.link)}
              className="cursor-pointer relative shadow-2xl m-10 hover:scale-105 ease-in-out duration-500 h-auto xl:w-110 w-90 md:w-150 rounded-3xl overflow-hidden group"
            >
              <Image
                className="w-full h-100 object-cover"
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-3 text-center font-bold text-xl group-hover:bg-black/80 transition-all">
                {item.title}
              </div>
            </li>
          ))}
        </ul>

        <ul className="flex xl:flex-row flex-col justify-center items-center xl:justify-around xl:mb-20">
          {[
            {
              title: "Pest Detection",
              img: "/pest_detection1.png",
              link: "/pest_detection",
            },
            {
              title: "Market Price",
              img: "/market_price.png",
              link: "/market_price",
            },
            {
              title: "KrishiBot",
              img: "/chatbot.png",
              link: "/chatbot",
            }
          ].map((item) => (
            <li
              key={item.title}
              onClick={() => (window.location.href = item.link)}
              className="cursor-pointer relative shadow-2xl m-10 hover:scale-105 ease-in-out duration-500 h-auto xl:w-110 w-90 md:w-150 rounded-3xl overflow-hidden group"
            >
              <Image
                className="w-full h-100 object-cover"
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-3 text-center font-bold text-xl group-hover:bg-black/80 transition-all">
                {item.title}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
