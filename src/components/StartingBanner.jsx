import { useEffect, useState } from "react";
import banner from "../assets/iiit.webp";
import mobileBanner from "../assets/mobile_iiit.webp";

function StartingBanner() {
  const [backgroundImage, setBackgroundImage] = useState(banner);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setBackgroundImage(mobileBanner);
      } else {
        setBackgroundImage(banner);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[80%]">
      <div
        className="w-full h-[83vh] bg-cover bg-no-repeat bg-right-bottom flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "65% 50%",
        }}
      ></div>
    </div>
  );
}

export default StartingBanner;
