import { useState, useEffect } from 'react'
import { fetchConsumptionData } from '../services/api'

export function useConsumption(type = 'all') {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const consumptionData = await fetchConsumptionData(type)
        setData(consumptionData)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [type])

  return { data, loading, error }
}