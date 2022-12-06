import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import book_icon from "../../../assets/icons/book_icon.png";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [classs, setClasss] = useState("hidden");
  const handleBurger = () => {
    setClasss("block");
  };
  const handleClose = () => {
    setOpen(open);
    if (open) {
      setClasss("hidden");
    }
  };
  const handleLogOut = () => {
    logout()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="shadow-sm">
        <nav className="lg:mx-[6%] relative px-4 py-4 flex justify-between items-center">
          <Link className="text-3xl font-bold leading-none" to="/">
            <img className="h-10" src={book_icon} alt="" />
          </Link>
          <div className="lg:hidden">
            <button
              onClick={handleBurger}
              className="navbar-burger flex items-center text-blue-600 p-3"
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className="text-lg text-gray-400 hover:text-gray-500"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-lg text-gray-400 hover:text-gray-500"
                to="/categories"
              >
                CATEGORIES
              </Link>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-lg text-gray-400 hover:text-gray-500"
                to="/blogs"
              >
                BLOGS
              </Link>
            </li>
            {/* <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-lg text-gray-400 hover:text-gray-500"
                to="/contact"
              >
                CONTACT
              </Link>
            </li> */}
          </ul>
          {user?.uid ? (
            <>
              <div className="relative lg:inline-block hidden">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl ">
                    <Link
                      to="/dashboard"
                      className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                    >
                      <svg
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span className="mx-1">Dashboard</span>
                    </Link>

                    <hr className="border-gray-200" />
                    <div
                      onClick={() => {
                        setIsDropdownOpen(false);
                        logout();
                      }}
                      className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                    >
                      <svg
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span className="mx-1">Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-2 "
                to="/login"
              >
                <PrimaryButton>LOGIN</PrimaryButton>
              </Link>
              <Link className="hidden lg:inline-block py-2 " to="/singup">
                <PrimaryButton>Sign up</PrimaryButton>
              </Link>
            </>
          )}
        </nav>
        <div className={`navbar-menu relative z-50 ${classs} lg:hidden`}>
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="lg:hidden fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <Link className="mr-auto text-3xl font-bold leading-none" to="/">
                <img className="mx-5 h-10" src={book_icon} alt="" />
              </Link>
              <button onClick={handleClose} className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/categories"
                  >
                    CATEGORIES
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/blogs"
                  >
                    BLOGS
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    to="/contact"
                  >
                    CONTACT
                  </Link>
                </li>
                {user?.uid ? (
                  <>
                    <li className="mb-1">
                      <Link
                        className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                        to="/dashboard"
                      >
                        DASHBOARD
                      </Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                {user?.uid ? (
                  <>
                    <div
                      onClick={handleLogOut}
                      className="block px-4 py-2 mb-3 leading-loose text-xs text-center font-semibold leading-none rounded-xl"
                      to="/login"
                    >
                      <PrimaryButton classes="w-full">LOG OUT</PrimaryButton>
                    </div>
                  </>
                ) : (
                  <>
                    <Link
                      className="block px-4 py-2 mb-3 leading-loose text-xs text-center font-semibold leading-none rounded-xl"
                      to="/login"
                    >
                      <PrimaryButton classes="w-full">LOG IN</PrimaryButton>
                    </Link>
                    <Link
                      className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none rounded-xl"
                      to="/signup"
                    >
                      <PrimaryButton classes="w-full">SIGN UP</PrimaryButton>
                    </Link>
                  </>
                )}
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2022 Mahbub Ahmed Turza</span>
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
