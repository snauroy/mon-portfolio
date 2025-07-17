import { projects } from '@/data/projects';
import ProjectGallery from '@/components/ProjectGallery'; // On importe notre nouveau composant

// C'est notre Composant Serveur
export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  
  const project = projects.find(p => p.id.toString() === params.id);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  // Il ne fait que trouver le bon projet et le passer au composant d'affichage
  return (
    <main className="container mx-auto">
      <ProjectGallery project={project} />
    </main>
  );
}