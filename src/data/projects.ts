// On définit les "formes" possibles pour un bloc de contenu
type ImageBlock = {
  type: 'image';
  src: string;
  layout: { gridClasses: string };
};

type TextBlock = {
  type: 'text';
  title: string;
  subtitle?: string;
  content: string;
  layout: { gridClasses: string };
};

// L'interface Project utilise maintenant un tableau de ces blocs
export interface Project {
  id: number;
  title: string;
  description: string;
  year: number;
  blocks: (ImageBlock | TextBlock)[]; 
}

// --- NOTRE PROJET D'EXEMPLE ---
export const projects: Project[] = [
  {
    id: 1,
    title: "Canis Familiaris",
    description: "Une exploration photographique du meilleur ami de l'homme dans divers environnements, capturant des moments de quiétude et d'énergie.",
    year: 2025,
    blocks: [
      // Bloc de Texte
      {
        type: 'text',
        title: 'Canis Familiaris.',
        subtitle: '2024—2025.',
        content: `Une série en cours sur la présence canine dans nos vies.`,
        layout: { gridClasses: 'md:col-span-4' }
      },
      // Début des 19 images de chiens
      { type: 'image', src: "https://placedog.net/800/500?id=1", layout: { gridClasses: 'md:col-start-6 md:col-span-7' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/500/800?id=2", layout: { gridClasses: 'md:col-start-2 md:col-span-4' } }, // Vertical
      { type: 'image', src: "https://placedog.net/800/500?id=3", layout: { gridClasses: 'md:col-start-7 md:col-span-5' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/1200/800?id=4", layout: { gridClasses: 'md:col-span-12' } }, // Full-width Horizontal
      { type: 'image', src: "https://placedog.net/500/800?id=5", layout: { gridClasses: 'md:col-start-8 md:col-span-4' } }, // Vertical
      { type: 'image', src: "https://placedog.net/800/500?id=6", layout: { gridClasses: 'md:col-start-1 md:col-span-7' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/800/500?id=7", layout: { gridClasses: 'md:col-start-5 md:col-span-8' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/500/800?id=8", layout: { gridClasses: 'md:col-start-1 md:col-span-4' } }, // Vertical
      { type: 'image', src: "https://placedog.net/500/800?id=9", layout: { gridClasses: 'md:col-start-6 md:col-span-3' } }, // Vertical
      { type: 'image', src: "https://placedog.net/800/500?id=10", layout: { gridClasses: 'md:col-start-8 md:col-span-5' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/800/500?id=11", layout: { gridClasses: 'md:col-span-6' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/500/800?id=12", layout: { gridClasses: 'md:col-start-8 md:col-span-4' } }, // Vertical
      { type: 'image', src: "https://placedog.net/1200/800?id=13", layout: { gridClasses: 'md:col-start-2 md:col-span-10' } }, // Wide Horizontal
      { type: 'image', src: "https://placedog.net/800/500?id=14", layout: { gridClasses: 'md:col-start-1 md:col-span-5' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/500/800?id=15", layout: { gridClasses: 'md:col-start-7 md:col-span-4' } }, // Vertical
      { type: 'image', src: "https://placedog.net/800/500?id=16", layout: { gridClasses: 'md:col-start-2 md:col-span-6' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/500/800?id=17", layout: { gridClasses: 'md:col-start-9 md:col-span-4' } }, // Vertical
      { type: 'image', src: "https://placedog.net/800/500?id=18", layout: { gridClasses: 'md:col-span-7' } }, // Horizontal
      { type: 'image', src: "https://placedog.net/800/500?id=19", layout: { gridClasses: 'md:col-start-5 md:col-span-8' } }, // Horizontal
    ],
  },
];