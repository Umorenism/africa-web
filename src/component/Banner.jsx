// import React, { useEffect, useState } from 'react';
// import banner1 from '../assets/polo2.jpg';
// import banner2 from '../assets/polo1.jpg';
// import banner3 from '../assets/polo4.jpg';

// const Banner = () => {
//   const banners = [banner1, banner2, banner3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//     const backgrounds = [
//     "from-pink-100 via-red-50 to-yellow-100",
//     "from-blue-100 via-teal-50 to-green-100",
//     "from-purple-100 via-indigo-50 to-blue-100"
//   ];

 

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % banners.length);
//     }, 4000);
//     return () => clearInterval(slider);
//   }, [banners.length]);

//   return (
//     <section className="w-full bg-gradient-to-br from-[#fef6f9] via-[#f0f9ff] to-[#f5fdf2] px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-10">
//   {/* Sliding Banner */}
//   <div className="w-full lg:w-1/2 overflow-hidden">
//     <img
//       src={banners[currentIndex]}
//       alt={`Design ${currentIndex + 1}`}
//       className="w-full h-[300px] sm:h-[400px] object-cover transition-all duration-700"
//     />
//   </div>

//   {/* Write-Up Section */}
//   <div className="w-full lg:w-1/2 text-center lg:text-left">
//     <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
//       Crafted Prints. Unmatched Style.
//     </h2>
//     <p className="text-gray-600 text-base sm:text-lg mb-6">
//       Discover high-quality custom printed clothing that blends creativity with comfort. 
//       From bold graphics to subtle statements, our designs are made to express your story.
//     </p>
//     <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
//       Explore Our Collection
//     </button>
//   </div>
// </section>

//   );
// };

// export default Banner;





import React, { useEffect, useState } from "react";
import banner1 from "../assets/polo2.jpg";
import banner2 from "../assets/polo1.jpg";
import banner3 from "../assets/polo4.jpg";

const Banner = () => {
  const banners = [banner1, banner2, banner3];

  const backgrounds = [
    "from-pink-100 via-yellow-500 to-yellow-100",
    "from-blue-400 via-teal-50 to-green-700",
    "from-purple-300 via-indigo-500 to-blue-500"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(slider);
  }, [banners.length]);

  return (
    <section
      className={`w-full bg-gradient-to-br ${backgrounds[currentIndex]} px-4 py-12 flex flex-col lg:flex-row items-center justify-center gap-10 transition-all duration-700`}
    >
      {/* Sliding Banner */}
      <div className="w-full lg:w-1/2 overflow-hidden">
        <img
          src={banners[currentIndex]}
          alt={`Design ${currentIndex + 1}`}
          className="w-full h-[300px] sm:h-[400px] object-cover transition-all duration-700"
        />
      </div>

      {/* Write-Up Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Crafted Prints. Unmatched Style.
        </h2>
        <p className="text-white text-base sm:text-lg mb-6">
          Discover high-quality custom printed clothing that blends creativity with comfort.
          From bold graphics to subtle statements, our designs are made to express your story.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Explore Our Collection
        </button>
      </div>
    </section>
  );
};

export default Banner;

