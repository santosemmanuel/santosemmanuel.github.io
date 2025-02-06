import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isSticky: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Resume", href: "#resume" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact", isButton: true },
  ];

  return (
    <nav
      className={`py-5 flex justify-between items-center w-full px-6 sm:px-10 lg:px-20 transition-all duration-300 ${
        isSticky
          ? `${darkMode ? "bg-gray-900 shadow-lg" : "bg-white shadow-md"} fixed top-0 left-0 w-full z-50`
          : "absolute top-0 left-1/2 transform -translate-x-1/2 w-full"
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="cursor-pointer">
        <h1 className="font-Inter text-xl hover:text-blue-500 transition-colors duration-300 dark:text-white">
          Emmanuel Santos III
        </h1>
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link, index) =>
          link.isButton ? (
            <li key={index}>
              <a
                href={link.href}
                className="bg-blue-700 text-white font-sourceCode px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ) : (
            <li key={index}>
              <a
                href={link.href}
                className="relative font-sourceCode text-dark-700 dark:text-white transition-all duration-300
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] 
                after:bg-current after:transition-all after:duration-300 after:ease-in-out
                hover:after:w-full hover:after:left-0"
              >
                {link.name}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Right Side: Dark Mode Toggle & Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-700 hover:text-white transition dark:hover:bg-gray-500"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 h-full w-3/4 bg-white dark:bg-gray-900 shadow-lg p-6 flex flex-col space-y-6 transform transition-all duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            className="self-end text-gray-700 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={30} />
          </button>

          {/* Navigation Links */}
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`font-sourceCode ${
                link.isButton
                  ? "bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
                  : "text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsOpen(false);
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-500 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
