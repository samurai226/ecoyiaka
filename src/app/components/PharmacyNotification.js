'use client';

import { useState, useEffect } from 'react';

const pharmacies = [
  { name: 'Pharmacie Centrale', address: 'Avenue de l\'Indépendance', phone: '25 30 66 77' },
  { name: 'Pharmacie de la Paix', address: 'Rue de la Liberté', phone: '25 31 12 34' },
  { name: 'Pharmacie du Progrès', address: 'Boulevard de la Révolution', phone: '25 32 45 67' },
];

export default function PharmacyNotification() {
  const [currentPharmacy, setCurrentPharmacy] = useState(null);

  useEffect(() => {
    // Simuler un changement de pharmacie de garde toutes les 24 heures
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * pharmacies.length);
      setCurrentPharmacy(pharmacies[randomIndex]);
    }, 86400000); // 24 heures en millisecondes

    // Initialiser avec une pharmacie aléatoire
    setCurrentPharmacy(pharmacies[Math.floor(Math.random() * pharmacies.length)]);

    return () => clearInterval(interval);
  }, []);

  if (!currentPharmacy) return null;

  return (
    <div className="bg-white justify-center p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-green-600">Pharmacie de garde</h2>
      <div>
        <h3 className="font-semibold">{currentPharmacy.name}</h3>
        <p>{currentPharmacy.address}</p>
        <p>Tél : {currentPharmacy.phone}</p>
      </div>
    </div>
  );
}