import { useEffect, useState } from "react";
import banner from "../assets/kalidoscope.jpeg";
import mobileBanner from "../assets/mobile_iiit.webp";

function StartingBanner() {
  const [backgroundImage, setBackgroundImage] = useState(banner);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setBackgroundImage(mobileBanner);
      } else {
        setBackgroundImage(banner);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "70% 10%",
          transform: `translateY(${scroll * 0.5}px)`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
        {/* Red Line Animation */}
        <div className="w-20 h-0.5 bg-red-600 mb-8 animate-wide"></div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          <span className="text-red-600">TEDx</span>IIIT Sri City
        </h1>

        {/* Subtitle with typing effect */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
          Kaleidoscope of Humanity
        </p>

        {/* Date */}
        <div className="text-lg md:text-xl text-gray-400 tracking-widest animate-fade-in-delay">
          19th January 2025
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-red-600"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}

// Add these animations to your tailwind.config.js


export default StartingBanner;