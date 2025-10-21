"use client"
import Image from "next/image";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <div>
        <div id="homeContainer" className="h-180 mb-10 w-auto">
          <NavBar></NavBar>
          <div className="md:mt-20 mt-80 flex flex-col justify-center items-center text-white">
            <h1 className="md:text-[60px] text-4xl font-bold text-center">Empowering Farmers with AI</h1>
            <h3 className="md:text-2xl text-md text-center">Do Smarter Farming through predictive Analytics</h3>
            <a
              className="mt-10 border-2 border-white sm:p-5 p-3 rounded-xl bg-gray-900/60 md:text-lg text-md hover:bg-gray-900/70 font-bold"
              href=""
              onClick={e => {
                e.preventDefault();
                const section = document.querySelector('.features');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </a>

          </div>
        </div>
        <div>
          <h1 className="text-center font-bold text-4xl m-10 mb-5 features">Features</h1>
          <ul className="flex xl:flex-row flex-col justify-center items-center xl:justify-around xl:mb-20">
            <li className="xl:border-0 shadow-2xl pb-10 m-10 hover:scale-110 ease-in-out duration-500 h-auto xl:w-110 w-90 md:w-150 rounded-3xl smooth transition-all border-black  text-center flex flex-col items-center">
              <Image className="xl:mx-auto w-50" src="/weather_pred.svg" alt="Weather Forecasting" width={300} height={200} />
              <h2 className="text-xl font-bold">Weather Forecasting</h2>
              <p className="text-gray-600 mb-7 w-70 xl:w-90">Get current weather details and predictive weather insights for your local area helping farmers stay a step ahead.</p>
              <a className="p-3 bg-green-600 text-white rounded-xl text-xl mt-4" href="/weather_alerts">Use Now</a>
            </li>
            <li className="xl:border-0 shadow-2xl pb-10 m-10 hover:scale-110 ease-in-out duration-500 h-auto xl:w-110 w-90 md:w-150 rounded-3xl smooth transition-all border-black  text-center flex flex-col items-center">
              <Image className="xl:mx-auto w-50" src="/crop_rec.svg" alt="Crop Recommendation" width={300} height={200} />
              <h2 className="text-xl font-bold">Crop Recommendation</h2>
              <p className="text-gray-600 mb-7 w-70 xl:w-90">Give us details of your soil,your local climate.We will suggest the best suited crop for your lovely fields.</p>
              <a className="p-3 bg-green-600 text-white rounded-xl text-xl mt-4" href="/crop_recommendation">Use Now</a>
            </li>
            <li className="xl:border-0 shadow-2xl pb-10 m-10 hover:scale-110 ease-in-out duration-500 h-auto xl:w-110 w-90 md:w-150 rounded-3xl smooth transition-all border-black  text-center flex flex-col items-center">
              <Image className="xl:mx-auto w-50" src="/fertilizer_rec.svg" alt="Fertilizer Recommendation" width={300} height={200} />
              <h2 className="text-xl font-bold">Fertilizer Recommendation</h2>
              <p className="text-gray-600 mb-7 w-70 xl:w-90">We recommend the best suited fertilizer for your crop considering your local climatic conditions ensuring crop health.</p>
              <a className="p-3 bg-green-600 text-white rounded-xl text-xl mt-4" href="/fertilizer_recommendation">Use Now</a>
            </li>
          </ul>
          <ul className="flex xl:flex-row flex-col justify-center items-center xl:justify-around xl:w-280 m-auto">
            <li className="xl:border-0 shadow-2xl m-10 hover:scale-110 ease-in-out duration-500 h-auto flex xl:w-110 w-90 md:w-150 flex-col pb-10 rounded-3xl items-center smooth transition-all">
              <Image className="xl:mx-auto w-50" src="/pest_detection.svg" alt="Pest Detection" width={300} height={200} />
              <h2 className="text-xl font-bold">Pest Detection</h2>
              <p className="text-gray-600 mb-7 w-70 xl:w-90 text-center w-90">Upload the image of any pest or abnormality you see in your crop we will help you in detecting the problem.</p>
              <a className="p-3 bg-green-600 text-white rounded-xl text-xl mt-4" href="">Use Now</a>
            </li>
            <li className="xl:border-0 shadow-2xl m-10 hover:scale-110 ease-in-out duration-500 h-auto flex xl:w-110 w-90 md:w-150 flex-col pb-10 rounded-3xl items-center smooth transition-all">
              <Image className="xl:mx-auto w-50" src="/market_price1.svg" alt="Market Price" width={300} height={200} />
              <h2 className="text-xl font-bold">Market Price</h2>
              <p className="text-gray-600 mb-7 w-70 xl:w-90 text-center w-90">Farmer can know the current highest and lowest prices for their respective crops in their near by Mandi .</p>
              <a className="p-3 bg-green-600 text-white rounded-xl text-xl mt-4" href="">Use Now</a>
            </li>

          </ul>
        </div>
        <Footer></Footer>
      </div>
      
    </div>
  );
}
