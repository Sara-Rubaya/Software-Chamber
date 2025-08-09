import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo.",
      author: "Alex Larkins",
      title: "Art director at Airbnb",
      avatarUrl: "https://placehold.co/100x100/3d3d3d/b2b2b2?text=AL",
      logoUrl: "https://placehold.co/120x40/3d3d3d/b2b2b2?text=mono",
      stars: 5,
    },
    {
      quote: "The team's creativity and technical skills exceeded our expectations. They brought our vision to life with a user-friendly and visually stunning application. Highly recommended!",
      author: "Jane Doe",
      title: "CEO at Tech Innovators",
      avatarUrl: "https://placehold.co/100x100/3d3d3d/b2b2b2?text=JD",
      logoUrl: "https://placehold.co/120x40/3d3d3d/b2b2b2?text=Innovators",
      stars: 5,
    },
    {
      quote: "Working with them was a seamless experience. Their communication and attention to detail made the entire project a success. We're thrilled with the final product!",
      author: "Sam Wilson",
      title: "Founder of Creative Space",
      avatarUrl: "https://placehold.co/100x100/3d3d3d/b2b2b2?text=SW",
      logoUrl: "https://placehold.co/120x40/3d3d3d/b2b2b2?text=Space",
      stars: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-50 flex items-center justify-center p-4 sm:p-8 font-['Inter']">
      
      {/* Top-left glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />
      {/* Bottom-right glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />

      <style>
        {`
        @keyframes shine {
          0%, 100% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }
        .shine-effect {
          background-image: linear-gradient(
            -60deg,
            transparent 0%,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shine 2s linear infinite;
        }
        `}
      </style>

      <div data-aos="fade-up" className="w-full max-w-5xl mx-auto py-12 text-center relative z-10">
        <div className="mb-4">
          <span className="inline-block px-4 py-1 text-sm font-medium text-emerald-400 bg-neutral-800 rounded-full border border-neutral-700">
            ★ Smarter idea, instant solutions
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto leading-tight mb-16">
          Don't just take our word for it. Hear what our clients say
        </h1>

        <div className="relative w-full h-80 sm:h-96 flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              isActive={activeIndex === index}
              isFading={isFading}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, isActive, isFading, delay }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timeout;
    if (isActive) {
      setShowContent(true);
    } else {
      timeout = setTimeout(() => setShowContent(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [isActive]);

  const { quote, author, title, avatarUrl, logoUrl, stars } = testimonial;

  return (
    <div
      className={`absolute inset-0 bg-neutral-900 rounded-3xl shadow-xl p-8 sm:p-12 border border-neutral-800 transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
      style={{
        transform: isActive ? 'scale(1)' : 'scale(0.95)',
        transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
      }}
    >
      {showContent && (
        <div className="relative h-full flex flex-col justify-between">
          <p className="text-2xl sm:text-3xl font-light italic text-neutral-300 mb-8 text-left">
            {quote}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
            <div className="flex items-center gap-4">
              <img
                src={avatarUrl}
                alt={`${author} avatar`}
                className={`w-12 h-12 rounded-full border-2 border-neutral-700 transition-all duration-300 ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                style={{ transitionDelay: `${delay}ms` }}
              />
              <div>
                <p
                  className={`text-lg font-semibold text-neutral-50 transition-all duration-300 ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                  style={{ transitionDelay: `${delay + 60}ms` }}
                >
                  {author}
                </p>
                <p
                  className={`text-sm text-neutral-400 transition-all duration-300 ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                  style={{ transitionDelay: `${delay + 120}ms` }}
                >
                  {title}
                </p>

                {/* Star rating */}
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <img
              src={logoUrl}
              alt={`${author}'s company logo`}
              className="w-auto h-8 sm:h-10 mt-4 sm:mt-0 opacity-80"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
