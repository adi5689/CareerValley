import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Banner = () => {
 const carouselImages = [
    'https://images.collegedunia.com/public/asset/img/homepage/banner/Shri1642233244.webp?mode=stretch',
    'https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232971.webp?mode=stretch',
    'https://images.collegedunia.com/public/asset/img/homepage/banner/Indian1642232499.webp?mode=stretch',
 ];

 return (
    <div className="relative banner-wrapper">
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop  interval={2500}>
        {carouselImages.map((image, index) => (
          <div key={index} className="h-[70vh] top-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
              <TypeAnimation
                 sequence={[
                    'Find over 10000+ Colleges',
                    1000,
                    'Find over 5000+ courses',
                    1000,
                    'Find over 100+ communities',
                    1000,
                 ]}
                 speed={50}
                 style={{ fontSize: '2em' }}
                 repeat={Infinity}
                 className='font-anta'
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
 );
};

export default Banner;
