import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition hover:scale-105">
      {/* Imagem */}
      <Image src={image} alt={title} width={600} height={400} className="w-full h-40 object-cover" />

      {/* Conteúdo */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          className="text-blue-600 font-medium hover:underline"
        >
          Ver Projeto →
        </a>
      </div>
    </div>
  );
}
