'use client';

import { useState, useEffect } from 'react';

const tarifsSonabel = {
  "Domestique": [
    { max: 50, price: 75 },
    { max: 200, price: 100 },
    { max: Infinity, price: 114 }
  ],
  "Non Domestique": [
    { max: Infinity, price: 114 }
  ],
  "Moyenne Tension": [
    { max: Infinity, price: 105 }
  ]
};

export default function ElectricityCalculator() {
  const [power, setPower] = useState('');
  const [voltage, setVoltage] = useState('220');
  const [hours, setHours] = useState('24');
  const [category, setCategory] = useState('Domestique');
  const [result, setResult] = useState(null);
  const [appliance, setAppliance] = useState('');

  const commonAppliances = [
    { name: 'Réfrigérateur', power: 150 },
    { name: 'Climatiseur', power: 1500 },
    { name: 'Télévision', power: 100 },
    { name: 'Machine à laver', power: 500 },
    { name: 'Ventilateur', power: 50 },
  ];

  useEffect(() => {
    if (power && hours && voltage) {
      calculateCost();
    }
  }, [power, hours, voltage, category]);

  const calculateCost = () => {
    const kW = power / 1000;
    const kWhPerMonth = kW * Number(hours) * 30;
    
    let totalCost = 0;
    let remainingKWh = kWhPerMonth;
    
    for (const tranche of tarifsSonabel[category]) {
      if (remainingKWh > 0) {
        const kWhInTranche = Math.min(remainingKWh, tranche.max);
        totalCost += kWhInTranche * tranche.price;
        remainingKWh -= kWhInTranche;
      } else {
        break;
      }
    }

    setResult(Math.round(totalCost));
  };

  const handleApplianceSelect = (e) => {
    const selectedAppliance = commonAppliances.find(a => a.name === e.target.value);
    if (selectedAppliance) {
      setPower(selectedAppliance.power.toString());
      setAppliance(selectedAppliance.name);
    } else {
      setAppliance('');
    }
  };

  return (
    <div className="bg-white justify-center p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-green-600 text-center">Calculateur de coût d'électricité SONABEL</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="category" className="block mb-2 font-medium text-gray-700">Catégorie tarifaire</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {Object.keys(tarifsSonabel).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="appliance" className="block mb-2 font-medium text-gray-700">Choisissez un appareil</label>
          <select
            id="appliance"
            value={appliance}
            onChange={handleApplianceSelect}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Appareil personnalisé</option>
            {commonAppliances.map((app) => (
              <option key={app.name} value={app.name}>{app.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="power" className="block mb-2 font-medium text-gray-700">Puissance de l'appareil (en watts)</label>
          <input 
            type="number" 
            id="power"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="ex: 1000"
          />
        </div>
        <div>
          <label htmlFor="voltage" className="block mb-2 font-medium text-gray-700">Tension (en volts)</label>
          <select
            id="voltage"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="220">220V (Basse Tension)</option>
            <option value="380">380V (Moyenne Tension)</option>
          </select>
        </div>
        <div>
          <label htmlFor="hours" className="block mb-2 font-medium text-gray-700">Heures d'utilisation par jour</label>
          <input 
            type="number" 
            id="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="ex: 24"
          />
        </div>
        {result !== null && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg">
            <p className="text-lg text-center text-green-800">Coût mensuel estimé :</p>
            <p className="text-3xl font-bold text-center text-green-600">{result.toLocaleString()} FCFA</p>
            <p className="text-sm text-center text-green-700 mt-2">
              Basé sur les tarifs SONABEL pour la catégorie {category}
            </p>
          </div>
        )}
        <div className="text-sm text-gray-600 mt-4">
          <p>Conseils pour économiser :</p>
          <ul className="list-disc list-inside mt-2">
            <li>Éteignez les appareils non utilisés</li>
            <li>Utilisez des appareils à faible consommation</li>
            <li>Profitez de la lumière naturelle quand c'est possible</li>
          </ul>
        </div>
      </div>
    </div>
  );
}