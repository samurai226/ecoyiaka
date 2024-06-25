'use client'

import { Line } from 'react-chartjs-2'

export default function ConsumptionChart({ data }) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Consommation',
        data: data.values,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Consommation (kWh)'
        }
      }
    }
  }

  return <Line data={chartData} options={options} />
}