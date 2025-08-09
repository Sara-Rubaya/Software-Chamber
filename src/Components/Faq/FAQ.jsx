import { useState } from 'react';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { BsStars } from 'react-icons/bs';
import { FaArrowTrendDown } from 'react-icons/fa6';

// Main App component containing the entire FAQ section
export default function App() {
  // Hardcoded FAQ data. In a real application, this would likely come from an API.
  const faqData = [
    {
      question: "What software development services does your company offer?",
      answer: "Our company offers a full suite of software development services, including custom web application development, mobile app creation for iOS and Android, and enterprise software solutions. We specialize in building scalable, secure, and high-performance applications tailored to our clients' unique business needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience working across various industries, including fintech, healthcare, e-commerce, and logistics. Our team is skilled at understanding the specific challenges and requirements of each sector to deliver effective and innovative solutions."
    },
    {
      question: "What sets your company apart from the competition?",
      answer: "We believe in a collaborative, client-focused approach. Our key differentiators are our commitment to transparency throughout the development process, our agile methodology that ensures flexibility, and our dedication to delivering high-quality, maintainable code that stands the test of time."
    },
    {
      question: "Is my project idea and information kept confidential?",
      answer: "Absolutely. We treat all client information with the utmost confidentiality. We are happy to sign a Non-Disclosure Agreement (NDA) to provide a legal guarantee of privacy and protect your intellectual property."
    }
  ];

  // State to manage the currently open FAQ item. Initialize with null (none open).
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle an FAQ item's open state
  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="min-h-screen bg-white text-neutral-50 flex items-center justify-center p-4 sm:p-8 font-['Inter']">
      <div className="w-full  mx-auto py-12">
        
        {/* Header Section */}
     <div className="text-center mb-16">
  <h1 className="    text-black leading-tight">
    Comprehensive Answers to the Most <br /> 
    <BsStars className="inline-block text-[#27B4A3]" size={35} /> Common Questions <br />
    <span className="text-[#A5A5A5]">
      About Our <br /> Services
    </span>{' '}
    and How We <span className="text-[#A5A5A5]"> Work</span>{' '}
    <FaArrowTrendDown
      className="inline-block align-middle rotate-180"
      size={35}
    />
  </h1>
</div>


        {/* FAQ Main Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 border-b-2 border-neutral-700 pb-4">
          <h2 className="text-6xl sm:text-7xl font-bold mb-4  text-black sm:mb-0">
            FAQ
          </h2>
          <button className="flex items-center gap-2 text-neutral-400 hover:text-neutral-800 transition-colors">
            <span className="text-lg">All FAQ</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* FAQ List */}
        <div className="space-y-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable component for a single FAQ item
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div data-aos="fade-up" className="bg-white  rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <div
        className="flex justify-between items-center"
        onClick={onToggle}
      >
        <h3 className="text-xl  text-black font-semibold  pr-4">
          {question}
        </h3>
        <button
          className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-neutral-50 transition-colors"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <ChevronDown
            className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-400' : 'rotate-0'}`}
          />
        </button>
      </div>
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-black leading-relaxed pt-2 border-t border-neutral-700">
          {answer}
        </p>
      </div>
    </div>
  );
};
