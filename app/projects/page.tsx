import ProjectCard from "@/components/ProjectCard";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
};

async function getRepos(): Promise<Repo[]> {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
    cache: "no-store", // 🚀 sempre pega dados atuais
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar repositórios do GitHub");
  }

  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">
      {repos.length === 0 && (
        <p className="text-gray-500">Nenhum repositório encontrado.</p>
      )}
      {repos.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}