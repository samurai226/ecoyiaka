const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function fetchConsumptionData(type) {
  const response = await fetch(`${API_BASE_URL}/consumption/${type}`)
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return response.json()
}

// Ajoutez d'autres fonctions d'API ici