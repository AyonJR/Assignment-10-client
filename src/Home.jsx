import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import TouristSpot from "./TouristSpot";
import AboutUsSection from "./AboutUsSection";
import WhatWeOfferSection from "./WhatWeOfferSection";

const Home = () => {
    const spots = useLoaderData();
    const sixSpots = spots.slice(0, 6);

    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            {/* <div className="flex justify-end mr-5 mt-5">
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />
                    <span className="switch-button"></span>
                </label>
            </div> */}
          <div className="relative left-64 bottom-[50px]">
          <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} value="synthwave" className="toggle  switch theme-controller"/>
          </div>
            <div>
                <Slider></Slider>
            </div>

            <div className="mt-16">
                <h2 className="text-3xl flex justify-center font-semibold">Tourists spot</h2>
            </div>

            <div className="mt-8 gap-5 grid md:grid-cols-2 lg:grid-cols-3 lg:ml-10">
                {sixSpots.map((spot) => (
                    <TouristSpot key={spot._id} spot={spot}></TouristSpot>
                ))}
            </div>

            <div className="mt-20">
                <WhatWeOfferSection></WhatWeOfferSection>
            </div>

            <div className="mt-20">
                <AboutUsSection></AboutUsSection>
            </div>
        </div>
    );
};

export default Home;
