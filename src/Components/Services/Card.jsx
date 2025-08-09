
import { BsStars } from 'react-icons/bs';



const Card = () => {
   
  return (
    <div  data-aos="fade-up" className="bg-white font-sans text-gray-800">
      <ServicesSection />
    </div>
  );
};


const ServiceCard = ({ title, description, isHighlighted = false }) => {
  
  const cardClasses = isHighlighted
    ? "bg-[#2dd4bf] text-white"
    : "bg-gray-100 text-gray-800 hover:bg-gray-50";

  const iconClasses = isHighlighted
    ? "bg-white text-gray-800"
    : "bg-gray-100 text-gray-800";

  return (
    <div id="services" className={`rounded-3xl p-8 shadow-xl transform transition-transform duration-300 hover:scale-105 ${cardClasses}`}>
      <h3 className="text-3xl font-bold mb-4">
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed mb-8">
        {description}
      </p>
      <div className="flex justify-end">
        <div className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-colors duration-300 ${iconClasses}`}>
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};


const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-24 max-w-7xl">
    
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 lg:mb-20">
        <div className="flex items-center mb-4 sm:mb-0">
          <h2 className="text-5xl font-extrabold mr-4 flex items-center gap-2">
            Services
            <BsStars className="inline-block text-[#27B4A3]" />
          </h2>
        </div>
        <a href="#" className="flex items-center text-lg font-semibold text-gray-800 group">
          <span className="group-hover:underline">All Services</span>
          <span className="ml-2 rounded-full bg-gray-200 p-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </a>
      </div>

      {/* Services cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ServiceCard
          title="Web & Mobile App Development"
          description="Software Chamber specializes in creating powerful, scalable, and secure e-"
        />
        <ServiceCard
          title="Application Software Services"
          description="Software Chamber specializes in creating powerful, scalable, and secure e-"
          isHighlighted
        />
        <ServiceCard
          title="Software Coding & Optimization"
          description="Software Chamber specializes in creating powerful, scalable, and secure e-"
        />
      </div>
    </section>
  );
};

export default Card;
