export function About() {
  return (
    <section id="about" className="py-20 max-w-3xl mx-auto text-center">
      {/* Título */}
      <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>

      {/* Texto de apresentação */}
      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        Sou um desenvolvedor apaixonado por tecnologia e programação. 
        Gosto de transformar ideias em projetos reais, criando aplicações 
        modernas, responsivas e com boas práticas.
      </p>

      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        Atualmente estudo <span className="font-semibold text-blue-500">Next.js</span>, 
        <span className="font-semibold text-blue-500"> React</span> e 
        <span className="font-semibold text-blue-500"> Node.js</span>, 
        buscando sempre evoluir e aprender novas tecnologias.
      </p>
    </section>
  );
}
