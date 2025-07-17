import { Project } from "@/data/projects";
import Link from 'next/link'; // 1. Importer Link

export default function ProjectCard({ project }: { project: Project }) {
  return (
    // 2. Envelopper la carte dans un Link
    <Link href={`/projects/${project.id}`} className="block hover:scale-105 transition-transform">
      <div className="border rounded-lg p-6 shadow-lg h-full">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-500 text-sm mb-2">{project.year}</p>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}