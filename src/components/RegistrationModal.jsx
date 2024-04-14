import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FiX, FiUser, FiPhone, FiMail, FiMapPin, FiBookOpen, FiKey } from 'react-icons/fi';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const RegistrationModal = () => {
 const [modalIsOpen, setModalIsOpen] = useState(false);
 const [formType, setFormType] = useState('register'); // State to track the form type

 useEffect(() => {
    const timer = setTimeout(() => {
      setModalIsOpen(true);
    }, 9000); // 9 seconds delay
    return () => clearTimeout(timer);
 }, []);

 const toggleFormType = () => {
   setFormType(formType === 'register' ? 'login' : 'register');
 };

 return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      contentLabel="Registration Modal"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2 className='font-anta text-[24px]'>{formType === 'register' ? 'Register Now!' : 'Login'}</h2>
        <button onClick={() => setModalIsOpen(false)}>
          <FiX />
        </button>
      </div>
      <div className="modal-body">
        {formType === 'register' ? (
          <form className='flex flex-col space-y-4'>
            {/* Registration form fields */}
            <label className="flex items-center space-x-2">
              <FiUser />
              <input type="text" name="name" placeholder='Full Name.' className="border-b-2 border-[#235950] p-2 w-full placeholder-font-anta"  />
            </label>
            <label className="flex items-center space-x-2">
              <FiPhone />
              <input type="number" name="number" placeholder='Mobile Number.' className="border-b-2 border-[#235950] p-2 w-full" />
            </label>
            <label className="flex items-center space-x-2">
              <FiMail />
              <input type="email" name="email" placeholder='Email Address.' className="border-b-2 border-[#235950] p-2 w-full" />
            </label>
            <label className="flex items-center space-x-2">
              <FiKey />
              <input type="password" name="password" placeholder='Enter Your Password.' className="border-b-2 border-[#235950] p-2 w-full" />
            </label>
            <label className="flex items-center space-x-2">
              <FiMapPin />
              <input type="text" name="city" placeholder='City You Live In.' className="border-b-2 border-[#235950] p-2 w-full" />
            </label>
            <label className="flex items-center space-x-2">
              <FiBookOpen />
              <input type="text" name="course" placeholder='Course Interested In.' className="border-b-2 border-[#235950] p-2 w-full" />
            </label>
            <button type="submit" className="bg-[#235950] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </form>
        ) : (
          <form className='flex flex-col space-y-4'>
            {/* Login form fields */}
            <label className="flex items-center space-x-2">
              <FiMail />
              <input type="email" name="email" placeholder='Email Address.' className="border-b-2 border-[#235950] p-2 w-full" />
            </label>
            <label className="flex items-center space-x-2">
            <FiKey />
              <input type="password" name="password" placeholder='Enter Your Password.' className="border-b-2 border-[#235950] rounded-md p-2 w-full" />
            </label>
            <button type="submit" className="bg-[#235950] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </form>
        )}
        <div className="text-center mt-4">
          {formType === 'register' ? (
            <p>Already a user? <span onClick={toggleFormType} className="cursor-pointer text-[#235950] font-anta">Login</span>!</p>
          ) : (
            <p>New here? <span onClick={toggleFormType} className="cursor-pointer text-[#235950] font-anta">Register</span>!</p>
          )}
        </div>
      </div>
    </Modal>
 );
};

export default RegistrationModal;
