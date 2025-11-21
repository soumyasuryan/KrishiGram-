"use client"
import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Script from "next/script";
import { useState } from "react";

export default function Home() {



    return (
        <div className="component-container w-[100%] min-h-screen pt-15 " id="component-weather">
            <div>
                <NavBar></NavBar>
            </div>

            <div className="w-[70%] mx-auto my-20 min-h-[60%]">
                <Script
                    type="module"
                    src="https://gradio.s3-us-west-2.amazonaws.com/5.49.1/gradio.js"
                ></Script>

                <gradio-app src="https://soumyasuryan-disease-predictor.hf.space"></gradio-app>

            </div>

            <Footer></Footer>
        </div>
    );
}