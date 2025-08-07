const Footer = () => {
  return (
    <footer className="relative min-h-screen bg-[#05080f] text-white overflow-hidden flex items-center justify-center px-4 md:px-8 py-16">
      {/* Top-left glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Bottom-right glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00fff7] opacity-10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        {/* Column 1: Title & Social */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">LET’S TALK</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-sm">
            A new era of energy, elegance, and elite competition begins here. Where passion
            meets performance on the court like never before.
          </p>
          <div>
            <p className="mb-2 font-semibold">Social media</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-300">
              <a href="#">Instagram ↗</a>
              <a href="#">Twitter ↗</a>
              <a href="#">Tiktok ↗</a>
              <a href="#">Facebook ↗</a>
              <a href="#">Linkedin ↗</a>
              <a href="#">Youtube ↗</a>
            </div>
          </div>
        </div>

        {/* Column 2: Contact Info */}
        <div className="text-sm space-y-6">
          <div>
            <p className="uppercase text-gray-400 font-semibold mb-1">Address</p>
            <p className="text-gray-300">1901 thornridge Cir,<br />Shiloh, Hawaii 81063</p>
          </div>
          <div>
            <p className="uppercase text-gray-400 font-semibold mb-1">Phone</p>
            <p className="text-gray-300">[+1] 872-298-3989</p>
          </div>
          <div>
            <p className="uppercase text-gray-400 font-semibold mb-1">Email</p>
            <p className="text-gray-300">hello@tranzit.com</p>
          </div>
        </div>

        {/* Column 3: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/src/assets/Footer-img.png"
            alt="Team Working"
            className="relative md:absolute bottom-0 right-0 z-0 w-2/3 sm:w-1/4 md:w-1/3 lg:w-1/4 opacity-80 -translate-y-[230px] md:translate-y-5"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-4 left-0 right-0 px-4 md:px-8 text-sm flex flex-col md:flex-row justify-between items-center text-gray-400 border-t border-gray-700 pt-4">
        <p className="text-center md:text-left">2024 Software Chamber All Right Reserved</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
