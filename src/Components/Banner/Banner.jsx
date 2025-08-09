import React, { useState, useEffect, useRef } from 'react';

import img1 from '../../assets/Illustration (5).png';
import img2 from '../../assets/Illustration (6).png';
import img3 from '../../assets/Illustration (7).png';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';

// Hook for fade-in animation delay
const useIsVisible = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);
  return isVisible;
};

const badges = [
  { text: "Smarter idea, instant soultions", position: "top-60 left-0 -translate-x-40" },
  { text: "Website Devolopement", position: "top-90 left-90 -translate-y-1" },
  { text: "Mobile App Development", position: "top-0 -left-40" },
  { text: "UI/UX Engineering", position: "top-10 -right-20 -translate-y-1/2" },
  { text: "Software Services", position: "top-60 -right-20" },
];

const serviceCards = [
  {
    id: 1,
    title: "Our Professional Trainig Platform",
    description: "Stream and broadcast videos in crystal-clear quality",
    image: img1,
  },
  {
    id: 2,
    title: "Software Service Solutions",
    description: "Plan, track, and manage projects with precision tools.",
    image: img2,
  },
  {
    id: 3,
    title: "Software Service Solutions",
    description: "Plan, track, and manage projects with precision tools.",
    image: img3,
  },
];

const App = () => {
  const containerRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [cardOrder, setCardOrder] = useState([1, 2, 3]);
  const [isSwapping, setIsSwapping] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const headlineVisible = useIsVisible(0);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setParallax({ x: x * 20, y: y * 20 });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsSwapping(true);
      setTimeout(() => {
        setCardOrder(prevOrder => {
          const newOrder = [...prevOrder];
          const first = newOrder.shift();
          newOrder.push(first);
          return newOrder;
        });
        setIsSwapping(false);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-black font-sans pt-30"
      onMouseMove={handleMouseMove}
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10 animate-particle"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 6 + 12}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-90 h-90 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />
<div className="absolute top-0 right-0 w-100 h-72 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />
 <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />

      <style>
        {`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pop-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes drift {
          0% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(calc(var(--rand-x) * 10vw)) translateY(calc(var(--rand-y) * 10vh)); }
          100% { transform: translateX(0) translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .animate-pop-in {
          animation: pop-in 0.22s ease-out forwards;
        }
        .animate-particle {
          animation: drift linear infinite;
        }
        .card-container {
          perspective: 1000px;
        }
      `}
      </style>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 text-center">
        {/* Headline */}
        <h1
          className={`text-3xl md:text-7xl font-extrabold leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-teal-600 to-slate-100`}
        >
          We are your Software Development Team in The Cloud
        </h1>

        {/* Contact Button */}
       <button className="mt-8 px-10 py-1 text-lg font-medium rounded-full bg-gray-800 border border-gray-700 text-white hover:bg-gray-700 transition-colors shadow-lg flex items-center gap-2">
  Contact Us <LuCircleArrowOutUpRight />
</button>

        {/* Badge Chips */}
        <div className="relative w-full mt-20">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`absolute px-4 py-2 my-19 text-lg rounded-full bg-gray-800 border border-gray-700 text-white shadow-lg ${badge.position}
                transition-transform transition-opacity duration-300 ease-out
                ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
              `}
              style={{
                animationDelay: `${800 + index * 50}ms`,
                transformOrigin: 'center',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 inline-block mr-1 text-teal-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {badge.text}
            </div>
          ))}
        </div>

        {/* Service Cards Container */}
        <div
          className="relative mb-50 w-2/3 h-[300px] flex items-center justify-center card-container"
          onMouseEnter={() => {
            setHovered(true);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
            setIsPaused(false);
          }}
        >
          {serviceCards.map((card) => {
            const cardIndex = cardOrder.findIndex(id => id === card.id);
            const scale = cardIndex === 0 ? 1.2 : (cardIndex === 1 ? 0.95 : 0.9);
            const zIndex = 3 - cardIndex;
            const topPosition = cardIndex === 0 ? '70%' : (cardIndex === 1 ? '45%' : '50%');
            const opacity = cardIndex === 0 ? 1 : 0.7;

            return (
              <div
                key={card.id}
                className={`absolute w-full max-w-xl h-full transition-all duration-700 ease-in-out ${
                  hovered && cardIndex === 0 ? 'shadow-[0_0_40px_rgba(0,255,200,0.8)]' : ''
                }`}
                style={{
                  transform: `translate(-50%, -50%) translate3d(${parallax.x * (cardIndex + 1) / 4}px, ${parallax.y * (cardIndex + 1) / 4}px, 0) scale(${scale})`,
                  opacity,
                  zIndex,
                  top: topPosition,
                  left: '50%',
                }}
              >
                <div className="card card-side bg-base-100 shadow-sm rounded-[30px] h-full p-4 flex items-center">
                  <figure className="flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-50 h-40 object-cover rounded-l-[30px]"
                    />
                  </figure>
                  <div className="card-body p-4 flex flex-col justify-between" style={{ maxWidth: 'calc(100% - 10rem)' }}>
                    <h3 className="card-title text-lg md:text-xl">{card.title}</h3>
                    <p className="mb-4">{card.description}</p>
                    <div className="card-actions justify-start">
                      <button className="btn bg-teal-600 hover:bg-teal-950 ml-50 px-4 py-1">Discover</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default App;
