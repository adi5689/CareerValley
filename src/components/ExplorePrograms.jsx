import React, { useState } from "react";

const ExplorePrograms = () => {
 const [activeTab, setActiveTab] = useState("B.Tech");

 const tabs = [
    "B.Tech",
    "B.Sc",
    "B.Com",
    "BBA",
    "BCA",
    "BA",
    "M.B.A",
    "M.Tech",
 ];

 const handleTabClick = (tab) => {
    setActiveTab(tab);
 };

 const getCardsForTab = (tab) => {
    // Example image URLs for each card. Replace these with your actual image URLs.
    const images = {
      "Ranking": "https://i.postimg.cc/D0PvD2vj/ranking.png",
      "Find Colleges": "https://i.postimg.cc/Sx8TpJFx/find-colleges.png",
      "Course Finder": "https://i.postimg.cc/9M41JMp2/coursefinder.png",
      "Exams": "https://i.postimg.cc/vTh1n7VZ/Exams.png",
      "College Predictor": "https://i.postimg.cc/x1M2Ff6K/collegepredictor.png",
      "Compare Colleges": "https://i.postimg.cc/GmdCV0VV/compare-Colleges.png",
    };

    switch (tab) {
      case "B.Tech":
      case "B.Sc":
      case "B.Com":
      case "BBA":
      case "BCA":
      case "BA":
      case "M.B.A":
      case "M.Tech":
        return Object.keys(images).map(title => ({ title, image: images[title], tab }));
      default:
        return [];
    }
 };

 return (
    <div className="container mx-auto p-24">
      <h2 className="text-2xl font-bold font-anta mb-4">Explore Programs</h2>
      <div className="flex space-x-4 mb-4 font-anta">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-[#235950] text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {getCardsForTab(activeTab).map((card, index) => (
          <div key={index} className="bg-white p-4 rounded shadow flex">
            <div>
              <h3 className="text-xl font-bold mb-2 font-anta">{card.title}</h3>
              <p className="font-anta">Dummy content for {card.title} under the {card.tab} tab.</p>
            </div>
            <div>
              <img src={card.image} alt={card.title} className="w-full h-auto"/>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default ExplorePrograms;
