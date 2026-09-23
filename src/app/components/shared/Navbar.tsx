
"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Listed Books", href: "/listed-books" },
    { name: "Pages to Read", href: "/pages-to-read" },
  ];

  const navLinkClass = (href: string) => {
    const isActive = pathname === href;

    return `
      rounded-lg border-2 px-4 py-2 font-medium transition-all duration-200
      ${
        isActive
          ? "border-green-500 text-green-600 bg-green-50"
          : "border-transparent text-gray-700 hover:border-green-500 hover:text-green-600 hover:bg-green-50"
      }
    `;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="navbar min-h-20 bg-base-100">

        {/* Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-56 rounded-xl bg-base-100 p-3 shadow-lg"
            >
              {links.map((link) => (
                <li key={link.href} className="mb-1">
                  <Link
                    href={link.href}
                    className={navLinkClass(link.href)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="ml-2 text-2xl font-bold tracking-tight text-gray-900"
          >
            Book <span className="text-green-600">Vibe</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkClass(link.href)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Authentication Buttons */}
        <div className="navbar-end gap-2">
          <button className="rounded-lg border-2 border-green-500 px-5 py-2 font-semibold text-green-600 transition-all duration-200 hover:bg-green-500 hover:text-white">
            Sign In
          </button>

          <button className="hidden rounded-lg bg-green-500 px-5 py-2 font-semibold text-white transition-all duration-200 hover:bg-green-600 sm:block">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
