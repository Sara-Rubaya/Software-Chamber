import { useState } from 'react';
import { FaArrowRight, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close dropdown after click
  };

  return (
    <nav className="w-full relative flex items-center justify-between px-6 py-4 bg-black text-white shadow-lg z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/Logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-md shadow-md"
        />
        <div className="leading-tight">
          <h4 className="font-semibold">Software</h4>
          <p className="text-xs tracking-wide text-gray-300">Chamber</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 relative">
        {/* Contact Us Button */}
        <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-gray-700 to-gray-500 hover:from-gray-600 hover:to-gray-400 transition">
          <span className="font-medium">Contact Us</span>
          <FaArrowRight />
        </button>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center bg-gray-600 hover:bg-gray-500 rounded-full focus:outline-none"
        >
          <FaBars />
        </button>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-14 right-0 bg-[#10151a] text-white rounded-md shadow-lg py-2 w-40">
            <a
              href="#login"
              className="block px-4 py-2 hover:bg-gray-700 transition"
              onClick={(e) => handleSmoothScroll(e, 'login')}
            >
              Login
            </a>
           <a
  href="#services"
  onClick={(e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="block px-4 py-2 hover:bg-gray-700 transition"
>Services
</a>
            <a
              href="#faq"
              className="block px-4 py-2 hover:bg-gray-700 transition"
              onClick={(e) => handleSmoothScroll(e, 'faq')}
            >
              FAQ
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
