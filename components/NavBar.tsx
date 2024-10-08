"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";

const NavBar = () => {
  // State to track the menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={35} />
      </Link>

      {/* Large screen navigation */}
      <ul className="hidden lg:flex gap-12 h-full">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 cursor-pointer flexCenter pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Large screen button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          label="Get Started"
          variant="btn_dark_green"
          icon="/user.svg"
        />
      </div>

      {/* Small screen menu icon */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="lg:hidden inline-block cursor-pointer"
        onClick={toggleMenu}
      />

      {/* Small screen navigation menu */}
      {menuOpen && (
        <ul className=" cursor-pointer absolute top-16 left-0 w-full p-5 flex flex-col gap-4 lg:hidden bg-black">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-green-50 hover:font-bold text-center p-2 border-b border-gray-600"
            >
              {link.label}
            </Link>
          ))}
          <Button
            type="button"
            label="Get Started"
            variant="btn_green"
            icon="/user.svg"
          />
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
