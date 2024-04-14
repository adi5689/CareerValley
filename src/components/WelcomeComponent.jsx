import React from 'react';

const WelcomeComponent = () => {
 return (
    <div className="font-anta mx-auto p-20 bg-[#8aaca4] text-white animate-gradient-x">
      <h1 className="text-5xl font-bold text-center mb-5">
        WELCOME TO THE CAREER VALLEY 
      </h1>
      <p className='text-xl font-bold mb-7 text-center'>YOUR GATEWAY TO A BRIGHT FUTURE!</p>
      <p className="text-lg text-center mb-8 px-8">
        Career Valley Is Your One-Stop Education Platform, Dedicated To Connecting Aspiring Students With Top Indian And Global Universities & B Schools. We Understand That Choosing The Right Educational Institution Is A Crucial Step Towards A Successful Career, And We're Here To Guide You Every Step Of The Way.
      </p>
    
      <h2 className="text-3xl font-bold text-center mb-8">
        Why Choose Career Valley
      </h2>
      <div className="grid grid-cols-2 gap-8">
        {[
          { img: 'https://i.postimg.cc/pXNVMfCF/Nice-Png-education-icon-png-1277462.png', title: 'Education Fairs & Open Houses', description: 'Attend our exclusive education fairs and open houses, where you can directly interact with representatives from universities and B-Schools. It\'s an excellent opportunity to gather comprehensive information, clarify doubts, and make informed decisions about your educational journey.' },
          { img: 'https://thecareervalley.com/wp-content/uploads/2023/07/ser-i1-6-1.png', title: 'Expert Guidance', description: 'Our team of experienced education consultants is committed to providing personalized guidance tailored to your unique needs. We understand that every student has different aspirations and requirements, and we\'re here to help you find the perfect educational fit.' },
          { img: 'https://thecareervalley.com/wp-content/uploads/2023/07/ser-i1-4-1.png', title: 'Wide Range Of Options', description: 'Career Valley offers a vast portfolio of Indian and global universities and B-Schools, ensuring that you have access to a diverse range of programs and specializations. We\'ll help you explore and choose the best educational institution that aligns with your goals.' },
          { img: 'https://thecareervalley.com/wp-content/uploads/2023/07/ser-h16-3.png', title: 'Unparalleled Support', description: 'We believe in comprehensive support throughout your educational journey. From initial consultations to application assistance and beyond, we\'ll be there to provide guidance, advice, and assistance at every step.' },
        ].map((card, index) => (
          <div key={index} className="bg-[white] text-black hover:bg-[#4c8474] hover:text-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
            <img src={card.img} alt='imaget' className='w-20'/>
            <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
 );
};

export default WelcomeComponent;
