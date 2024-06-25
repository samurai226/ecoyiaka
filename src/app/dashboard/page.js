'use client'

import { useEffect, useState } from 'react'
import ConsumptionChart from '../components/ConsumptionChart'
import GamificationSystem from '../components/GamificationSystem'
import { useConsumption } from '../../hooks/useConsumption'

export default function Dashboard() {
  const { data: consumptionData, loading, error } = useConsumption()

  if (loading) return <div>Chargement...</div>
  if (error) return <div>Erreur : {error.message}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ConsumptionChart data={consumptionData} />
        <GamificationSystem />
      </div>
    </div>
  )
}