import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-20 top-0 ">
      <nav className="bg-white  px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="">
            <img className="h-12 mr-3 rounded-full" src="./logo.avif" alt="" />
          </Link>
          <div className=" flex md:order-2">
            <Link
              to="#"
              className="text-gray-800 duration-100  hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2.5 md:py-3 mr-2 focus:outline-none"
            >
              Login
            </Link>
            <Link
              to="#"
              className="text-white duration-100 bg-orange-700 hover:bg-orange-800 focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 md:px-5 py-2.5 md:py-3 mr-2 focus:outline-none"
            >
              Get Started
            </Link>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul className=" flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={() =>
                    `block py-2 pr-4 pl-4 duration-200 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={() =>
                    `block py-2 pr-4 pl-4 duration-200 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={() =>
                    `block py-2 pr-4 pl-4 duration-200 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={() =>
                    `block py-2 pr-4 pl-4 duration-200 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                  }
                >
                  Contact-us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
