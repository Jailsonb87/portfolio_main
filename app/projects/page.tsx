import ProjectCard from "../components/ProjectCard";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  homepage: string | null;
};

type ProjectsProps = {
  repos: Repo[];
};

export default function Projects({ repos }: ProjectsProps) {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Projetos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {repos.map((repo, index) => (
          <ProjectCard key={repo.id} repo={repo} index={index} />
        ))}
      </div>
    </section>
  );
}

// ✅ Busca os repositórios com token no servidor (seguro)
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    },
  });

  const repos: Repo[] = await res.json();

  return {
    props: {
      repos,
    },
  };
}
