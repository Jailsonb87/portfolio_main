"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">Meu Portfólio</Link>
      <div className="flex gap-4">
        <Link href="/projects">Projetos</Link>
        <Link href="/contact">Contato</Link>
        <Link href="/about">Sobre</Link>
      </div>
    </nav>
  );
}
