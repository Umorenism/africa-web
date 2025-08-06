import  { useState, useEffect } from "react";
import pic1 from "../assets/afrca.jpeg";
import pic2 from "../assets/africa2.jpg";
import pic3 from "../assets/africa3.jpg";

const Hero = () => {
  const images = [pic1, pic2, pic3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[750px] w-full overflow-hidden">
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex justify-center items-center min-h-[750px] px-6 text-white">
          <div className="flex justify-center flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">
            {/* Text Content */}
            <div className="text-center lg:text-left max-w-[1000px]">
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Welcome to Africa United Space
              </h1>
              <p className="text-lg lg:text-xl font-medium mb-8">
                Africa United Space is where culture meets creativity — a hub
                for bold expression, unity, and innovation. We celebrate African
                identity through art, fashion, and community. This is more than
                a brand — it's a movement.
              </p>

              <button className="bg-green-600 text-white px-8 py-3 font-semibold rounded hover:bg-white hover:text-green-600 transition">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
