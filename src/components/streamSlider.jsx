import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const StreamSlider = ({ data }) => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
 };

 // Create a reference to the Slider component
 const sliderRef = React.useRef(null);

 // Function to go to the next slide
 const next = () => {
    sliderRef.current.slickNext();
 };
 
 // Function to go to the previous slide
 const previous = () => {
    sliderRef.current.slickPrev();
 };

 return (
    <div className='container mx-auto px-24 pt-20 font-anta relative'>
      <h1 className='text-2xl font-bold font-anta mb-4'>Explore your Stream options</h1>
      <div className="flex justify-between items-center mb-4 absolute top-1/2 left-0 right-0">
        <button onClick={previous} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={next} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-4 flex flex-col">
            <div className="max-w-sm p-5 rounded overflow-hidden shadow-lg flex flex-col">
              <div className='flex items-center'>
                <div className="w-32 rounded-[50%]" dangerouslySetInnerHTML={{ __html: item.svg }} />
                <div>
                 <div className="font-bold text-xl mb-2">{item.stream}</div>
                 <p className="text-gray-700 text-base">
                    <span className="font-semibold">{item.colleges} Colleges</span>
                 </p>
                </div>
              </div>
              
              <div className="px-6 py-4 flex-grow">
                <ul className="list-none">
                 {item.courses.map((course, idx) => (
                    <li key={idx} className="text-gray-700 text-sm">
                      <div className='border-b-2 border-[#235950]/30 pb-1 pt-2'>{course}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
 );
};

export default StreamSlider;
