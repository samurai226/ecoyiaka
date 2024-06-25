'use client'

import { useConsumption } from '../../../hooks/useConsumption'
import ConsumptionChart from '../../components/ConsumptionChart'
import ConsumptionTable from '../../components/ConsumptionTable'

export default function EnergyConsumption() {
  const { data, loading, error } = useConsumption('energy')

  if (loading) return <div>Chargement...</div>
  if (error) return <div>Erreur : {error.message}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Consommation d'énergie</h1>
      <ConsumptionChart data={data} />
      <ConsumptionTable data={data} />
    </div>
  )
}