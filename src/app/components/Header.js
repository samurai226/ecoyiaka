import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">ecoTrack</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about" className="hover:text-green-200">À propos</Link></li>
            <li><Link href="/features" className="hover:text-green-200">Fonctionnalités</Link></li>
            <li><Link href="/pricing" className="hover:text-green-200">Tarifs</Link></li>
            <li><Link href="/login" className="hover:text-green-200">Connexion</Link></li>
            <li><Link href="/signup" className="bg-white text-green-600 px-3 py-1 rounded-full hover:bg-green-100">S'inscrire</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;