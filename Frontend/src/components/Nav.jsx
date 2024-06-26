import { useState } from "react";
import React from "react";
import logo from "/src/assets/logo_nav.png";
import { navlinks } from "/src/data/navlinks";
import { Link } from "react-router-dom";
export default function Nav() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-white shadow">
        <div className=" justify-evenly px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
          <div>
            <div className="flex items-center justify-between basis-1/6 py-3 md:py-0 md:block">
              <a href="/" class="flex items-center">
                <img src={logo} class="h-20 sm:w-25" alt="180DC Logo" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul class="flex flex-col font-title mt-4 rounded-lg bg-gray-50 justify-evenly px-4 md:flex-row md:space-x-8  md:mt-0 md:text-sm  md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                {navlinks.map((navlink, idx) => (
                  <li>
                    <Link
                      to={navlink.link}
                      class="flex flex-col py-2 px-3 justify-evenly text-black text-opacity-60 hover:text-lime-600 rounded md:bg-transparent  md:p-8 md:text-xl  md:dark:bg-transparent"
                      aria-current="page"
                      target={navlink._target}
                    >
                      {navlink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr className="w-full h-1 bg-lime-600"></hr>
    </div>
  );
}
