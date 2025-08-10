import React from "react";

const items = [
  { text: "Fintech", img: "https://i.ibb.co.com/XZHwZXSc/image.png" },
  { text: "Health Care", img: "https://i.ibb.co.com/KpYMN1g7/image-1.png" },
  { text: "Developers", img: "https://i.ibb.co.com/1fhV8tP8/image-2.png" },
  { text: "Software", img: "https://i.ibb.co.com/5WPCfTQP/image-3.png" },
  { text: "Entertainment", img: "https://i.ibb.co.com/39q016xq/image-4.png" },
  { text: "Hospitality", img: "https://i.ibb.co.com/QF67RtYQ/Rectangle-4223.png" },
  { text: "Manufacturing", img: "https://i.ibb.co.com/7xp2CWbW/Rectangle-4225.png" },
  { text: "Energy", img: "https://i.ibb.co.com/ycDMdd4H/Rectangle-4226.png" },
  { text: "Auto Motive", img: "https://i.ibb.co.com/39q016xq/image-4.png" },
];

const Marquee = () => {
  return (
    <div data-aos="fade-up" className="relative w-full overflow-hidden bg-[#05080f] py-20 space-y-8 ">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 py-10">
        <span
  className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
  style={{
    background: "linear-gradient(to right, rgba(45, 212, 191, 0.5), rgba(22, 163, 133, 0.5))",
  }}
>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Smarter Idea, instant solutions
        </span>
      </div>

      {/* First marquee */}
      <div className="whitespace-nowrap animate-marquee1 mt-10 space-x-12">
        {items.concat(items).map((item, idx) => (
          <div
            key={"m1-" + idx}
            className="inline-flex items-center space-x-3 text-white cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-24 h-16 object-cover rounded-full"
              loading="lazy"
            />
            <span className="font-semibold text-lg">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Second marquee */}
      <div className="whitespace-nowrap animate-marquee2 mt-4 space-x-12">
        {items.concat(items).map((item, idx) => (
          <div
            key={"m2-" + idx}
            className="inline-flex items-center space-x-3 text-white cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-24 h-16 object-cover rounded-full"
              loading="lazy"
            />
            <span className="font-semibold text-lg">{item.text}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee1 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee1 {
          animation: marquee1 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite reverse;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
