import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { CgShoppingCart } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { MdProductionQuantityLimits, MdSell } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = ({ role }) => {
  const [open, setOpen] = useState(true);
  const { logout, user } = useContext(AuthContext);

  const handleClick = () => {
    logout()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="fixed">
      <div className="lg:hidden fixed top-5">
        <button
          onClick={() => setOpen(!open)}
          className="navbar-burger flex items-center text-blue-600 p-3 fixed"
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
      <div
        className={`min-h-screen lg:flex ${
          open ? "hidden" : "flex"
        } flex-row bg-gray-100`}
      >
        <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
          <div className="flex items-center justify-center h-20 shadow-md">
            <Link to='/' className="text-3xl uppercase text-indigo-500">ROYAL</Link>
          </div>
          <ul className="flex flex-col py-4">
            <li className="flex flex-col justify-center items-center my-10">
              <img
                className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
                src={user?.photoURL}
                alt=""
              />
              <h5>{user?.displayName}</h5>
            </li>
            {role && role === "seller" && (
              <>
                <li>
                  <Link
                    to="/dashboard/add-products"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <IoMdAdd className="text-orange-700 opacity-90" />
                    </span>
                    <span className="text-sm font-medium">ADD A PRODUCT</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/my-products"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <MdProductionQuantityLimits className="text-orange-700 opacity-90" />
                    </span>
                    <span className="text-sm font-medium">MY PRODUCTS</span>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="/dashboard/my-buyers"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <MdSell className="text-orange-700 opacity-90" />
                    </span>
                    <span className="text-sm font-medium">MY BUYERS</span>
                  </Link>
                </li> */}
              </>
            )}
            {role && role === "user" && (
              <li>
                <Link
                  to="/dashboard/my-orders"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <CgShoppingCart className="text-orange-700 opacity-90" />
                  </span>
                  <span className="text-sm font-medium">MY ORDERS</span>
                </Link>
              </li>
            )}
            {role && role === "admin" && (
              <>
                <li>
                  <Link
                    to="/dashboard/all-sellers"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <CgShoppingCart className="text-orange-700 opacity-90" />
                    </span>
                    <span className="text-sm font-medium"> ALL SELLERS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/all-buyers"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <MdSell className="text-orange-700 opacity-90" />
                    </span>
                    <span className="text-sm font-medium"> ALL BUYERS</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/reported-items"
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <MdProductionQuantityLimits className="text-orange-700 opacity-90" />
                    </span>
                    <span className="text-sm font-medium">REPORTED ITEMS</span>
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link
                to="/dashboard/profile"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <ImProfile className="text-orange-700 opacity-90" />
                </span>
                <span className="text-sm font-medium">PROFILE</span>
              </Link>
            </li>

            <li onClick={handleClick}>
              <button className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <BsBoxArrowInLeft className="text-orange-700 opacity-90" />
                </span>
                <span className="text-sm font-medium">LOG OUT</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
