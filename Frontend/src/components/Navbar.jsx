import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isJoinPage = location.pathname === "/join";
  const sections = ["home", "workout", "gallery", "pricing","bmi","diet", "tips", "contact", ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#111] text-white shadow-md">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <RouterLink to="/" className="text-2xl font-bold tracking-widest text-[#0095ff] font-['Exo_2']">
          FitNova
        </RouterLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-medium text-lg">
          {sections.map((item) =>
            isJoinPage ? (
              <RouterLink
                key={item}
                to="/"
                onClick={() => {
                    sessionStorage.setItem("scrollTo", item);
                    setIsOpen(false);
                }}
                className="cursor-pointer hover:text-[#0095ff] transition-colors duration-300"
                >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </RouterLink>

            ) : (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-[#0095ff] transition-colors duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            )
          )}
        </nav>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-[#111] px-6 py-4 gap-6">
          {sections.map((item) =>
            isJoinPage ? (
              <RouterLink
                key={item}
                to="/"
                className="text-lg border-b border-gray-600 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.toUpperCase()}
              </RouterLink>
            ) : (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-lg border-b border-gray-600 pb-2"
                onClick={() => setIsOpen(false)}
              >
                {item.toUpperCase()}
              </ScrollLink>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
