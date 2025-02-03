"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-8 max-md:justify-between md:pl-24 md:py-14 xl:pl-40 flex items-center md:gap-20 xl:gap-24">
      <Link href="/">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="w-20 md:w-24 object-contain"
        />
      </Link>
      <div className="hidden md:flex gap-16">
        <div className="relative">
          <Link
            href="/portfolio"
            className={`text-med-grey hover:text-dark-blue text-lg font-bold link ${
              pathname === "/portfolio" ? "active" : ""
            }`}
          >
            Portfolio
          </Link>
          {pathname === "/portfolio" && (
            <div className="w-6 h-[0.0625rem] left-7 bg-dark-blue absolute" />
          )}
        </div>
        <div className="relative">
          <Link
            href="/about-us"
            className={`text-med-grey hover:text-dark-blue text-lg font-bold link ${
              pathname === "/about-us" ? "active" : ""
            }`}
          >
            About Us
          </Link>
          {pathname === "/about-us" && (
            <div className="w-6 h-[0.0625rem] left-7 bg-dark-blue absolute" />
          )}
        </div>
        <div className="relative">
          <Link
            href="/contact-us"
            className={`text-med-grey hover:text-dark-blue text-lg font-bold link ${
              pathname === "/contact-us" ? "active" : ""
            }`}
          >
            Contact
          </Link>
          {pathname === "/contact-us" && (
            <div className="w-6 h-[0.0625rem] left-7 bg-dark-blue absolute" />
          )}
        </div>
      </div>
      <div className="relative md:hidden">
        <img
          src="/assets/icons/icon-hamburger.svg"
          alt="open menu icon"
          onClick={toggleMenu}
        />
        <div
          className={`fixed top-24 right-0 h-60 w-80 bg-very-light-grey text-dark-blue transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } z-40 px-12 pt-10`}
        >
          <ul className="space-y-4">
            <li>
              <a
                href="/portfolio"
                className="text-dark-blue text-[2rem] font-bold leading-10"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className="text-dark-blue text-[2rem] font-bold leading-10"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="text-dark-blue text-[2rem] font-bold leading-10"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Nav;
