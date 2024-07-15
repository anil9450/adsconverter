import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
      <div className="relative inline-block">
        <button
          type="button"
          className="w-50 px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
          focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          Dropdown{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ***POP-UP Ad***
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ****BOTTOM ANCHOR****
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ****TOP ANCHOR AD****
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ****INTERSTITIAL Ad****
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ****Bottom sticky refresh ad****
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ******RESPONSIVE Ad******
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ***300X250 ad***
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ***300X600 Side-bar ad***
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  *****FLYING CARPET Ad****
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ***LEFT SIDE STICKY Ad***
                </a>
              </li>
              <hr className="w-50 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  ****RIGHT SIDE STICKY AD****
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
