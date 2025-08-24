"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image"

export default function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita problemas de hidratação com SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Variantes de animação para elementos
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  if (!mounted) return null;

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute left-1/3 bottom-1/4 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      {/* Avatar */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
        className="mb-8"
      >
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
          <Image
            src="/unnamed.jpg"
            alt="Jailson Barros"
            fill //faz a imagem ocupar toda a div (precisa da classe relative)
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Título principal */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={1}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text  bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 "
      >
        Hi, i am <span className="text-blue-600">Jailson</span> 👋
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={2}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        Full-Stack Developer with expertise in React, Node.js,
        and modern architectures. Experienced in building scalable
        web applications and delivering high-quality digital solutions.
      </motion.p>

      {/* Badges/Tags de tecnologias */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={3}
        className="flex flex-wrap justify-center gap-2 mt-6"
      >
        {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PHP", "MySql"].map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Botões de CTA */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={4}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="/projects"
          className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-1"
        >
          See projects
        </a>
        <a
          href="/contact"
          className="px-8 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1"
        >
          Contact me
        </a>
      </motion.div>

      {/* Estatísticas rápidas */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={5}
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl"
      >
        {[
          { value: "8+", label: "Anos de Experiência" },
          { value: "30+", label: "Projetos Completos" },
          { value: "15+", label: "Clientes Satisfeitos" },
          { value: "99%", label: "Taxa de Sucesso" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
