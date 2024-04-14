import React from "react";
import {
 FaFacebookF,
 FaTwitter,
 FaInstagram,
 FaLinkedinIn,
 FaPhone,
 FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
 return (
    <footer className="bg-[#8caeac] font-anta text-white p-4">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          <div className="rounded-md text-center">
            <h3 className="text-lg font-bold mb-2">Top Courses</h3>
            <ul className="grid grid-cols-2">
              <li className="cursor-pointer hover:text-[black]">B.Tech</li>
              <li className="cursor-pointer hover:text-[black]">B.Sc</li>
              <li className="cursor-pointer hover:text-[black]">B.Com</li>
              <li className="cursor-pointer hover:text-[black]">BBA</li>
              <li className="cursor-pointer hover:text-[black]">BCA</li>
              <li className="cursor-pointer hover:text-[black]">BA</li>
              <li className="cursor-pointer hover:text-[black]">M.B.A</li>
              <li className="cursor-pointer hover:text-[black]">M.Tech</li>
            </ul>
          </div>
          <div className="rounded-md text-center">
            <h3 className="text-lg font-bold mb-2">Top Streams</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="cursor-pointer hover:text-[black]">Engineering</li>
              <li className="cursor-pointer hover:text-[black]">Management</li>
              <li className="cursor-pointer hover:text-[black]">Commerce</li>
              <li className="cursor-pointer hover:text-[black]">Science</li>
              <li className="cursor-pointer hover:text-[black]">Arts</li>
            </ul>
          </div>
        
          <div className="rounded-md text-center">
            <h3 className="text-lg font-bold mb-2">Top Exams</h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="cursor-pointer hover:text-[black]">CAT</li>
              <li className="cursor-pointer hover:text-[black]">GATE</li>
              <li className="cursor-pointer hover:text-[black]">Jee-Main</li>
              <li className="cursor-pointer hover:text-[black]">NEET</li>
              <li className="cursor-pointer hover:text-[black]">XAT</li>
              <li className="cursor-pointer hover:text-[black]">CLAT</li>
              <li className="cursor-pointer hover:text-[black]">MAT</li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center mt-8 gap-x-10">
          <div className="flex flex-col items-center">
            <img
              src="https://thecareervalley.com/wp-content/uploads/2023/07/Career-Vallet-Logo.png"
              alt="Company Logo"
              className="h-10 w-auto mr-4"
            />
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="grid grid-cols-4 gap-x-2 mt-8">
            <div>
              <h3 className="text-lg font-bold mb-2">About Us</h3>
              <ul className="">
                <li className="cursor-pointer hover:text-[black]">Our Mission</li>
                <li className="cursor-pointer hover:text-[black]">Our Team</li>
                <li className="cursor-pointer hover:text-[black]">Our Story</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Legal</h3>
              <ul className="">
                <li className="cursor-pointer hover:text-[black]">Terms of Service</li>
                <li className="cursor-pointer hover:text-[black]">Privacy Policy</li>
                <li className="cursor-pointer hover:text-[black]">Cookie Policy</li>
              </ul>
            </div>
            <div>
            <h3 className="text-lg font-bold mb-2">Careers</h3>
            <ul className="">
              <li className="cursor-pointer hover:text-[black]">Current Openings</li>
              <li className="cursor-pointer hover:text-[black]">Work Culture</li>
              <li className="cursor-pointer hover:text-[black]">Join Us</li>
            </ul>
          </div>

          <div>
              <h3 className="text-lg font-bold mb-2">Contact</h3>
              <div>
                <ul className="">
                 <li className="">Email: info@example.com</li>
                 <li className="">Phone: +123 456 7890</li>
                 <li className="">Address: 123 Street, City, Country</li>
                </ul>
              </div>

              <div className="flex items-center space-x-8">
                <a href="#" className="text-white hover:text-[black] cursor-pointer">
                 <FaFacebookF />
                </a>
                <a href="#" className="text-white hover:text-[black] cursor-pointer">
                 <FaTwitter />
                </a>
                <a href="#" className="text-white hover:text-[black] cursor-pointer">
                 <FaInstagram />
                </a>
                <a href="#" className="text-white hover:text-[black] cursor-pointer">
                 <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
 );
};

export default Footer;
