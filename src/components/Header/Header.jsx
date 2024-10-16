import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [click, setClick] = useState(false);
  const [firstVisit, setFirstVisit] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setFirstVisit(true);
    } else {
      setFirstVisit(false);
    }
  }, []);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div
            className="menu-icons md:hidden cursor-pointer"
            onClick={handleClick}
          >
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <Link to="/" className="flex items-center animate-bounce">
            <img
              src="/images/main-logo.jpg"
              className="mr-3 h-12 lg:h-16 transition-transform duration-300 hover:scale-105 object-cover"
              alt="Logo"
            />
          </Link>
          {firstVisit ? (
            <>
              <div className="flex items-center lg:order-2">
                <Link
                  to="/signup"
                  className="text-gray-800 font-bold hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Sign Up
                </Link>

                <Link
                  to="/login"
                  className="text-gray-800 font-bold hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </Link>
              </div>
            </>
          ) : (
            <>
              <div
                className={`${
                  click ? "flex" : "hidden"
                } flex-col items-center w-full md:hidden transition-all duration-300`}
              >
                <ul className="flex flex-col mt-4 font-medium lg:hidden">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700`
                      }
                    >
                      <i className="fas fa-home"></i> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700`
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i> About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700`
                      }
                    >
                      <i className="fas fa-mobile"></i> Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700`
                      }
                    >
                      <i className="fa-solid fa-taxi"></i> Services
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } hover:bg-gray-50 lg:hover:bg-transparent lg:p-0 hover:text-orange-700`
                      }
                    >
                      <i className="fas fa-home"></i> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } hover:bg-gray-50 lg:hover:bg-transparent lg:p-0 hover:text-orange-700`
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i> About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } hover:bg-gray-50 lg:hover:bg-transparent lg:p-0 hover:text-orange-700`
                      }
                    >
                      <i className="fas fa-mobile"></i> Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } hover:bg-gray-50 lg:hover:bg-transparent lg:p-0 hover:text-orange-700`
                      }
                    >
                      <i className="fa-solid fa-taxi"></i> Services
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
