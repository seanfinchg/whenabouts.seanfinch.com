import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "../contexts/themeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const links = [
  { href: "/", text: "Whenabouts" },
  { href: "https://seanfinch.com/", text: "Portfolio Website" },
  { href: "https://seanfinch.com/projects", text: "Projects" },
];

const Links: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const location = useLocation();
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`font-jost py-4 px-4 hover:font-extrabold text-4xl md:text-lg ${location.pathname === link.href ? "font-extrabold" : ""} text-center`}
          onClick={onClick}
        >
          {link.text}
        </a>
      ))}
    </>
  );
};

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const getThemeCSS = () => {
    return theme === "light"
      ? "bg-ultra-light-mode text-ultra-dark-mode"
      : "bg-ultra-dark-mode text-light-mode";
  };

  const getStyleForMobileNavbar = (): string => {
    return isMobile
      ? `fixed top-24 left-0 w-screen rounded-br-lg rounded-bl-lg ${getThemeCSS()} flex flex-col 
        transition-opacity transition-height ${
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`
      : "w-full flex justify-around items-center";
  };

  return (
    <div
      className={`w-full text-center flex justify-between px-4 h-24 md:h-16 items-center ${getThemeCSS()}`}
    >
      <div className="flex items-center w-full">
        <button
          className="text-6xl md:invisible"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className={getStyleForMobileNavbar()}>
          {(isOpen || !isMobile) && <Links onClick={() => setIsOpen(false)} />}
          {!isMobile && (
            <button onClick={toggleTheme} className="text-5xl md:text-xl">
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          )}
        </div>
      </div>
      {isMobile && (
        <button onClick={toggleTheme} className="text-5xl md:text-xl">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      )}
    </div>
  );
};

export default Navbar;
