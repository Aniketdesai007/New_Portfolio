import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="text-white pr-12 font-medium fixed bg-black w-full top-0 left-0 z-50 shadow">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <a href="#">AD</a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`fixed top-16 left-0 w-full z-50 shadow bg-transparent px-[5rem] md:static md:flex md:w-auto transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="md:flex md:items-center cursor-pointer space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
              <li>
                <Link
                  to="Hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  activeClass="text-cyan-400 font-semibold"
                  className="hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  activeClass="text-cyan-400 font-semibold"
                  className="hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="Technology"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={1500}
                  activeClass="text-cyan-400 font-semibold"
                  className="hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1500}
                  activeClass="text-cyan-400 font-semibold"
                  className="hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-16 left-0 w-full h-full bg-black opacity-50 backdrop-blur-lg z-40 md:hidden"></div>
      )}

      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isOpen ? "mt-40" : "mt-16"
        }`}
      >
      </div>
    </>
  );
};

export default Navbar;
