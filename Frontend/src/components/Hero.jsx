import React, { useEffect } from "react";
import { Link, scroller } from "react-scroll";

const Hero = () => {
  useEffect(() => {
    const section = sessionStorage.getItem("scrollTo");
    if (section) {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
      sessionStorage.removeItem("scrollTo");
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start px-6 md:px-20 bg-[url('/img3.jpg')] bg-cover bg-center bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="z-10 text-white max-w-2xl space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight font-exo">
          LET'S<br />GET<br />MOVING
        </h1>
        <div className="text-lg md:text-xl space-y-1">
          <p>Your Journey to Fitness Starts Here</p>
          <p className="text-[#0095ff] font-medium">Unleash Your Potential</p>
        </div>
        <div className="flex gap-4 pt-4">
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-[#0095ff] hover:bg-[#0267af] transition-colors duration-300 text-white px-6 py-3 rounded-md cursor-pointer"
          >
            View Plans
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="border border-[#0095ff] text-[#0095ff] hover:bg-[#0095ff] hover:text-white transition duration-300 px-6 py-3 rounded-md cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
