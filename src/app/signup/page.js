'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour envoyer les données d'inscription à votre backend
    console.log('Données du formulaire:', formData);
    // Réinitialiser le formulaire ou rediriger l'utilisateur
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center text-green-600">Rejoignez ecoTrack</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="name">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Votre email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block">Mot de passe</label>
              <input
                type="password"
                placeholder="Votre mot de passe"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block">Confirmer le mot de passe</label>
              <input
                type="password"
                placeholder="Confirmez votre mot de passe"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600"
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700">S'inscrire</button>
              <Link href="/login" className="text-sm text-green-600 hover:underline">Déjà un compte ?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}