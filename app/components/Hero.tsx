"use client";
import { motion } from "framer-motion";
import fadeIn from "../animations/animations";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
        className="mb-6 text-5xl font-bold"
      >
        Olá, eu sou Jailson
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1}
        className="mb-6 text-xl text-gray-600"
      >
        Desenvolvedor Full Stack | React | Next.js | Node.js
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={2}
        className="flex justify-center gap-4"
      >
        <a href="#projects" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Meus Projetos
        </a>
        <a href="#contact" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
          Contato
        </a>
      </motion.div>
    </section>
  );
}
