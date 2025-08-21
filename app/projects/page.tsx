"use client";
import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState<any[]>([]);
  const [erroImgs, setErroImgs] = useState<{ [key: number]: boolean }>({}); // controla erro das imagens

  useEffect(() => {
    fetch("https://api.github.com/users/Jailsonb87/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {repos.map((repo) => {
          const gradients = [
            "from-pink-500 to-yellow-500",
            "from-blue-500 to-green-500",
            "from-purple-500 to-pink-500",
            "from-red-500 to-orange-500",
            "from-teal-500 to-blue-500",
          ];
          const gradient = gradients[repo.name.length % gradients.length];

          const imageUrl = `https://raw.githubusercontent.com/Jailsonb87/${repo.name}/main/img/demo.png`;
          const hasError = erroImgs[repo.id]; // verifica se houve erro ao carregar a imagem

          return (
            <div
              key={repo.id}
              className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-200"
            >
              <div className="relative h-48 w-full flex items-center justify-center">
                {!hasError ? (
                  <img
                    src={imageUrl}
                    alt={repo.name}
                    className="h-full w-full object-cover"
                    onError={() =>
                      setErroImgs((prev) => ({ ...prev, [repo.id]: true }))
                    }
                  />
                ) : (
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${gradient}`}
                  >
                    <span className="text-white text-2xl font-bold text-center px-4">
                      {repo.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 bg-dark flex flex-col gap-2">
                <h3 className="text-xl font-bold">{repo.name}</h3>
                <p className="text-gray-600">{repo.description || "Sem descrição"}</p>
                <div className="flex gap-2 mt-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
