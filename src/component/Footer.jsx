import React from 'react';
import logo from '../assets/ridecartlogo.svg'; // Replace with InkPrints logo
import ins from '../assets/skill-icons_instagram.svg';
import x from '../assets/line-md_twitter-x.svg';
import f from '../assets/devicon_facebook.svg';
import { FaAt } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-[#0a0a0a] text-white flex justify-center items-center px-6 pt-16 pb-8 relative overflow-hidden">
      
      {/* Rainbow Line Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 animate-pulse" />

      <div className="container max-w-[1248px] w-full z-10">
        
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
          {/* <img src={logo} alt="InkPrints Logo" className="h-10 object-contain" /> */}
          <h1>INKPRINT</h1>

          <div className="flex items-center gap-4">
            <img src={ins} alt="Instagram" className="h-6 w-6 hover:scale-110 transition" />
            <img src={x} alt="Twitter" className="h-6 w-6 hover:scale-110 transition" />
            <img src={f} alt="Facebook" className="h-6 w-6 hover:scale-110 transition" />
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Link Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm sm:text-base text-gray-300">
          <div>
            <h2 className="text-white font-semibold mb-3">About InkPrints</h2>
            <ul className="space-y-1">
              <li>Our Story</li>
              <li>Meet the Team</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-3">Shop</h2>
            <ul className="space-y-1">
              <li>Custom T-Shirts</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Corporate Branding</li>
              <li>Design Services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-white font-semibold mb-3">Support</h2>
            <ul className="space-y-1">
              <li>FAQs</li>
              <li>Returns & Exchanges</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mt-8" />

        {/* Copyright */}
        <div className="text-center mt-4 text-sm text-gray-400 flex items-center justify-center gap-2">
          <FaAt className="text-gray-500" />
          2025 InkPrints. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
