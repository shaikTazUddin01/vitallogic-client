"use client";

import Link from "next/link";
import Image from "next/image";
import { FiUser, FiShoppingCart, FiMenu, FiPhoneCall } from "react-icons/fi";
import logo from "@/src/assets/icon/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="drawer drawer-end">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      {/* ================= Navbar ================= */}
      <div className="drawer-content px-6 lg:px-10 shadow bg-primaryBg text-primaryText">
        <header className="navbar max-w-[1440px] mx-auto">

          {/* -------- Left: Logo -------- */}
          <div className="navbar-start">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="VitalLogic"
                className="h-[52px] w-auto"
                priority
              />
            </Link>
          </div>

          {/* -------- Center: Menu (Desktop) -------- */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8 font-medium text-sm uppercase tracking-wide">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-warning transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------- Right: Info + Icons -------- */}
          <div className="navbar-end flex items-center gap-3">

            {/* Call Info (hide on small screens) */}
            <div className="hidden xl:flex items-center gap-3">
              <div className=" ">
                <FiPhoneCall size={32} />
              </div>
              <div className="leading-tight text-sm">
                <p className="text-gray-500">Call Now</p>
                <p className="font-semibold ">
                  +4569-125-478
                </p>
              </div>
            </div>

            {/* User */}
            <button
              aria-label="User"
              className="btn btn-ghost btn-circle hover:bg-warning/10"
            >
              <FiUser size={20} />
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className="btn btn-ghost btn-circle hover:bg-warning/10"
            >
              <FiShoppingCart size={20} />
            </button>

            {/* Mobile Menu Button */}
            <label
              htmlFor="nav-drawer"
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Menu"
            >
              <FiMenu size={22} />
            </label>
          </div>
        </header>
      </div>

      {/* ================= Drawer (Mobile) ================= */}
    {/* ================= Drawer (Mobile) ================= */}
<div className="drawer-side">
  <label htmlFor="nav-drawer" className="drawer-overlay"></label>

  <aside className="w-72 min-h-full bg-base-100 p-6 relative">

    {/* ---- Close Button ---- */}
    <label
      htmlFor="nav-drawer"
      className="absolute right-4 top-4 btn btn-sm btn-circle btn-ghost"
      aria-label="Close menu"
    >
      ✕
    </label>

    {/* Logo */}
    <Link href="/" className="mb-6 flex items-center">
      <Image src={logo} alt="VitalLogic" className="h-12 w-auto" />
    </Link>

    {/* Menu */}
    <ul className="menu gap-2 font-medium">
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>

    {/* Call Info (Mobile) */}
    <div className="mt-6 flex items-center gap-3 border-t pt-4">
      <div className="p-2 rounded-full bg-warning/10 text-warning">
        <FiPhoneCall size={18} />
      </div>
      <div className="text-sm">
        <p className="text-gray-500">Call Now</p>
        <p className="font-semibold">+4569-125-478</p>
      </div>
    </div>
  </aside>
</div>

    </div>
  );
}
