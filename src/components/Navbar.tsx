import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Mon Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Accueil</Link>
          <Link href="/projects" className="hover:text-gray-300">Projets</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}