"use client";

import { Project } from '@/data/projects';

// On n'importe plus useState ni Lightbox

export default function ProjectGallery({ project }: { project: Project }) {
  
  return (
    <div>
      <div className="text-center my-12 md:my-24">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-24">
        
        {project.blocks.map((block, index) => {
          
          if (block.type === 'image') {
            return (
              // Le conteneur n'a plus ni onClick ni curseur
              <div key={index} className={block.layout.gridClasses}>
                <img
                  src={block.src}
                  alt={`Image ${index + 1} du projet ${project.title}`}
                  className="w-full h-auto"
                />
              </div>
            );
          }

          if (block.type === 'text') {
            return (
              <div key={index} className={block.layout.gridClasses}>
                <h2 className="text-2xl font-bold">{block.title}</h2>
                {block.subtitle && <p className="text-sm text-gray-500 mt-2">{block.subtitle}</p>}
                <p className="text-sm text-gray-600 mt-4 whitespace-pre-line">{block.content}</p>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="max-w-2xl mx-auto my-16 md:my-24">
        <p className="text-xl text-center leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
}