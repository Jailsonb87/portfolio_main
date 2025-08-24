"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import fadeIn from "../animations/animations";
import React from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
};

type ProjectCardProps = {
  repo: Repo;
  index: number;
};

const BLUR_PLACEHOLDER = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiIC8+PC9zdmc+";

export default function ProjectCard({ repo, index }: ProjectCardProps) {
  const [erroImg, setErroImg] = React.useState(false);
  const gradients = [
    "from-pink-500 to-yellow-500",
    "from-blue-500 to-green-500",
    "from-purple-500 to-pink-500",
    "from-red-500 to-orange-500",
    "from-teal-500 to-blue-500",
  ];
  const gradient = gradients[repo.name.length % gradients.length];
  const imageUrl = `https://raw.githubusercontent.com/Jailsonb87/${repo.name}/main/img/demo.png`;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      custom={index}
      className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-200"
    >
      <div className="relative h-48 w-full flex items-center justify-center">
        {!erroImg ? (
          <Image
            src={imageUrl}
            alt={repo.name}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
            onError={() => setErroImg(true)}
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${gradient}`}>
            <span className="text-white text-2xl font-bold text-center px-4">{repo.name}</span>
          </div>
        )}
      </div>

      <div className="p-4 bg-dark flex flex-col gap-2">
        <h3 className="text-xl font-bold">{repo.name}</h3>
        <p className="text-gray-600">{repo.description || "Sem descrição"}</p>
        <div className="flex gap-2 mt-2">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">GitHub</a>
          {repo.homepage && <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Demo</a>}
        </div>
      </div>
    </motion.div>
  );
}
