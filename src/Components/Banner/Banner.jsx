import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";

const cards = [
  {
    title: "Our Professional Training Platform",
    description: "Stream and broadcast videos in crystal-clear quality.",
    img: "/img1.jpg",
  },
  {
    title: "Software Service Solutions",
    description: "Plan, track, and manage projects with precision tools.",
    img: "/img2.jpg",
  },
  {
    title: "UI/UX Design Services",
    description: "Design systems and experiences users love.",
    img: "/img3.jpg",
  },
  {
    title: "Mobile App Development",
    description: "Build fast, scalable, modern mobile apps.",
    img: "/img4.jpg",
  },
  {
    title: "Web Development",
    description: "Create websites that convert and scale.",
    img: "/img5.jpg",
  },
  {
    title: "AI-Powered Tools",
    description: "Leverage AI to automate and enhance solutions.",
    img: "/img6.jpg",
  },
];

const Banner = () => {
        useEffect(() => {
    Aos.init({
      duration: 800, // animation duration in ms
      easing: 'ease-out',
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  const [hoveringSlider, setHoveringSlider] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    arrows: false,
  };

  return (
    <div data-aos="fade-up" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0f1c] via-[#0b0d1a] to-[#0a0e18] text-white overflow-hidden">

      {/* Background Stars Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f293750_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Content Container */}
      <div className="z-10 text-center px-4 md:px-20 max-w-5xl">
        <div className="text-sm mb-4">
          <span className="bg-[#1d2939] text-teal-300 px-3 py-1 rounded-full">
            🌟 Smarter Idea, instant solutions
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          We are your <span className="text-cyan-400">Software</span><br />
          Development Team in The Cloud
        </h1>

        <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full mb-10 shadow hover:brightness-110 transition">
          Contact Us
        </button>

        {/* Slider Container */}
        <div
          className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden group transition-all duration-500"
          onMouseEnter={() => setHoveringSlider(true)}
          onMouseLeave={() => setHoveringSlider(false)}
        >
          {/* Floating Tags (on hover only) */}
          {hoveringSlider && (
            <>
              <div className="absolute left-[-160px] top-[40%] bg-[#1e293b] text-sm px-3 py-1 rounded-lg shadow border border-gray-700 transition-opacity">
                💻 Website Development
              </div>
              <div className="absolute right-[-160px] top-[20%] bg-[#1e293b] text-sm px-3 py-1 rounded-lg shadow border border-gray-700 transition-opacity">
                🎨 UI/UX Engineering
              </div>
              <div className="absolute left-[-160px] bottom-[10%] bg-[#1e293b] text-sm px-3 py-1 rounded-lg shadow border border-gray-700 transition-opacity">
                📱 Mobile App Development
              </div>
              <div className="absolute right-[-160px] bottom-[10%] bg-[#1e293b] text-sm px-3 py-1 rounded-lg shadow border border-gray-700 transition-opacity">
                🧠 Software Services
              </div>
            </>
          )}

          {/* Slider */}
          <div className="bg-[#0f1a2c] bg-opacity-80 backdrop-blur-lg p-6 rounded-3xl shadow-2xl">
            <Slider {...settings}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  {/* Image */}
                  <div className="sm:w-1/2 flex justify-center items-center p-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="rounded-2xl shadow-xl object-cover h-[300px] w-full"
                    />
                  </div>
                  {/* Text Content */}
                  <div className="sm:w-1/2 p-6 text-white text-left flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-gray-300 mb-5">{card.description}</p>
                    <button className="bg-gradient-to-r from-white to-gray-100 text-black px-5 py-2 rounded-full shadow hover:brightness-105 transition">
                      Discover
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
