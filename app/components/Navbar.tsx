"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">Jailson/dev</Link>
      <div className="flex gap-4">
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contatct</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
