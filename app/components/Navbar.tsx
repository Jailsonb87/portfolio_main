"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="font-extrabold text-2xl tracking-wide hover:text-blue-400 transition"
        >
          Jailson<span className="text-blue-500">/dev</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
        </div>

        {/* Botão Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Drawer Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fundo escuro por trás */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer lateral */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-3/4 bg-gray-900 text-white flex flex-col gap-6 p-6 z-50 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                Contact
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-blue-400 transition"
              >
                About
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
