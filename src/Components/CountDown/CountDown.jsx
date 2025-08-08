import { useState, useEffect, useRef } from "react";
import "./Font.css";
import { BsStars } from "react-icons/bs";
import { FaArrowTrendDown } from "react-icons/fa6";

const CountDown = () => {
  const [techPartners, setTechPartners] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(0);

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (sectionRef.current && !hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasAnimated(true);
            startCounting();
            observer.disconnect();
          }
        },
        { root: null, threshold: 0.1 }
      );
      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }
  }, [hasAnimated]);

  const startCounting = () => {
    const countTo = (target, setter) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 100);
        if (count >= target) {
          setter(target);
          clearInterval(interval);
        } else {
          setter(count);
        }
      }, 20);
    };
    countTo(20, setTechPartners);
    countTo(150, setProjectsCompleted);
    countTo(1000, setSatisfiedCustomers);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 bg-gray-50 text-gray-800 font-sans"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="bricolage-grotesque flex items-center justify-center gap-3 flex-wrap leading-tight">
          <BsStars className="inline-block align-middle text-[#27B4A3]" />
          At Software Chamber,
          <span className="text-[#A5A5A5]"> we specialize</span> in
         
          turning complex challenges into elegant
          <br />
          <span className="text-[#A5A5A5]">digital solutions</span>
          <FaArrowTrendDown className="inline-block align-middle rotate-180" />
        </h2>
      </div>

      {/* Three-column layout */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch">
        {/* Left: Counters */}
        <div className="flex flex-col gap-10 text-center lg:text-left justify-center">
          <div>
            <p className="text-6xl font-extrabold">{techPartners}+</p>
            <p className="text-lg text-gray-500">Tech Partners</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold">{projectsCompleted}+</p>
            <p className="text-lg text-gray-500">Projects Completed</p>
          </div>
          <div>
            <p className="text-6xl font-extrabold">
              {satisfiedCustomers < 1000 ? satisfiedCustomers : "1K"}+
            </p>
            <p className="text-lg text-gray-500">Satisfied Customers</p>
          </div>
        </div>

        {/* Middle: Image */}
        <div
          className="flex justify-center items-center"
          style={{ marginLeft: "-50px" }}
        >
          <img
            src="/src/assets/Rectangle 6.png"
            alt="Team Collaboration"
            className="rounded-xl shadow-2xl object-cover"
            style={{ width: "510px", height: "474px" }}
          />
        </div>

        
        <div className="flex flex-col gap-6 justify-center">
          {[
            {
              num: "1",
              title: "Your Team in the cloud",
              desc: "We hire the best and brightest talents to build world-class technology",
            },
            {
              num: "2",
              title: "Grow more with less",
              desc: "We have a competitive pricing structure",
            },
            {
              num: "3",
              title: "Weekly sprint and reviews",
              desc: "Our fast review and feedback loop is designed to keep you in the driver's seat",
            },
            {
              num: "4",
              title: "Communication First",
              desc: "We use modern tools and services to collaborate",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="flex items-start bg-white rounded-xl shadow-md p-4"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-[#27B4A3] text-white rounded-full font-bold mr-4 flex-shrink-0">
                {item.num}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountDown;
