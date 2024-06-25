import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ecoTrack</h3>
            <p className="text-sm">Ensemble pour un avenir plus vert.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-green-300">À propos</Link></li>
              <li><Link href="/features" className="text-sm hover:text-green-300">Fonctionnalités</Link></li>
              <li><Link href="/pricing" className="text-sm hover:text-green-300">Tarifs</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm hover:text-green-300">Politique de confidentialité</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-green-300">Conditions d'utilisation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white hover:text-green-300"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-green-300"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 ecoTrack. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;