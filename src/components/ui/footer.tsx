"use client";

import Link from "next/link";
import Image from "next/image";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import logo from "@/src/assets/icon/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primaryBg text-primaryText border-t border-[var(--border)]">
      
      {/* ================= Top Section ================= */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image src={logo} alt="VitalLogic" className="h-12 w-auto" />
          </Link>
          <p className="text-sm text-[var(--secondary-text)] leading-relaxed">
            VitalLogic Consulting provides professional business and
            technology solutions to help organizations grow, innovate,
            and succeed in a competitive market.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-sm uppercase mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="text-[var(--secondary-text)] hover:text-[var(--accent)] transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-[var(--secondary-text)] hover:text-[var(--accent)] transition"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[var(--secondary-text)] hover:text-[var(--accent)] transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[var(--secondary-text)] hover:text-[var(--accent)] transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-sm uppercase mb-4 tracking-wide">
            Services
          </h3>
          <ul className="space-y-3 text-sm text-[var(--secondary-text)]">
            <li>Business Consulting</li>
            <li>IT Solutions</li>
            <li>Product Strategy</li>
            <li>Digital Transformation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-sm uppercase mb-4 tracking-wide">
            Contact
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-1 text-[var(--accent)]" />
              <span className="text-[var(--secondary-text)]">
                Dhaka, Bangladesh
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiPhoneCall className="text-[var(--accent)]" />
              <span className="text-[var(--secondary-text)]">
                +4569-125-478
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-[var(--accent)]" />
              <span className="text-[var(--secondary-text)]">
                support@vitallogic.com
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= Bottom Bar ================= */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-[var(--secondary-text)]">
          <p>
            © {new Date().getFullYear()} VitalLogic Consulting. All rights reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <span className="text-[var(--accent)] font-medium">
              VitalLogic Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
