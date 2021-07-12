import React from "react";
import SearchModal from "./header/SearchModal";
import Notifications from "./header/Notifications";
import Help from "./header/Help";
import UserMenu from "./header/UserMenu";
import Link from "next/link";

const BlinkLogo = require("../assets/images/blink_logo-min.png");

function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex">
            <a href="https://blinkdigital.in/" target="_blank">
              <img
                src={BlinkLogo}
                className="object-contain md:object-scale-down blink-logo w-full mr-2"
                alt="logo"
              />
            </a>
            <div className="main-title">
              <Link href="/">
                <a>
                  <h2>Digital Presence Index</h2>
                </a>
              </Link>
            </div>
          </div>

          {/* Header: Left side */}
          <div className="flex">
            {/* <SearchModal /> */}
            {/* Hamburger button */}
            <button
              className="text-gray-500 hover:text-gray-600 ml-2"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              {sidebarOpen ? (
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  enableBackground="new 0 0 24 24"
                >
                  <line
                    x1="5"
                    y1="5"
                    x2="20"
                    y2="20"
                    stroke="#000"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  ></line>
                  <line
                    x1="5"
                    y1="20"
                    x2="20"
                    y2="5"
                    stroke="#000"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                  ></line>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="5" width="16" height="2" />
                  <rect x="4" y="11" width="16" height="2" />
                  <rect x="4" y="17" width="16" height="2" />
                </svg>
              )}
            </button>
          </div>

          {/* Header: Right side */}
          {/* <div className="flex items-center"> */}

          {/* <Notifications />
            <Help /> */}
          {/*  Divider */}
          {/* <hr className="w-px h-6 bg-gray-200 mx-3" />
            <UserMenu /> */}

          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;