// import React, { useEffect, useState } from 'react';
// import pic1 from '../assets/polo3.jpg';
// import pic2 from '../assets/polo5.jpg';
// import pic3 from '../assets/polo1.jpg';

// export default function Services() {
//   const images = [pic1, pic2, pic3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prev => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-white text-black relative flex justify-center items-center min-h-[600px] px-6 py-10">
      
      

//       <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-[1200px] w-full">
        
//         {/* Description */}
//         <div className="w-full lg:max-w-[30%] text-center lg:text-left">
//           <h1 className="font-bold text-xl mb-4">Description</h1>
//           <p className="text-sm">
//             At InkPrints, we bring your style to life with
//              bold, high-quality custom prints. Whether it’s a minimalist logo, 
//              vibrant graphic, or a full-on artistic expression, our designs fuse comfort with creativity — perfect for tees,
//              polos, hoodies, and more. Wear your identity. Print your story.
//           </p>
//         </div>

//         {/* Details */}
//         <div className="w-full lg:max-w-[40%]">
//           <h1 className="font-bold text-xl">Details</h1>
//           <hr className="mt-2" />

//           {/* Detail Row */}
//           {[
//             { label: 'SIZE', bigIndex: 1 },
//             { label: 'DURABILITY', bigIndex: 3 },
//             { label: 'Rate', bigIndex: 4 },
//             { label: 'Comfortability', bigIndex: 4 },
//           ].map((item, idx) => (
//             <div key={idx} className="mt-4">
//               <div className="flex items-center gap-6">
//                 <h2 className="text-[16px] font-semibold">{item.label}</h2>
//                 <div className="flex items-center gap-2">
//                   {[0, 1, 2, 3, 4].map((dot, i) => (
//                     <div
//                       key={i}
//                       className={`${
//                         i === item.bigIndex ? 'h-5 w-5' : 'h-3 w-3'
//                       } bg-green-600 rounded-full flex justify-center items-center`}
//                     >
//                       <div className="h-1 w-1 bg-white rounded-full" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <hr className="mt-2" />
//             </div>
//           ))}
//         </div>

//         {/* Perfect Designs with image */}
//         <div className="w-full lg:max-w-[30%] text-center lg:text-left">
//           <h1 className="font-bold text-xl mb-4">PERFECT DESIGNS</h1>
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <div className="w-[200px] h-[200px]">
//               <img
//                 src={images[currentIndex]}
//                 alt="Showcase"
//                 className="w-full h-full object-contain rounded-lg shadow-lg"
//               />
//             </div>
//             <div className="text-sm">Creative & timeless. Styled for everyone.</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import pic1 from '../assets/polo3.jpg';
import pic2 from '../assets/polo5.jpg';
import pic3 from '../assets/polo1.jpg';

export default function Services() {
  const images = [pic1, pic2, pic3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black relative flex justify-center items-center min-h-[600px] px-6 py-16">
      <div className="max-w-[1120px] w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-start animate-fade-in">
        
        {/* Description */}
        <div className="w-full lg:max-w-[30%] text-center lg:text-left space-y-4 animate-slide-in-left">
          <h1 className="font-bold text-3xl text-green-700">Your Style, Your Identity</h1>
          <p className="text-gray-700 text-base leading-relaxed">
            At <span className="font-semibold text-black">InkPrints</span>, we bring your style to life with bold, high-quality custom prints.
            Whether it’s a minimalist logo, vibrant graphic, or a full-on artistic expression,
            our designs fuse comfort with creativity — perfect for tees, polos, hoodies, and more.
          </p>
        </div>

        {/* Details */}
        <div className="w-full lg:max-w-[40%] animate-fade-in">
          <h2 className="font-bold text-2xl text-green-700 mb-2">Our Standards</h2>
          <hr className="mb-4 border-green-500" />
          {[
            { label: 'SIZE', bigIndex: 1 },
            { label: 'DURABILITY', bigIndex: 3 },
            { label: 'Rate', bigIndex: 4 },
            { label: 'Comfortability', bigIndex: 4 },
          ].map((item, idx) => (
            <div key={idx} className="mt-4">
              <div className="flex items-center justify-between gap-6">
                <h3 className="text-sm font-semibold text-gray-800">{item.label}</h3>
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3, 4].map((dot, i) => (
                    <div
                      key={i}
                      className={`transition-all duration-300 ${
                        i === item.bigIndex ? 'h-5 w-5' : 'h-3 w-3'
                      } bg-green-600 rounded-full flex justify-center items-center`}
                    >
                      <div className="h-1 w-1 bg-white rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
              <hr className="mt-2 border-gray-300" />
            </div>
          ))}
        </div>

        {/* Perfect Designs with image */}
        <div className="w-full lg:max-w-[30%] text-center lg:text-left space-y-4 animate-slide-in-right">
          <h2 className="font-bold text-2xl text-green-700">Perfect Designs</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-[200px] h-[200px] transition duration-700 ease-in-out transform hover:scale-105">
              <img
                src={images[currentIndex]}
                alt="Showcase"
                className="w-full h-full object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="text-gray-700 text-sm">
              Creative & timeless. Styled for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
