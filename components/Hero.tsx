"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center">
      {/* Animação do título */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }} // começa invisível e acima
        animate={{ opacity: 1, y: 0 }}   // aparece e desce para o lugar
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold"
      >
        Olá, sou <span className="text-blue-600">Jailson</span> 👋
      </motion.h1>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        Desenvolvedor Fullstack | Criando experiências digitais incríveis
      </p>

      {/* Botões */}
      <div className="mt-6 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          See Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 rounded-xl border border-gray-400 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}
