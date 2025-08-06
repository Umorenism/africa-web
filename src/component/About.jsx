

import { motion } from 'framer-motion';
import pic from '../assets/iphone.svg';
import bgdot from '../assets/dot.svg';
import feature1 from '../assets/route-02.svg';
import feature2 from '../assets/calendar-03.svg';
import feature3 from '../assets/trolley-02.svg';

const features = [
  {
    img: feature2,
    text: 'On demand handyman services',
  },
  {
    img: feature1,
    text: 'Delivery and tracking history',
  },
  {
    img: feature3,
    text: 'Shop at any registered store at your convenience',
  },
];

const AboutUs = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="min-h-[626px] bg-[#EFF0F6] flex justify-center items-center p-3"
  >
    <div className="container flex flex-col  justify-center items-center mx-auto py-16 sm:mt-[150px]">
      <img src={bgdot} alt="" />
      <div className="bg-[#1F2336] flex flex-col md:flex-row md:justify-around md:gap-20 items-center p-5 md:p-10 rounded-[30px] md:rounded-[60px] min-h-[300px] w-full max-w-[1260px] relative">
        {/* About Us Text */}
        <div className="max-w-sm text-white text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl font-bold mb-3">About Us</h1>
          <p className="text-xs md:text-sm mb-4">
            At RideCart, we believe in making life simpler. Whether you need a ride, a delivery, shopping assistance, or an errand runner, 
            we bring speed, efficiency, and reliability into one seamless platform.
          </p>
          <button className="bg-[#EB203E] text-white rounded-[11.18px] h-9 px-4 text-xs md:text-sm hover:bg-red-600 transition">
            Contact us
          </button>
        </div>

        {/* Phone Image */}
        <div className="order-1 md:order-none">
          <img
            src={pic}
            alt="Phone"
            className="relative w-[200px] mt-5 sm:mt-0 md:w-auto md:absolute md:left-[490px] md:bottom-24 mx-auto"
          />
        </div>

        {/* Features List */}
        <div className="max-w-[400px] hidden sm:block text-white space-y-8 sm:space-y-4 text-center md:text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 text-xs md:text-base ${
                idx === 2 ? 'max-w-[280px]' : 'max-w-[200px]'
              } mx-auto md:mx-0`}
            >
              <img src={feature.img} alt={`feature-${idx}`} className="w-6 h-6 object-contain flex-shrink-0" />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default AboutUs;