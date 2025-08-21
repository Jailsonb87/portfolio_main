"use client"; // habilita interatividade (React Client Component)
import Link from "next/link"; // navegação entre páginas

export function Navbar() {
  return (
    <header className="w-full py-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo ou nome */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Jailson.dev
        </Link>

        {/* Links de navegação */}
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-blue-500">Sobre</Link>
          <Link href="/projects" className="hover:text-blue-500">Projetos</Link>
          <Link href="/contact" className="hover:text-blue-500">Contato</Link>
        </div>
      </nav>
    </header>
  );
}
