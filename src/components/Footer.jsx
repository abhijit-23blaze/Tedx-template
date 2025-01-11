import React from "react";
import instagramIcon from "../assets/icons/instagram.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import twitterIcon from "../assets/icons/twitter.png";
import gmailIcon from "../assets/icons/gmail.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="text-2xl font-bold text-red-600 mb-4">
          TED<span className="text-white">x</span> IIIT Sri City
        </div>
        <p className="text-sm text-gray-400 mb-8">
          x = independently organized TED event
        </p>

        <div className="flex justify-center space-x-8 mb-8">
          {/* Replace the `src` attributes with the paths to your PNG icons */}
          <a
            href="https://www.instagram.com/tedxiiitsricity/"
            className="hover:opacity-80"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/company/tedxiiits/posts/?feedView=all"
            className="hover:opacity-80"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://www.twitter.com"
            className="hover:opacity-80"
            aria-label="Twitter"
          >
            <img src={twitterIcon} alt="Twitter" className="w-9 h-9" />
          </a>
          <a href="mailto:tedx@iiits.in">
            <img src={gmailIcon} alt="Gmail" className="w-8 h-8" />
          </a>
        </div>

        <p className="text-gray-400 text-xs mb-4">
          © 2024 <span className="text-red-600">TEDxIIIT Sri City</span>. THIS
          INDEPENDENT TEDx EVENT IS OPERATED UNDER LICENCE FROM TED |
          <a
            href="https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/tedx-rules "
            target="blank"
            className="text-gray-400 hover:text-white mx-1"
          >
            TERMS & CONDITIONS
          </a>{" "}
        </p>
        <p className="text-gray-400 text-xs">
          © Copyright TED<span className="text-red-600">x</span>IIIT Sri City |
          Designed by TED<span className="text-red-600">x</span>IIIT Sri City
        </p>
      </div>
    </footer>
  );
};

export default Footer;
