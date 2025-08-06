// export default function Customers() {
//   return (
//     <div className="bg-gray-200 text-gray-900 flex justify-center items-center min-h-[600px] px-4 py-12">
//       <div className="w-full max-w-[1200px]">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 px-2 md:px-0">
//           <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4 md:mb-0">
//             CUSTOMERS
//           </h1>
//           <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
//             Our Reviews
//           </button>
//         </div>

//         {/* Carousel */}
//         <div className="carousel carousel-center rounded-box  max-w-full p-4 space-x-4 overflow-x-auto scroll-smooth ">
//           {[
//             {
//               name: "Jane Doe",
//               review: "Absolutely love the quality and design. InkPrints nailed it!",
//               rating: 5,
//             },
//             {
//               name: "Michael B.",
//               review: "Great fit and durable material. Wore it to an event and got tons of compliments.",
//               rating: 4,
//             },
//             {
//               name: "Aisha K.",
//               review: "Fast delivery and the print was vibrant. Would definitely order again!",
//               rating: 5,
//             },
//             {
//               name: "Tolu F.",
//               review: "Nice packaging, responsive support, and clean stitching. Impressed!",
//               rating: 4,
//             },
//             {
//               name: "Kevin W.",
//               review: "Stylish and super comfy. Looks even better in person.",
//               rating: 5,
//             },
//           ].map((review, idx) => (
//             <div
//               key={idx}
//               className="carousel-item min-w-[280px] sm:min-w-[300px] bg-white rounded-[18px] p-5 flex flex-col justify-between shadow h-[200px]"
//             >
//               <div>
//                 <h3 className="font-bold text-lg mb-2">{review.name}</h3>
//                 <p className="text-sm text-gray-700 mb-4">{review.review}</p>
//               </div>
//               <div className="flex items-center gap-1 mt-auto">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     className={`w-5 h-5 ${
//                       i < review.rating ? "text-yellow-400" : "text-gray-300"
//                     }`}
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.81 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }







import React from "react";

export default function Customers() {
  const reviews = [
    {
      name: "Jane Doe",
      location: "New York, USA",
      date: "July 10, 2025",
      review: "Absolutely love the quality and design. InkPrints nailed it!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Michael B.",
      location: "Toronto, Canada",
      date: "June 25, 2025",
      review:
        "Great fit and durable material. Wore it to an event and got tons of compliments.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Aisha K.",
      location: "London, UK",
      date: "July 5, 2025",
      review:
        "Fast delivery and the print was vibrant. Would definitely order again!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Tolu F.",
      location: "Lagos, Nigeria",
      date: "July 1, 2025",
      review:
        "Nice packaging, responsive support, and clean stitching. Impressed!",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?img=17",
    },
    {
      name: "Kevin W.",
      location: "Melbourne, Australia",
      date: "June 30, 2025",
      review: "Stylish and super comfy. Looks even better in person.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const averageRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  const totalCustomers = reviews.length;

  return (
    <div className="bg-gray-200 text-gray-900 flex justify-center items-center min-h-[600px] px-4 py-12">
      <div className="w-full max-w-[1120px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-12 px-2 md:px-0">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center md:text-left mb-4 md:mb-0">
            CUSTOMERS
          </h1>
          <button className="bg-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
            Our Reviews
          </button>
        </div>

        <hr />

        {/* Customer Info Section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 mb-4 gap-4 px-2">
          <div>
            <h2 className="text-xl font-semibold">What Our Customers Say</h2>
            <p className="text-gray-600 mt-1 text-sm max-w-xl">
              We’re proud to serve thousands of happy customers across the globe.
              Here’s what a few of them had to say about their experience with InkPrints.
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end text-sm text-gray-700">
            <p>
              <span className="font-semibold">Average Rating:</span> ⭐ {averageRating}/5
            </p>
            <p>
              <span className="font-semibold">Total Customers:</span> {totalCustomers}
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel carousel-center rounded-box max-w-full p-4 space-x-4 overflow-x-auto scroll-smooth">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="carousel-item min-w-[280px] sm:min-w-[300px] bg-white rounded-[18px] p-5 flex flex-col justify-between shadow h-[200px] sm:h-auto"
            >
              {/* Top - Avatar + Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h3 className="font-bold text-md">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <p className="text-xs text-gray-400">{review.date}</p>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-700 mb-4 line-clamp-4">
                “{review.review}”
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-auto">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.81 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

