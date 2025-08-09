import React, { useRef } from "react";
import {
  BsArrowUpRightCircleFill,
  BsStars,
  BsLightningFill,
  BsGearFill,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

// FeatureCard with divider line and uniform icon background color
const FeatureCard = ({ title, description, Icon }) => {
  return (
    <div data-aos="fade-up" className="bg-white rounded-3xl p-6 shadow-xl w-72 h-72 flex flex-col justify-between transition-transform duration-300 hover:scale-105 text-black">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2dd4bf]">
          <Icon className="text-white h-6 w-6" />
        </div>
      </div>

      {/* Divider line */}
      <div className="my-4 border-t border-gray-300"></div>

      <p className="text-sm font-light leading-relaxed">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Efficiency",
      description:
        "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
      Icon: BsArrowUpRightCircleFill,
    },
    {
      title: "Adaptability",
      description:
        "Our solutions adapt seamlessly to evolving business requirements and user needs.",
      Icon: BsStars,
    },
    {
      title: "Scalability",
      description:
        "Built to scale effortlessly, handling increased load with performance optimization.",
      Icon: BsLightningFill,
    },
    {
      title: "Precision",
      description:
        "Attention to detail ensures every feature is robust, accurate, and user-friendly.",
      Icon: BsGearFill,
    },
  ];

  // Ref for the scroll container
  const scrollRef = useRef(null);

  // Scroll handler: positive or negative value scrolls right or left
  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-black">
          Why Choose Softwarechamber
        </h2>
        <p className="text-lg text-gray-600">
          Deliver personalized experiences to your customers with AI-powered
          recommendation engines and dynamic content generation.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#2dd4bf] text-white rounded-full font-semibold flex items-center justify-center mx-auto transition-colors duration-300 hover:bg-[#1a9d8d]">
          Let's Discuss
          <BsArrowUpRightCircleFill className="ml-3 h-7 w-7" />
        </button>
      </div>

      {/* Cards container with arrows */}
      <div className="relative w-full max-w-6xl flex items-center">
        {/* Left arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scroll(-300)}
          className="hidden lg:flex absolute left-0 z-30 bg-white rounded-full p-3 shadow-md cursor-pointer"
        >
          <BsChevronLeft className="h-6 w-6 text-gray-800" />
        </button>

        {/* Cards scroll area */}
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-x-auto no-scrollbar scroll-smooth py-4 px-4 lg:px-0"
          style={{ scrollBehavior: "smooth" }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={index % 2 === 1 ? "mt-12 flex-shrink-0" : "mt-0 flex-shrink-0"}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scroll(300)}
          className="hidden lg:flex absolute right-0 z-30 bg-white rounded-full p-3 shadow-md cursor-pointer"
        >
          <BsChevronRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
