


import React, { useState } from "react";

// Example product images (replace with your actual assets)
import pic1 from "../assets/polo1.jpg";
import pic2 from "../assets/polo2.jpg";
import pic3 from "../assets/polo3.jpg";
import pic4 from "../assets/polo4.jpg";
import pic5 from "../assets/polo5.jpg";
import pic6 from "../assets/polo6.jpg";
import pic7 from "../assets/polo7.jpg";
import pic8 from "../assets/polo8.jpg";
import pic9 from "../assets/polo9.jpg";
import pic10 from "../assets/polo10.jpg";

const categories = ["All", "T-Shirts", "Hoodies", "Caps", "Polos", "Sportswear"];

// Example mapping for categories
const designs = [
  { img: pic1, category: "Polos" },
  { img: pic2, category: "Polos" },
  { img: pic3, category: "T-Shirts" },
  { img: pic4, category: "T-Shirts" },
  { img: pic5, category: "Hoodies" },
  { img: pic6, category: "Hoodies" },
  { img: pic7, category: "Caps" },
  { img: pic8, category: "Caps" },
  { img: pic9, category: "Sportswear" },
  { img: pic10, category: "Sportswear" },
];

export default function ShopBy() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDesigns =
    selectedCategory === "All"
      ? designs
      : designs.filter((d) => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 p-4 lg:p-8">
      <div className="max-w-[1120px] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Shop By</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block w-1/4">
            <ul className="menu bg-white text-black rounded-lg p-4 space-y-2 shadow">
              {categories.map((cat, i) => (
                <li key={i}>
                  <a
                    className={`cursor-pointer block hover:bg-green-600 hover:text-white rounded-md transition px-2 py-1 ${
                      selectedCategory === cat ? "bg-green-600 text-white" : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </a>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
          

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-300" />

          {/* Mobile Dropdown */}
          <div className="lg:hidden mb-4">
            <select
              className="select select-bordered text-black w-full bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredDesigns.map((design, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-lg p-2 shadow hover:shadow-xl transition hover:scale-105 overflow-hidden"
                >
                  <img
                    src={design.img}
                    alt={`Design ${i + 1}`}
                    className="w-full h-40 sm:h-48 object-cover rounded-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition">
                    <button className="btn btn-sm hidden hover:block text-white">
                      View
                    </button>
                  </div>
                </div>
              ))}
              {filteredDesigns.length === 0 && (
                <p className="col-span-full text-center text-gray-500">No designs found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
