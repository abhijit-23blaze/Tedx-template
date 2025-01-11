import { useState } from "react";

function Header() {
  // State to toggle the menu visibility on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="header w-full h-32 p-3 flex justify-center border-white">
      <div className="flex w-[90vw] justify-between items-center font-sans text-2xl font-normal tracking-[0.15em] text-left mt-8">
        {/* Hamburger icon for mobile */}
        <div className="md:hidden cursor-pointer mr-4" onClick={toggleMenu}>
          <div className="space-y-2">
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
            <div className="w-8 h-1 bg-white"></div>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:justify-evenly items-center ${
            isMenuOpen ? "block mt-32" : "hidden"
          } md:block`}
        >
          <div className="underline-offset-8 cursor-pointer hover:underline text-white hover:text-red-500 hover:scale-90 transition-all duration-300 hover:decoration-red-500 mb-4 md:mb-0">
            HOME
          </div>
          <div className="underline-offset-8 cursor-pointer hover:underline text-white hover:text-red-500 hover:scale-90 transition-all duration-300 hover:decoration-red-500 mb-4 md:mb-0">
            GALLERY
          </div>

          <div className="underline-offset-8 cursor-pointer hover:underline text-white hover:text-red-500 hover:scale-90 transition-all duration-300 hover:decoration-red-500 mb-4 md:mb-0">
            SPONSORS
          </div>

          <div className="underline-offset-8 cursor-pointer hover:underline text-white hover:text-red-500 hover:scale-90 transition-all duration-300 hover:decoration-red-500 mb-4 md:mb-0">
            TEAM
          </div>
          <a
            href="https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/what-is-a-tedx-event"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="underline-offset-8 cursor-pointer hover:underline text-white hover:text-red-500 hover:scale-90 transition-all duration-300 hover:decoration-red-500 mb-4 md:mb-0">
              ABOUT
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
