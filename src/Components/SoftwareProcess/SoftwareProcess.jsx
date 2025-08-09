import React, { useEffect, useState } from "react";

const steps = [
  { label: "Code", number: 1, angle: -120 },
  { label: "Build", number: 2, angle: -90 },
  { label: "Test", number: 3, angle: -60 },
  { label: "Release", number: 4, angle: -30 },
  { label: "Deploy", number: 5, angle: 0 },
  { label: "Monitor", number: 6, angle: 30 },
  { label: "Build", number: 7, angle: 60 },
];

const radius = 160;
const centerX = 0;
const centerY = 190;

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 60) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

const arcPath = () => {
  const start = polarToCartesian(centerX, centerY, radius, -120);
  const end = polarToCartesian(centerX, centerY, radius, 60);
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;
};

const ProcessStep = ({ step, visible }) => {
  const [hover, setHover] = useState(false);
  const pos = polarToCartesian(centerX, centerY, radius, step.angle);

  const isRelease = step.number === 4; // Special handling for "Release"

  return (
    <>
      {/* Dot */}
      <circle
        cx={pos.x}
        cy={pos.y}
        r={8}
        fill="#444"
        stroke="#0ccaba"
        strokeWidth="2"
        className={`cursor-pointer transition-opacity duration-500 ${
          visible ? "animate-pulse-once opacity-100" : "opacity-0"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />

      {/* Number */}
      <text
        x={pos.x}
        y={pos.y + 5}
        fill="#a4f0e6"
        fontWeight="600"
        fontSize="11"
        textAnchor="middle"
        pointerEvents="none"
        className="select-none"
      >
        {step.number}
      </text>

      {/* Label */}
      <text
        x={isRelease ? pos.x : pos.x + (step.angle < 0 ? -20 : 30)}
        y={isRelease ? pos.y - 15 : pos.y + 5}
        fill="#a4f0e6"
        fontWeight="500"
        fontSize="12"
        textAnchor={isRelease ? "middle" : step.angle < 0 ? "end" : "start"}
        pointerEvents="none"
        className={`select-none transition-colors duration-300 ${
          hover ? "text-teal-400" : ""
        }`}
      >
        {step.label}
      </text>

      {/* Tooltip */}
      {hover && (
        <foreignObject
          x={pos.x - 60}
          y={pos.y - 50}
          width={120}
          height={30}
          pointerEvents="none"
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="bg-teal-700 bg-opacity-80 text-white text-xs rounded px-2 py-1 text-center animate-fadeIn"
            style={{ animationFillMode: "forwards" }}
          >
            {step.label}
          </div>
        </foreignObject>
      )}
    </>
  );
};

const SoftwareProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [arcDrawn, setArcDrawn] = useState(false);

  useEffect(() => {
    setTimeout(() => setArcDrawn(true), 300);

    const timeouts = [];
    steps.forEach((_, i) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, i]);
        }, 1300 + i * 400)
      );
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div data-aos="fade-up"
      className="min-h-screen text-center px-6 py-12 select-none relative flex flex-col items-center justify-center"
      style={{
        overflow: "hidden",
        paddingBottom: "400px",
        backgroundColor: "#000000",
        backgroundImage: `
          radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px),
          radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    >
      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none "></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none "></div>

      {/* Badge */}
    <div className="inline-flex items-center bg-gradient-to-r from-teal-500 via-teal-700 to-teal-700 rounded-full text-white text-sm font-semibold px-4 py-2 mb-4 max-w-max mx-auto shadow-lg z-10 mt-20">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
  Smarter Idea, instant solutions
</div>

      {/* Heading */}
      <h2 className="text-white text-4xl sm:text-5xl font-semibold mb-3 z-10">
        Our Software
        <br />
        <span className="text-gray-400">Development Process</span>
      </h2>

      {/* Subheading */}
      <p className="text-gray-400 max-w-xl mx-auto mb-8 z-10">
        Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
      </p>

      {/* Contact button */}
      <button className="flex items-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-semibold py-3 px-8 rounded-full shadow-md mx-auto mb-50 transition-colors duration-300 z-10">
        <span>Contact Us</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Globe + timeline */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "66.66vw",
          maxWidth: "1100px",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 5,
        }}
      >
        <svg
          viewBox="-205 0 370 40"
          width="90%"
          height="auto"
          style={{ overflow: "visible", marginBottom: "-65px" }}
        >
          {/* Arc */}
          <path
            d={arcPath()}
            fill="none"
            stroke="#0ccaba"
            strokeWidth="3"
            strokeDasharray="500"
            strokeDashoffset={arcDrawn ? 0 : 500}
            style={{
              transition: "stroke-dashoffset 1s ease-out",
            }}
          />

          {/* Steps */}
          {steps.map((step, idx) => (
            <ProcessStep
              key={idx}
              step={step}
              visible={visibleSteps.includes(idx)}
            />
          ))}
        </svg>

        {/* Globe */}
        <img
          src="/src/assets/globe.png"
          alt="Globe"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            opacity: 1,
          }}
          draggable={false}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SoftwareProcess;
