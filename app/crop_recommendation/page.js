"use client"
import Image from "next/image";
import NavBar from "../components/navbar";
import Navbar from "../components/navbar2";
import Footer from "../components/footer";
import { useState } from "react";

export default function Home() {
    const [recommendation, setRecommendation] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();


        const form = event.target;
        const inputData = {
            nitrogen: form[0].value,
            phosphorus: form[1].value,
            potassium: form[2].value,
            temperature: form[3].value,
            humidity: form[4].value,
            pH: form[5].value,
            rainfall: form[6].value,
        };

        // Send POST request to Flask backend
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input: inputData }),
        });

        const result = await response.json();
        setRecommendation(result.prediction);
        console.log(result);

    };
    return (
        <div className="component-container w-[100%] min-h-screen pt-20" id="component-weather">
             <NavBar ></NavBar>
            <div id="" className=" pb-10 md:w-220 flex flex-col iteme-center justify-center mx-auto">
             
                <div id="crop_rec_container" className="md:w-200 shadow-2xl h-auto md:mx-auto rounded-xl mb-20 flex flex-col justify-center m-2 bg-white">
                    <Navbar title="Crop Recommendation"></Navbar>
                    
                    <form onSubmit={handleSubmit} className="flex justify-center flex-col">

                        <h1 className="mt-19 md:mt-3 md:text-3xl text-3xl md:text-[40px] font-bold text-center">Crop Recommendation</h1>
                        <h1 className="text-[30px] md:text-[25px] font-bold text-center md:text-left md:ml-10">Soil Nutrients</h1>
                        <div className="flex justify-around items-center ">
                            <div className="flex flex-col mt-5">     
                                <div className="md:w-100 ">
                                    <div className="flex ">
                                        <h2 className=" text-[20px] md:text-lg mr-4 py-2">Nitrogen (N) :</h2>
                                        <input type="text" className="text-center ml-auto border-b-3 w-20 focus:outline-none focus:ring-0" />
                                    </div>
                                    <div className="flex ">
                                        <h2 className=" text-[20px] md:text-lg mr-4 py-2">Phosphorus (P) :</h2>
                                        <input type="text" className="text-center ml-auto border-b-3 w-20 focus:outline-none focus:ring-0" />
                                    </div>
                                    <div className="flex ">
                                        <h2 className=" text-[20px] md:text-lg mr-4 py-2">Pottasium (K) :</h2>
                                        <input type="text" className="text-center ml-auto border-b-3 w-20 focus:outline-none focus:ring-0" />
                                    </div>

                                </div>

                            </div><div>
                                <img src="crop_rec_1.svg" className="h-20 md:h-30" alt="" />
                            </div>

                        </div>
                         <h1 className="text-[30px] md:text-[25px] font-bold text-center mt-10 md:text-left md:ml-10">Weather Condition</h1>
   
                        <div className="flex md:flex-row flex-col justify-around items-center">
                            <div>
                                <img src="/crop_rec_3.png" className="h-30" alt="" />
                            </div>
                            <div className="md:mt-6 flex justify-center flex-col items-center">
                               
                                <div className="w-auto mt-10">
                                    <div>
                                        <div className="flex border-4 border-b-0 p-3 md:w-100 mx-4">
                                            <h2 className=" text-[20px] md:text-lg mr-4">Temperature :</h2>
                                            <input type="text" className="text-center mr-9 border-b-3 w-20 focus:outline-none focus:ring-0 ml-auto" />
                                            <p>°C</p>
                                        </div>
                                        <div className="flex border-4 p-3 border-b-0 md:w-100 mx-4">
                                            <h2 className=" text-[20px] md:text-lg mr-4">Humidity :</h2>
                                            <input type="text" className="text-center mr-10 border-b-3 w-20 focus:outline-none focus:ring-0 ml-auto" />
                                            <p>%</p>
                                        </div>
                                        <div className="flex border-4 p-3 md:w-100 mx-4 border-b-0">
                                            <h2 className=" text-[20px] md:text-lg mr-4">pH :</h2>
                                            <input type="text" className="text-center mr-13 border-b-3 w-20 focus:outline-none focus:ring-0 ml-auto" />
                                            <p></p>
                                        </div>
                                        <div className="flex border-4 p-3 md:w-100 mx-4">
                                            <h2 className=" text-[20px] md:text-lg mr-4">Rainfall :</h2>
                                            <input type="text" className="text-center mr-6 border-b-3 w-20 focus:outline-none focus:ring-0 ml-auto" />
                                            <p>mm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="p-4 px-6 rounded-xl bg-blue-600 mx-auto text-white mt-10 ">Analyze</button>
                    </form>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl mt-10 mb-10">
                        <div className="md:flex">
                            <div className="p-8 flex flex-col justify-center">
                                <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                    Recommendation
                                </h1>
                                <p className="block mt-1 text-lg leading-tight font-medium text-black">
                                    {recommendation || "No recommendation yet"}
                                </p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        <Footer></Footer>
        </div>
    );
}