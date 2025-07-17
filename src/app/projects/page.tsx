import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard'; // 1. On importe notre nouveau composant

export default function ProjectsPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* 2. On utilise ProjectCard dans notre boucle */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}